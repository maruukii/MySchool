import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState } from "react";
import "./class.scss";
import Add from "../../components/add/add";
import {classes} from "../../../data"
import Modify from '../../components/add/modify';
const Class = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const columns = [
        {
            field: "id",
            type: "number",
            headerName: "ID",
            width: 100,
          },
          {
            field: "level",
            type: "text",
            headerName: "Class level",
            width: 150,
          },
          
          {
            field: "spec",
            type: "text",
            headerName: "Class specialty",
            width: 200,
          },
          {
            field: "classname",
            type: "text",
            headerName: "Class name",
            width: 150,
          },
        {
          field: "alumnis",
          type: "number",
          headerName: "# Alumnis",
          width: 100,
        },
           
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Classes</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Class</button>
        </div>
        <DataTable slug="Classes" columns={columns} setModifopen={setModifopen} setRow={setRow} rows={classes} />
        {open && <Add slug="Class" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="Class" columns={columns} row={row} setModifopen={setModifopen} />}
      </div>
    );
  };

export default Class;
