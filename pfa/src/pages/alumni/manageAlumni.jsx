import React from 'react'
import DataTable from "../../components/datatable/datatableAlumni";
import { useState,useEffect } from "react";
import "./alumni.scss";
import Add from "../../components/add/add";
//import {alumnis} from "../../../data";
import Modify from '../../components/add/modify';
import Affect from '../../components/add/affect';
import Delete from '../../components/add/delete';
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const workspace = () => {
  const [timetable, settimetable] = useState({});
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [delopen, setDelopen] = useState(false);
    const [row, setRow] = useState();
    const [rows, setRows] = useState([]);
    const [classes, setClasses] = useState([])
    const [affectopen, setAffectopen] = useState(false);
    // console.log(row)
    const [array, setArray] = useState({})
    const [old, setold] = useState()
    useEffect(() => {
      axios.get("http://localhost:3001/alumnis")
          .then(response => {
            const transformedData = response.data.map(alumni => ({
              ...alumni,
              Class: alumni.Class ? alumni.Class.ClassName : undefined
            }));
            setRows(transformedData);
          })
          .catch(err => {
              console.log(err);
          });
  }, [array]);
    const deleteData=()=>{
      {enqueueSnackbar('Alumni Deleted !')}
      axios.delete('http://localhost:3001/alumnis/delete/'+row["_id"] )
            .then(response => {
              console.log(response.data);
              axios.get("http://localhost:3001/alumnis")
            .then(response => {
                console.log(response.data);
                const transformedData = response.data.map(alumni => ({
                  ...alumni,
                  Class: alumni.Class ? alumni.Class.ClassName : undefined
                }));
                setRows(transformedData);
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
      {enqueueSnackbar('Alumni Modified !')}
      axios.put('http://localhost:3001/alumnis/update/'+row["_id"],array)
            .then(response => {
              console.log(response.data);
              if(response.data.Class){
                 console.log(old)
                 console.log(response.data.Class)
                if(response.data.Class!==old){
                  axios.put('http://localhost:3001/classes/updateAlumnisUp/'+response.data.Class)
                  .then(response => {
                    axios.put('http://localhost:3001/classes/updateAlumnisDown/'+old).then(res=>{})
                  })
                }
                 
              }
              setArray({})
              axios.get("http://localhost:3001/alumnis")
            .then(response => {
              const transformedData = response.data.map(alumni => ({
                ...alumni,
                Class: alumni.Class ? alumni.Class.ClassName : undefined
              }));
              setRows(transformedData);

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
      {enqueueSnackbar('Alumni Added !')}
          console.log(array)
          axios.post('http://localhost:3001/alumnis/new', array)
            .then(response => {
              setArray({})
              axios.get("http://localhost:3001/alumnis")
            .then(response => {
              const transformedData = response.data.map(alumni => ({
                ...alumni,
                Class: alumni.Class ? alumni.Class.ClassName : undefined
              }));
              setRows(transformedData);
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
    const columns = [
        {
            field: "FirstName",
            type: "text",
            headerName: "First name",
            width: 100,
          },
          {
            field: "LastName",
            type: "text",
            headerName: "Last name",
            width: 150,
          },
          {
            field: "Age",
            type: "number",
            headerName: "Age",
            width: 100,
            align:"left",
            headerAlign:"left"
          },
          {
            field: "Level",
            type: "string",
            headerName: "Level",
            width: 250,
          },
        {
          field: "Spec",
          type: "string",
          headerName: "Specialty",
          width: 200,
        },
        
        {
          field: "Class",
          type: "string",
          headerName: "Class",
          width: 250,
        },
         
      ];
      
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Alumnis</h1>
          <div>
      <SnackbarProvider />
      
    </div>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Alumni</button>
        </div>
        <DataTable slug="Alumnis" columns={columns} setModifopen={setModifopen} setAffectopen={setAffectopen} setDelopen={setDelopen}  setRow={setRow} setClasses={setClasses} rows={rows} getRowId={(row) => row._id}/>
        {open && <Add slug="Alumni" columns={columns} setOpen={setOpen} setArray={setArray} array={array} postData={postData}/>}
        {modifopen && <Modify slug="Alumni" columns={columns} row={row} setModifopen={setModifopen} setArray={setArray} array={array} putData={putData}/>}
        {affectopen &&<Affect slug="Alumni" columns={columns} row={row} classes={classes} setAffectopen={setAffectopen} setArray={setArray} array={array} putData={putData} setold={setold}/>}
        {delopen && <Delete slug="Alumni" columns={columns} row={row} deleteData={deleteData} setDelopen={setDelopen} />}

      </div>
    );
  };

export default workspace
