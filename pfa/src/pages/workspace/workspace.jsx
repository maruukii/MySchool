import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState } from "react";
import "./workspace.scss";
import Add from "../../components/add/add";
import {workspaces} from "../../../data"
import Modify from '../../components/add/modify';
const workspace = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const columns = [
        {
            field: "code",
            type: "text",
            headerName: "Code",
            width: 200,
          },
        {
          field: "name",
          type: "string",
          headerName: "Workspace name",
          width: 200,
        },
        {
          field: "users",
          type: "number",
          headerName: "Users number",
          width: 200,
        },
       
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Workspaces</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Workspace</button>
        </div>
        <DataTable slug="Workspaces" columns={columns} setModifopen={setModifopen} setRow={setRow} rows={workspaces} />
        {open && <Add slug="Workspace" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="Workspace" columns={columns} row={row} setModifopen={setModifopen} />}
      </div>
    );
  };

export default workspace
