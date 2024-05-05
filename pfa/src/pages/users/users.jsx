import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState } from "react";
import "./users.scss";
import Add from "../../components/add/add";
import {userRows} from "../../../data"
import Modify from '../../components/add/modify';
const users = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const columns = [
        {
          field: "img",
          headerName: "Avatar",
          width: 100,
          renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
          },
        },
        {
            field: "cin",
            type: "text",
            headerName: "CIN",
            width: 100,
          },
        {
          field: "firstName",
          type: "string",
          headerName: "First name",
          width: 100,
        },
        {
          field: "lastName",
          type: "string",
          headerName: "Last name",
          width: 100,
        },
        
        {
          field: "phone",
          type: "string",
          headerName: "Phone",
          width: 100,
        },
        {
            field: "job",
            type: "string",
            headerName: "Job",
            width: 150,
          },
        
        {
          field: "verified",
          headerName: "Verified",
          width: 80,
          type: "boolean",
        },
        {
            field: "workspace",
            headerName: "Workspace",
            width: 150,
            type: "string",
          },
          {
            field: "createdAt",
            headerName: "Created At",
            width: 100,
            type: "string",
          },
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Users</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New User</button>
        </div>
        <DataTable slug="users" columns={columns} setModifopen={setModifopen} setRow={setRow} rows={userRows} />
        {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="user" columns={columns} row={row} setModifopen={setModifopen} />}
      </div>
    );
  };

export default users
