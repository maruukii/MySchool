import React from 'react'
import DataTable from "../../components/datatable/datatable";
import { useState } from "react";
import "./classroom.scss";
import Add from "../../components/add/add";
import {classrooms} from "../../../data"
import Modify from '../../components/add/modify';
const Class = () => {
    const [open, setOpen] = useState(false);
    const [modifopen, setModifopen] = useState(false);
    const [row, setRow] = useState();
    console.log(row)
    const columns = [
        {
            field: "type",
            type: "text",
            headerName: "Classroom type",
            width: 150,
          },
          {
            field: "number",
            type: "number",
            headerName: "Classroom number",
            width: 150,
          },
          
          {
            field: "capacity",
            type: "number",
            headerName: "Capacity",
            width: 200,
          },
           
      ];
      
    return (
      <div className="users">
        <div className="info">
          <h1 className='titleOP'>Classrooms</h1>
          <button className="btn btn-primary"  onClick={() => setOpen(true)}>Add New Classroom</button>
        </div>
        <DataTable slug="Classrooms" columns={columns} setModifopen={setModifopen} setRow={setRow} rows={classrooms} />
        {open && <Add slug="Classroom" columns={columns} setOpen={setOpen} />}
        {modifopen && <Modify slug="Classroom" columns={columns} row={row} setModifopen={setModifopen} />}
      </div>
    );
  };

export default Class;
