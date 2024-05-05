import React from 'react'
import DataTable from "../../components/datatable/datatableAlumni";
import { useState } from "react";
import "./alumni.scss";
import Add from "../../components/add/add";
import {alumnis} from "../../../data";
import Modify from '../../components/add/modify';
import Affect from '../../components/add/affect';
const workspace = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [affectopen, setAffectopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const columns = [
        {
            field: "first",
            type: "text",
            headerName: "First name",
            width: 100,
          },
          {
            field: "last",
            type: "text",
            headerName: "Last name",
            width: 150,
          },
          {
            field: "age",
            type: "number",
            headerName: "Age",
            width: 100,
          },
        {
          field: "spec",
          type: "string",
          headerName: "Specialty",
          width: 200,
        },
        {
          field: "level",
          type: "string",
          headerName: "Level",
          width: 250,
        },
        {
          field: "class",
          type: "string",
          headerName: "Class",
          width: 250,
        },
         
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Alumnis</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Alumni</button>
        </div>
        <DataTable slug="Alumnis" columns={columns} setModifopen={setModifopen} setAffectopen={setAffectopen} setRow={setRow} rows={alumnis} />
        {open && <Add slug="Alumni" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="Alumni" columns={columns} row={row} setModifopen={setModifopen} />}
        {affectopen && <Affect slug="Alumni" columns={columns} row={row} setAffectopen={setAffectopen} />}
      </div>
    );
  };

export default workspace
