import React from 'react'
import { useState } from 'react'
import Add from "../../components/add/add"
const manageTimetable = () => {
    const [open,setOpen]=useState(false)
    const columns = [
        {
            field: "cin",
            type: "text",
            headerName: "CIN",
          },
          {
            field: "full",
            type: "text",
            headerName: "Full name",
          },
          
          {
            field: "subject",
            type: "text",
            headerName: "Subject",
          },
          {
            field: "level",
            type: "text",
            headerName: "Level",
          },
          {
            field: "class",
            type: "text",
            headerName: "Class",
          },
          {
            field: "group",
            type: "text",
            headerName: "Group",
          },
          {
            field: "start",
            type: "time",
            headerName: "Start time",
          },
          {
            field: "end",
            type: "time",
            headerName: "End Time",
          },
           
      ];
  return (
    <div>
        
      <div className="containerContent">
      <div className="users">
        {open && <Add slug="Timetable" columns={columns} setOpen={setOpen} />}
        </div>
      <div className='current'>
        <div><div className='titleOP'> My Timetable</div>
        <button className='btn btn-success' style={{margin:"1rem"}} onClick={() => setOpen(true)}>Modify Timetable</button></div>
        
          
            
          <div className='content'>
            <div className='timetable'>
                <h1 className="table table-light" style={{fontSize:"1.2rem",color:"white"}}>Timetable for Mohamed, MAGHERBI, 14606600</h1>
            <table className="table table-light  table-bordered">
            <thead>
    <tr>
      <th scope="col">Day/Time</th>
      <th scope="col"colSpan={2}>8:00-9:00</th>
      <th scope="col"colSpan={2}>9:00-10:00</th>
      <th scope="col"colSpan={2}>10:00-11:00</th>
      <th scope="col"colSpan={2}>11:00-12:00</th>
      <th scope="col"colSpan={2}>12:00-14:00</th>
      <th scope="col"colSpan={2}>14:00-15:00</th>
      <th scope="col"colSpan={2}>15:00-16:00</th>
      <th scope="col"colSpan={2}>16:00-17:00</th>
      <th scope="col"colSpan={2}>17:00-18:00</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">Monday</th>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Tuesday</th>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Wednesday</th>
      <td></td>
      <td ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Thursday</th>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2}></td>
      <td colSpan={2} ></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Friday</th>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2} ></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Saturday</th>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
           
          </div>
          </div>
          </div>
  )
}

export default manageTimetable
