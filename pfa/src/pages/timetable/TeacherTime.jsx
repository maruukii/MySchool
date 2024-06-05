import React from 'react'
import { useState,useEffect,useContext } from 'react'
import Add from "../../components/add/add"
import axios from 'axios'
import AuthContext from '../../store/auth-store.jsx';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

let currentColSpan = 1; // Initialize the variable outside the component function

const manageTimetable = () => {
  const [timetable,settimetable]=useState({})
    const [open,setOpen]=useState(false)
    const [classrooms, setClassrooms] = useState([])
    const { user} = useContext(AuthContext); 
    const [first, setfirst] = useState([])
    const [classes, setClasses] = useState([])
    const [array, setArray] = useState({})
// console.log(timetable)
    // console.log(111111111)
    // console.log(teacher)
    // console.log(first)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/personnels/"+user._id);
          // console.log(response.data.result)
          setfirst(response.data.result)
          const arr={teacher:response.data.result._id}
          // console.log(arr)
          const re = await axios.get("http://localhost:3001/timetables/get/"+response.data.result._id);
          // console.log(re.data)
          // console.log("gg1")
          if (re.data.length===0){
            // console.log("gg")
            
            const res = await axios.post("http://localhost:3001/timetables/new",arr);
            // console.log(res.data)
            settimetable(res.data)
          }
          else{settimetable(re.data[0])}
        } catch (error) {
          console.error('Error fetching workspace:', error);
        }
        
        
        
      };
  
      fetchData();
    }, [array]); 
    const columns = [
          {
            field: "class",
            type: "text",
            headerName: "Class",
          },
          {
            field: "Subject",
            type: "text",
            headerName: "Subject",
          },
          {
            field: "group",
            type: "text",
            headerName: "Group",
          },
          {
            field: "Day",
            type: "text",
            headerName: "Day",
          },
          {
            field: "Classroom",
            type: "text",
            headerName: "Classroom",
          },
          {
            field: "starttime",
            type: "time",
            headerName: "Start Time",
          },
          
          {
            field: "endtime",
            type: "time",
            headerName: "End Time",
          },
          
           
      ];
      
      
  return (
    <div>
        
      <div className="containerContent">
      <div className="users">
        </div>
      <div className='current'>
        <div><div className='titleOP'>My Timetable</div>
        <div>
      <SnackbarProvider />
      
    </div>
        </div>
        
          
            
          <div className='content'>
            <div className='timetable'>
                <h1 className="table table-light" style={{fontSize:"1.2rem",color:"white"}}>Timetable for {first.CIN} - {first.FirstName}, {first.FirstName}</h1>
            <table className="table table-light  table-bordered">
            <thead>
    <tr>
      <th scope="col">Day/Time</th>
      <th scope="col"colSpan={2} style={{textAlign:'center'}}>8:00-9:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>9:00-10:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>10:00-11:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>11:00-12:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>12:00-14:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>14:00-15:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>15:00-16:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>16:00-17:00</th>
      <th scope="col"colSpan={2}style={{textAlign:'center'}}>17:00-18:00</th>
    </tr>
  </thead>
  <tbody >
  {timetable && timetable.Timetable && timetable.Timetable[0] && (
  <tr>
    <th scope="row">Monday</th>
    {timetable.Timetable[0].map((slot,index) => {
      let colspan=currentColSpan
      
      if (slot) {
        if(timetable.Timetable[0][index] !== timetable.Timetable[0][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} ;
      
      if (index === 8) {
        return (
        
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey',}}
          >
            
          </td>
        );
      } else {
        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
  </tr>
)}
    {timetable && timetable.Timetable && timetable.Timetable[1] && (
                                        <tr>
                                            <th scope="row">Tuesday</th>
      {timetable.Timetable[1].map((slot,index) => {
      let colspan=currentColSpan
      
      if (slot) {
        if(timetable.Timetable[1][index] !== timetable.Timetable[1][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} ;
      
      if (index === 8) {
        currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey'}}
          >
            
          </td>
        );
      } else {
        currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
                                        </tr>
                                    )}
    {timetable && timetable.Timetable && timetable.Timetable[2] && (
                                        <tr>
     <th scope="row">Wednesday</th>
    {timetable.Timetable[2].map((slot,index) => {
      let colspan=currentColSpan
      if (index === 8) {
        currentColSpan=1
        return (
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey'}}
          >
          </td>
        );
      }
      else if (slot) {
        if(timetable.Timetable[2][index] !== timetable.Timetable[2][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} 
      
       else {
        currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
                                        </tr>
                                    )}
   {timetable && timetable.Timetable && timetable.Timetable[3] && (
                                        <tr>
                                            <th scope="row">Thursday</th>
                                            {timetable.Timetable[3].map((slot,index) => {
      let colspan=currentColSpan
      
      if (slot) {
        if(timetable.Timetable[3][index] !== timetable.Timetable[3][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} ;
      
      if (index === 8) {
        currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey'}}
          >
            
          </td>
        );
      } else {
        currentColSpan=1

        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
                                        </tr>
                                    )}
    {timetable && timetable.Timetable && timetable.Timetable[4] && (
                                        <tr>
                                            <th scope="row">Friday</th>
                                            {timetable.Timetable[4].map((slot,index) => {
      let colspan=currentColSpan
      
      if (slot) {
        if(timetable.Timetable[4][index] !== timetable.Timetable[4][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} ;
      
      if (index === 8) {
        currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey'}}
          >
            
          </td>
        );
      } else {currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
                                        </tr>
                                    )}
    {timetable && timetable.Timetable && timetable.Timetable[5] && (
                                        <tr>
                                            <th scope="row">Saturday</th>
                                            {timetable.Timetable[5].map((slot,index) => {
      let colspan=currentColSpan
      
      if (slot) {
        if(timetable.Timetable[5][index] !== timetable.Timetable[5][index + 1]){
          currentColSpan=1
          return (
        
            <td
              key={index}
              colSpan={colspan}
              style={{
                backgroundColor: 'green' ,
                textAlign: 'center',
                width:'150px',maxHeight:"100px",fontSize:"1.3rem",verticalAlign: 'middle'
              }}
            >
              {slot}
            </td>
          );
        }
        currentColSpan++;
        
        return null} ;
      
      if (index === 8) {currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={2}
            style={{backgroundColor:'grey'}}
          >
            
          </td>
        );
      } else {currentColSpan=1
        return (
        
          <td
            key={index}
            colSpan={1}
            style={{width:'150px',height:"100px"}}
          >
          </td>
        );
      }
     
    })}
                                        </tr>
                                    )}
  </tbody>
</table>
            </div>
          </div>
           
          </div>
          </div>
          </div>
  )
}
const getColSpan = (arr, index) => {
  let count = 1;
  for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] === arr[index]) {
          count++;
      } else {
          break;
      }
  }
  return count;
};
export default manageTimetable
