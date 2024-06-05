import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState,useEffect } from "react";
import "./users.scss";
import Add from "../../components/add/add";
import Modify from '../../components/add/modify';
import Delete from '../../components/add/delete';
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const users = () => {
  const [old, setold] = useState()
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [delopen, setDelopen] = useState(false);
    const [row, setRow] = useState();
    const [rows, setRows] = useState([]);
    const [array, setArray] = useState({})
    const [workspace, setWorkspace] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/workspaces/");
          setWorkspace(response.data);
        } catch (error) {
          console.error('Error fetching workspace:', error);
        }
      };
  
      fetchData();
    }, [rows]); 
    // console.log(row)
    const deleteData=()=>{
      {enqueueSnackbar('User Deleted !')}
      axios.delete('http://localhost:3001/personnels/delete/'+row["_id"] )
            .then(response => {
              console.log(response.data);
              axios.get("http://localhost:3001/personnels")
            .then(response => {
              const transformedData = response.data.map(workspace => ({
                ...workspace,
                Workspace: workspace.Workspace ? workspace.Workspace.Name : undefined
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
      {enqueueSnackbar('User Modified !')}
      axios.put('http://localhost:3001/personnels/update/'+row["_id"],array)
            .then(response => {
            //   if(response.data.Workspace){
            //     console.log(old)
            //     console.log(response.data.Workspace)
            //    if(response.data.Workspace!==old){
            //      axios.put('http://localhost:3001/workspaces/updateUsersUp/'+response.data.Workspace)
            //      .then(response => {
            //        axios.put('http://localhost:3001/workspaces/updateUsersDown/'+old).then(res=>{})
            //      })
            //    }
                
            //  }
              setArray({})
              axios.get("http://localhost:3001/personnels")
            .then(response => {
              const transformedData = response.data.map(workspace => ({
                ...workspace,
                Workspace: workspace.Workspace ? workspace.Workspace.Name : undefined
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
    const postData = async () => {
      {enqueueSnackbar('User Added !')}
      try {
        console.log(array);
        const response = await axios.post('http://localhost:3001/personnels/new', array);
        console.log(response.data);
        axios.put('http://localhost:3001/workspaces/updateUsersUp/'+array.Workspace)

        if (array.Job === "Teacher") {
          const arr = {
            Personnel: response.data["_id"],
            Rank: array["Rank"],
            Specialty: array["Specialty"]
          };
          console.log(arr);
          await axios.post('http://localhost:3001/teachers/new', arr);
          console.log("Teacher saved");
        }
        else if(array.Job === "Supervisor"){
          const arr = {
            Personnel: response.data["_id"],
            Rank: array["Rank"],
          };
          await axios.post('http://localhost:3001/supervisors/new', arr);
          console.log("Supervisor saved");
        }
        setArray({});
        const personnelsResponse = await axios.get("http://localhost:3001/personnels");
        const transformedData = personnelsResponse.data.map(workspace => ({
          ...workspace,
          Workspace: workspace.Workspace ? workspace.Workspace.Name : undefined
        }));
        setRows(transformedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  useEffect(() => {
    axios.get("http://localhost:3001/personnels")
        .then(response => {
          const transformedData = response.data.map(workspace => ({
            ...workspace,
            Workspace: workspace.Workspace ? workspace.Workspace.Name : undefined
          }));
          setRows(transformedData);
        })
        .catch(err => {
            console.log(err);
        });
        

}, [rows]);
    // setColumns( [
    //     // {
    //     //   field: "img",
    //     //   headerName: "Avatar",
    //     //   width: 100,
    //     //   renderCell: (params) => {
    //     //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
    //     //   },
    //     // },
    //     {
    //       field: "ID",
    //       type: "text",
    //       headerName: "ID",
    //       width: 100,
    //     },
    //     {
    //         field: "CIN",
    //         type: "number",
    //         headerName: "CIN",
    //         width: 100,
    //         align:"left",
    //         headerAlign:"left"
    //       },
    //     {
    //       field: "FirstName",
    //       type: "string",
    //       headerName: "First name",
    //       width: 100,
    //     },
    //     {
    //       field: "LastName",
    //       type: "string",
    //       headerName: "Last name",
    //       width: 100,
    //     },
    //     {
    //       field: "Password",
    //       type: "string",
    //       headerName: "Password",
    //       width: 100,
    //     },
    //     {
    //       field: "PhoneNumber",
    //       type: "text",
    //       headerName: "Phone number",
    //       width: 100,

    //     },
    //     {
    //         field: "Job",
    //         type: "string",
    //         headerName: "Job",
    //         width: 150,
    //       },
    //     {
    //         field: "Workspace",
    //         headerName: "Workspace",
    //         width: 150,
    //         type: "string",
    //       },
    //       {
    //         field: "createdAt",
    //         headerName: "Created At",
    //         width: 100,
    //         type: "string",
    //       },
    //   ])
      const columns=[
        {
          field: "ID",
          type: "text",
          headerName: "ID",
          width: 200,
        },
        {
          field: "CIN",
          type: "text",
          headerName: "CIN",
          width: 150,
        },
        {
          field: "FirstName",
          type: "string",
          headerName: "First name",
          width: 100,
        },
        {
          field: "LastName",
          type: "string",
          headerName: "Last name",
          width: 100,
        },
        
        {
          field: "PhoneNumber",
          type: "text",
          headerName: "Phone",
          width: 100,
        },
        {
          field: "Job",
          type: "string",
          headerName: "Job",
          width: 100,
        },
        {
          field: "Workspace",
          headerName: "Workspace",
          width: 150,
          type: "string",
        },
        {
          field: "createdAt",
          headerName: "Created At",
          width: 180,
          type: "string",
        },
      ];
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Users</h1>
          <div>
      <SnackbarProvider />
      
    </div>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New User</button>
        </div>
        <DataTable slug="users" columns={columns} setModifopen={setModifopen} setDelopen={setDelopen} setRow={setRow} rows={rows} getRowId={(row) => row._id}/>
        {open && <Add slug="user" columns={columns} workspace={workspace} setOpen={setOpen} setArray={setArray} array={array} postData={postData}/>}
        {modifopen && <Modify slug="user" columns={columns} workspace={workspace}  row={row} setModifopen={setModifopen} setArray={setArray} array={array} putData={putData} setold={setold}/>}
        {delopen && <Delete slug="user" columns={columns} row={row} deleteData={deleteData} setDelopen={setDelopen} />}
      </div>
    );
  };

export default users
