import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState } from "react";
import "./subject.scss";
import Add from "../../components/add/add";
import {subjects} from "../../../data"
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
            width: 100,
          },
          {
            field: "name",
            type: "text",
            headerName: "Subject name",
            width: 150,
          },
          {
            field: "spec",
            type: "text",
            headerName: "Subject specialty",
            width: 200,
          },
        {
          field: "coef",
          type: "string",
          headerName: "Subject Coeff",
          width: 100,
        },
        {
          field: "coefDC",
          type: "number",
          headerName: "DC Coeff",
          width: 100,
        },
        {
            field: "coefTP",
            type: "number",
            headerName: "TP Coeff",
            width: 100,
          },
          {
            field: "coefDS",
            type: "number",
            headerName: "DS Coeff",
            width: 100,
          },
           
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Subjects</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Subject</button>
        </div>
        <DataTable slug="Subjects" columns={columns} setModifopen={setModifopen} setRow={setRow} rows={subjects} />
        {open && <Add slug="Subject" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="Subject" columns={columns} row={row} setModifopen={setModifopen} />}
      </div>
    );
  };

export default workspace
