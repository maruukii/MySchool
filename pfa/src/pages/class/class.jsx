import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState,useEffect  } from "react";
import "./class.scss";
import Add from "../../components/add/add";
import Modify from '../../components/add/modify';
import axios from "axios";
import Delete from '../../components/add/delete';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
const Class = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    const [delopen, setDelopen] = useState(false);
    // console.log(row)
    const [rows, setRows] = useState([]);
    const [array, setArray] = useState({})
    const deleteData=()=>{
      {enqueueSnackbar('Class Deleted !')}
      axios.delete('http://localhost:3001/classes/delete/'+row["_id"] )
            .then(response => {
              console.log(response.data);
              axios.get("http://localhost:3001/classes")
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
      {enqueueSnackbar('Class Modified !')}
      axios.put('http://localhost:3001/classes/update/'+row["_id"],array)
            .then(response => {
              console.log(response.data);
              setArray({})
              axios.get("http://localhost:3001/classes")
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
      {enqueueSnackbar('Class Added !')}
      console.log(array)
      axios.post('http://localhost:3001/classes/new', array)
        .then(response => {
          setArray({})
          axios.get("http://localhost:3001/classes")
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
    axios.get("http://localhost:3001/classes")
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
            field: "Level",
            type: "text",
            headerName: "Class level",
            width: 150,
          },
          
          {
            field: "ClassSpec",
            type: "text",
            headerName: "Class specialty",
            width: 200,
          },
          {
            field: "ClassName",
            type: "text",
            headerName: "Class name",
            width: 150,
          },
        {
          field: "AlumnisNumber",
          type: "number",
          headerName: "# Alumnis",
          width: 200,
          align:"left",
          headerAlign:"left"
        },
           
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Classes</h1>
          <div>
      <SnackbarProvider />
      
    </div>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Class</button>
        </div>
        <DataTable slug="Classes" columns={columns} setModifopen={setModifopen} setDelopen={setDelopen}  setRow={setRow} rows={rows} getRowId={(row) => row._id}/>
        {open && <Add slug="Class" columns={columns} setOpen={setOpen} setArray={setArray} array={array} postData={postData}/>}
        {modifopen && <Modify slug="Class" columns={columns} row={row} setModifopen={setModifopen} setArray={setArray} array={array} putData={putData}/>}
        {delopen && <Delete slug="Class" columns={columns} row={row} deleteData={deleteData} setDelopen={setDelopen} />}

      </div>
    );
  };

export default Class;
