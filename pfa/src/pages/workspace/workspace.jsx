import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState,useEffect } from "react";
import "./workspace.scss";
import Add from "../../components/add/add";
import Modify from '../../components/add/modify';
import axios from "axios";
import Delete from '../../components/add/delete';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const workspace = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const [delopen, setDelopen] = useState(false);
    const [rows, setRows] = useState([]);
    const [array, setArray] = useState({})
    const deleteData=()=>{
      {enqueueSnackbar('Workspace Deleted !')}
      axios.delete('http://localhost:3001/workspaces/delete/'+row["_id"] )
            .then(response => {
              console.log(response.data);
              axios.get("http://localhost:3001/workspaces")
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
            .catch(err => {
                console.log(err);
            });
            })
            .catch(error => {
              // Handle error if needed
              console.error('Error:', error);
            });
    }
    const putData=()=>{
      {enqueueSnackbar('Workspace Modified !')}
      axios.put('http://localhost:3001/workspaces/update/'+row["_id"],array)
            .then(response => {
              console.log(response.data);
              setArray({})
              axios.get("http://localhost:3001/workspaces")
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
            .catch(err => {
                console.log(err);
            });
            })
            .catch(error => {
              // Handle error if needed
              console.error('Error:', error);
            });
    }
    const postData =() => {
      {enqueueSnackbar('Workspace Added !')}
      console.log(array)
      axios.post('http://localhost:3001/workspaces/new', array)
        .then(response => {
          setArray({})
          axios.get("http://localhost:3001/workspaces")
        .then(response => {
            console.log(response.data);
            setRows(response.data);
        })
        .catch(err => {
            console.log(err);
        });
          console.log(response.data);
        })
        .catch(error => {
          // Handle error if needed
          console.error('Error:', error);
        });
        
    
  };
  useEffect(() => {
    axios.get("http://localhost:3001/workspaces")
        .then(response => {
            console.log(response.data);
            setRows(response.data);
        })
        .catch(err => {
            console.log(err);
        });
}, [array]);
    const columns = [
        {
            field: "Code",
            type: "text",
            headerName: "Code",
            width: 200,
          },
        {
          field: "Name",
          type: "string",
          headerName: "Workspace name",
          width: 200,
        },
        {
          field: "Users",
          type: "number",
          headerName: "Users",
          width: 200,
          align:"left",
          headerAlign:"left"
        },
       
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Workspaces</h1>
          <div>
      <SnackbarProvider />
      
    </div>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Workspace</button>
        </div>
        <DataTable slug="Workspaces" columns={columns} setModifopen={setModifopen} setDelopen={setDelopen} setRow={setRow} rows={rows} getRowId={(row) => row._id} />
        {open && <Add slug="Workspace" columns={columns} setOpen={setOpen} setArray={setArray} array={array} postData={postData}/>}
        {modifopen && <Modify slug="Workspace" columns={columns} row={row} setModifopen={setModifopen} setArray={setArray} array={array} putData={putData}/>}
        {delopen && <Delete slug="Subject" columns={columns} row={row} deleteData={deleteData} setDelopen={setDelopen} />}
      </div>
    );
  };

export default workspace
