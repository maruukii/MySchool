import React,{useState,useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./add.scss";
import TimePicker from 'react-time-picker';

import axios from 'axios'
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const [subjects, setSubjects] = useState([])
  const [end, setend] = useState(false)
  const [endval, setendval] = useState()

  const [job, setjob] = useState("Admin")
        const [formData, setFormData] = useState({});
        const [level, setLevel] = useState("First Level");
        const [spec, setSpec] = useState("No Specialty")
        const [cols, setcols] = useState(props.columns)
        // Function to handle changes in input fields
        
        
        const handleChange = (e, field,type) => {
          let value = e.target.value;
          if (type === "number" && Number(value) <= 0.0) {
            value = undefined;
          }
          setFormData({
            ...formData,
            [field]:value,
          });
        };
      
        // Function to clear input field
        const clearField = (field) => {
          setFormData({
            ...formData,
            [field]: '',
          });
        };
        const handlestart=(e)=>{
          setend(true)
          setendval(e.target.value)
          }
const handleLevel=(e)=>{
setLevel(e.target.value);
if(e.target.value!=="First Level"){setSpec("Technology")}
if(e.target.value==="Second Level"){setSpec("Computer Science")}

// console.log(e.target.value)
}
const handleJob=(e)=>{
e.preventDefault();
setLevel("Third level")
setjob(e.target.value)
if (e.target.value==="Teacher"){
  setcols ([...props.columns, {
    field: "Rank",
    headerName: "Rank",
    width: 100,
    type: "string",
  },{
    field: "Specialty",
    headerName: "Specialty",
    width: 100,
    type: "string",
  },{
    field: "Password",
    headerName: "Password",
    width: 100,
    type: "password",
  }]);
 
  console.log(cols)

}
else if(e.target.value==="Supervisor"){
  setcols ([...props.columns, {
    field: "Rank",
    headerName: "Rank",
    width: 100,
    type: "string",
  },{
    field: "Password",
    headerName: "Password",
    width: 100,
    type: "password",
  }]);
 
}
else if (e.target.value==="Admin"||e.target.value==="Headmaster"){
  setcols([...props.columns,{
    field: "Password",
    headerName: "Password",
    width: 100,
    type: "password",
}])}
}
const handleClass =async (e)=>{
  try {
    const alu = await axios.get("http://localhost:3001/classes/"+e.target.value);
    console.log(alu.data.result)
    const LevelSpec = { Level: alu.data.result["Level"], Specialty: alu.data.result["ClassSpec"] };
    const response = await axios.get("http://localhost:3001/subjects/get", { params: LevelSpec });
    console.log(response.data);
    setSubjects(response.data);
  } catch (error) {
    console.log(error);
  }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedArray=null
    if (props.array) {updatedArray = props.array;}
    const data=new FormData(e.target)
    
    
    cols
.filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "users"  && item.field !== "Class" && item.field !== "alumnis"&& item.field !== "ID"&& item.field !== "Users"&& item.field!=="info")
            .map((column) => (
              updatedArray[column.field] = data.get(column.field)))
   if(props.setArray) props.setArray(updatedArray); 
    // Update the state with the new array
    if(props.postData) props.postData()
      if(props.putData) props.putData()
    if(props.setTeacher) {props.setTeacher(data.get("info"))}
    console.log(updatedArray)
    //add new item
    // mutation.mutate();
    props.setOpen(false)
    if(location.pathname === '/headmasters'){
      history('timetables');
    }
    if(location.pathname === '/teachers'){
      history('register');
    }
  };

  
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
        <i className="fa-solid fa-x"></i>
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {cols.filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "users"  && item.field !== "Class" && item.field !== "alumnis"&& item.field !== "AlumnisNumber"&& item.field !== "ID"&& item.field !== "Users")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "Workspace" ? (
                    <select name={column.field} value={job==="Admin"? " Undefined " : undefined} disabled={job==="Admin"}  >
                    {props.workspace.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                        {item["Name"]}
                      </option> ))}                   
                      </select>
                  ) : column.field === "Type" ? (
                    <select name={column.field} required={true}>
                      <option value="Lab">Lab</option>
                      <option value="Normal">Normal</option>
                    </select>
                  ) : column.field === "Classroom" ? (
                    <select name={column.field} required={true}>
                      {props.classrooms.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                       {item["Type"]} - {item["Number"]} 
                      </option> ))}
                    </select>):column.field === "class" ? (
                    <select name={column.field} required={true} onChange={handleClass}>
                      {props.classes.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                       {item["Level"]} - {item["ClassSpec"]} - {item["ClassName"]}
                      </option> ))}
                    </select>): column.field === "group" ? (
                    <select name={column.field} required={true}>
                      <option value="both">Both</option>
                      <option value="groups">2 Groups</option>
                    </select>
                  )  : column.field === "Day" ? (
                    <select name={column.field} required={true}>
                      <option value="0">Monday</option>
                      <option value="1">Tuesday</option>
                      <option value="2">Wednesday</option>
                      <option value="3">Thursday</option>
                      <option value="4">Friday</option>
                      <option value="5">Saturday</option>
                    </select>): column.field === "Subject" && subjects? (
                    <select name={column.field} required={true}>
                      {subjects.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                        {item["SubjectName"]}
                      </option> ))}
                    </select>
                  )  :column.field === "Spec"||column.field === "ClassSpec" ||column.field === "Specialty"? (
                    <select  name={column.field} disabled={level==="First Level"} defaultValue={spec} value={level === "First level" ? "No Specialty": undefined} required={true}>
                  <option disabled={level === "First level" ? false : true} value="No Specialty">No specialty</option>
                  <option disabled={level === "Second level" ? true : false} value="Technology">Technology</option>
                  <option disabled={level === "Second level" ? true : false} value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select>
                  ) :   column.field === "Level" ? (
                    <select name={column.field} onChange={handleLevel} required={true}>
                  <option value="First level" >First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
                  ):column.field === "info" ? (
                    <select name={column.field} required={true}>
                  {props.teachers.map((item, index) => (
                      <option key={index} value={item._id}> 
                        {item.CIN} - {item.FirstName}, {item.LastName}
                      </option> ))}    
              </select>
                  ):column.field === "register" ? (
                    <select name={column.field} className='info2' required={true}>
                  <option value="1" >First Level, class A</option>
                  <option value="2">Second Level, Sports, class B</option>
              </select>
                  ):column.field === "subject" ? (
                    <select name={column.field} className='info2' required={true}>
                  <option value="1" >Physics</option>
                  <option value="2">Maths</option>
              </select>
                  ): column.field === "Job" ? (
                    <select name={column.field} onChange={handleJob} required={true}>
                      <option value="" >Select</option>
                  <option value="Admin" >Admin</option>
                  <option value="Headmaster">Headmaster</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Teacher">Teacher</option>
              </select>
              ): column.field==="starttime" ? (
                <select name={column.field} onChange={handlestart}  required={true}>
                  <option value="" >---</option>
                      <option value="800" >8:00</option>
                  <option value="850" >8:30</option>
                  <option value="900">9:00</option>
                  <option value="950">9:30</option>
                  <option value="1000">10:00</option>
                  <option value="1050">10:30</option>
                  <option value="1100">11:00</option>
                  <option value="1150">11:30</option>
                  <option value="1400">14:00</option>
                  <option value="1450">14:30</option>
                  <option value="1500">15:00</option>
                  <option value="1550">15:30</option>
                  <option value="1600">16:00</option>
                  <option value="1650">16:30</option>
                  <option value="1700">17:00</option>
                  <option value="1750">17:30</option>
              </select>
                
                
                  ):column.field==="endtime"? (
                    <select name={column.field} disabled={!end}required={true}>
                       <option value="" disabled={endval}>---</option>
                      <option value="850" disabled={parseInt("830", 10)<=parseInt(endval, 10)}>8:30</option>
                      <option value="900" disabled={parseInt("900", 10)<=parseInt(endval, 10)}>9:00</option>
                      <option value="950" disabled={parseInt("930", 10)<=parseInt(endval, 10)}>9:30</option>
                      <option value="1000" disabled={parseInt("1000", 10)<=parseInt(endval, 10)}>10:00</option>
                      <option value="1050" disabled={parseInt("1030", 10)<=parseInt(endval, 10)}>10:30</option>
                      <option value="1100" disabled={parseInt("1100", 10)<=parseInt(endval, 10)}>11:00</option>
                      <option value="1150" disabled={parseInt("1130", 10)<=parseInt(endval, 10)}>11:30</option>
                      <option value="1200" disabled={parseInt("1200", 10)<=parseInt(endval, 10)}>12:00</option>
                      <option value="1450" disabled={parseInt("1450", 10)<=parseInt(endval, 10)}>14:30</option>
                      <option value="1500" disabled={parseInt("1500", 10)<=parseInt(endval, 10)}>15:00</option>
                      <option value="1550" disabled={parseInt("1550", 10)<=parseInt(endval, 10)}>15:30</option>
                      <option value="1600" disabled={parseInt("1600", 10)<=parseInt(endval, 10)}>16:00</option>
                      <option value="1650" disabled={parseInt("1650", 10)<=parseInt(endval, 10)}>16:30</option>
                      <option value="1700" disabled={parseInt("1700", 10)<=parseInt(endval, 10)}>17:00</option>
                      <option value="1750" disabled={parseInt("1750", 10)<=parseInt(endval, 10)}>17:30</option>
                      <option value="1800" disabled={parseInt("1800", 10)<=parseInt(endval, 10)}>18:00</option>
                  </select>): column.field==="CIN"||column.field==="PhoneNumber" ? (
                <div className="input-container">
                <input
                required={true}
                name={column.field}
                  type="number"
                  placeholder={column.headerName}
                  value={formData[column.field] || ""}
                  min={0}
                  pattern={ "^[0-9]*(\.[0-9]*[1-9])?[0-9]*$"}
                  onChange={(e) => handleChange(e, column.field,"number")}
                />
                {formData[column.field] && (
                      <span className="clear-button" onClick={() => clearField(column.field)}>
                        <i className="fa-solid fa-x"></i>
                      </span>
                    )}
                  </div>
              ): (
                    <div className="input-container">
                    <input
                    required={column.field==="CoefDC"||column.field==="CoefTP"||column.field==="CoefDS"?false:true}
                    name={column.field}
                      type={column.type}
                      placeholder={column.headerName}
                      value={formData[column.field] || ""}
                      step={column.type === "time" ? 1800 : undefined}
                      min={column.type === "number" ? -Infinity : undefined}
                      pattern={column.type === "number" ? "^[0-9]*(\.[0-9]*[1-9])?[0-9]*$": undefined}
                      onChange={(e) => handleChange(e, column.field,column.type)}
                    />
                    {formData[column.field] && (
                      <span className="clear-button" onClick={() => clearField(column.field)}>
                        <i className="fa-solid fa-x"></i>
                      </span>
                    )}
                  </div>
                  )}
                  
                </div>
              ))}
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
