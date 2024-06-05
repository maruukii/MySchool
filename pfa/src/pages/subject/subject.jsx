import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState,useEffect } from "react";
import "./subject.scss";
import Add from "../../components/add/add";
import Modify from '../../components/add/modify';
import axios from "axios";
import Delete from '../../components/add/delete';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const workspace = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    // console.log(row)
    const [delopen, setDelopen] = useState(false);
    const [rows, setRows] = useState([]);
    const [array, setArray] = useState({})
    const deleteData=()=>{
      {enqueueSnackbar('Subject Deleted !')}
      axios.delete('http://localhost:3001/subjects/delete/'+row["_id"] )
            .then(response => {
              console.log(response.data);
              axios.get("http://localhost:3001/subjects")
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
      {enqueueSnackbar('Subject Modified !')}
      axios.put('http://localhost:3001/subjects/update/'+row["_id"],array)
            .then(response => {
              console.log(response.data);
              setArray({})
              axios.get("http://localhost:3001/subjects")
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
      {enqueueSnackbar('Subject Added !')}
      console.log(array)
      axios.post('http://localhost:3001/subjects/new', array)
        .then(response => {
          setArray({})
          axios.get("http://localhost:3001/subjects")
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
    axios.get("http://localhost:3001/subjects")
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
            field: "SubjectName",
            type: "text",
            headerName: "Subject name",
            width: 150,
          },
          {
            field: "Level",
            type: "text",
            headerName: "Subject level",
            width: 150,
          },
          {
            field: "Spec",
            type: "text",
            headerName: "Subject specialty",
            width: 150,
          },
        {
          field: "Coef",
          type: "number",
          headerName: "Subject Coeff",
          width: 150,
          align:"left",
          headerAlign:"left"
        },
        {
          field: "CoefDC",
          type: "number",
          headerName: "DC Coeff",
          width: 100,
          align:"left",
          headerAlign:"left"
        },
        {
            field: "CoefTP",
            type: "number",
            headerName: "TP Coeff",
            width: 100,
            align:"left",
          headerAlign:"left"
          },
          {
            field: "CoefDS",
            type: "number",
            headerName: "DS Coeff",
            width: 100,
            align:"left",
          headerAlign:"left"
          },
           
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Subjects</h1>
          <div>
      <SnackbarProvider />
      
    </div>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Subject</button>
        </div>
        <DataTable slug="Subjects" columns={columns} setModifopen={setModifopen} setDelopen={setDelopen} setRow={setRow} rows={rows} getRowId={(row) => row._id} />
        {open && <Add slug="Subject" columns={columns} setOpen={setOpen} setArray={setArray} array={array} postData={postData}/>}
        {modifopen && <Modify slug="Subject" columns={columns} row={row} setModifopen={setModifopen} setArray={setArray} array={array} putData={putData}/>}
        {delopen && <Delete slug="Subject" columns={columns} row={row} deleteData={deleteData} setDelopen={setDelopen} />}

      </div>
    );
  };

export default workspace
