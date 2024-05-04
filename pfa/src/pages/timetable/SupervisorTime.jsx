import React from 'react'
import "../../../styles/global.scss"
import Menu from '../../components/menu/SupervisorMenu'

const SupervisorTime = () => {
  return (
    <div>
      <div className="containerContent">
    
      <div className='current'>
        <div className='titleOP'> My Timetable</div>

          
            
          <div className='content'>
            <div className='timetable'>
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
      <td colSpan={2} className='table-danger'></td>
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
      <td colSpan={2} className='table-danger'></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Wednesday</th>
      <td></td>
      <td className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className='table-danger'></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Thursday</th>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className='table-danger'></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2}></td>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th scope="row">Friday</th>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className="table-success"></td>
      <td colSpan={2} className='table-danger'></td>
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
      <td colSpan={2} className='table-danger'></td>
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

export default SupervisorTime
