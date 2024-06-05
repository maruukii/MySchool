import React, { useState,useEffect } from 'react';
import "./add.scss";

const Modify = (props) => {
  // props.setold(props.row["Workspace"])
  const [formData, setFormData] = useState({});
  const [modify, setModify] = useState(false);
  const [level, setLevel] = useState(props.row["Level"]);
  const [cols, setcols] = useState(props.columns)
  const [job, setjob] = useState(props.row["Job"])
      
 
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
  const handleLevel=(e)=>{
    setLevel(e.target.value);
    console.log(e.target.value)
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
        }]);
       
        console.log(cols)
      
      }
      else if(e.target.value==="Supervisor"){
        setcols ([...props.columns, {
          field: "Rank",
          headerName: "Rank",
          width: 100,
          type: "string",
        }]);
        
      }
      else {setcols(props.columns)}
      }
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedArray = props.array; // Create a copy of the array
    const data=new FormData(e.target)
    cols.filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "users"  && item.field !== "Class" && item.field !== "alumnis"&& item.field !== "AlumnisNumber"&& item.field !== "Password"&& item.field !== "ID"&& item.field !== "Users")
            .map((column) => (
              updatedArray[column.field] = data.get(column.field)))
    props.setArray(updatedArray); 
    // Update the state with the new array
    props.putData()
    console.log(updatedArray)
    props.setModifopen(false);
  };
  const handleModify=(e)=>{
    setModify(true)
    setFormData(props.row)
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setModifopen(false)}>
        <i className="fa-solid fa-x"></i>
        </span>
        <h1>Modify {props.slug}</h1> <button className="btn btn-success" style={{marginBottom:"1rem",position:"absolute",right:"5rem",top:"3.2rem"}} onClick={handleModify}><i className="fa-solid fa-pen-nib"></i></button>
        <form onSubmit={handleSubmit}>
          {cols.filter((item) => item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "Class"   && item.field !== "id" && item.field !== "AlumnisNumber"&& item.field !== "Password"&& item.field !== "ID"&& item.field !== "Users")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "Workspace" ? (
                      <select name={column.field} defaultValue={props.row["Workspace"]} value={job==="Admin"? " Undefined " : undefined} disabled={job==="Admin"||!modify}  >
                    {props.workspace.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                        {item["Name"]}
                      </option> ))}                   
                      </select>
                  ) : column.field === "Level" ? (
                    <select name={column.field} defaultValue={props.row["Level"]} onChange={handleLevel} disabled={!modify} required={true}>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
                    
                  ):column.field === "Type" ? (
                    <select name={column.field} defaultValue={props.row["type"]} disabled={!modify} required={true}>
                      <option value="Lab">Lab</option>
                      <option value="Normal">Normal</option>
                    </select>
                  ) : column.field === "Spec"||column.field === "ClassSpec"||column.field === "Specialty" ? (
                    <select name={column.field} disabled={level==="First Level"||!modify} defaultValue={props.row["Spec"]||props.row["ClassSpec"]||props.row["Specialty"]} value={level === "First level" ? "No Specialty" : undefined} required={true}>
                  <option disabled={level === "First level" ? false : true} value="No Specialty">No specialty</option>
                  <option disabled={level === "Second level" ? true : false} value="Technology">Technology</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select>
                  ) : column.field === "Job" ? (
                    <select name={column.field} onChange={handleJob} defaultValue={props.row["Job"]} required={true} disabled={!modify}>
                  <option value="Admin" >Admin</option>
                  <option value="Headmaster">Headmaster</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Teacher">Teacher</option>
              </select>):column.field==="CIN"||column.field==="PhoneNumber" ? (
                <div className="input-container">
                <input
                required={true}
                name={column.field}
                  type="number"
                  placeholder={props.row[column.field]}
                  value={formData[column.field] || ""}
                  min={0}
                  pattern={ "^[0-9]*(\.[0-9]*[1-9])?[0-9]*$"}
                  onChange={(e) => handleChange(e, column.field,column.type)}
                />
                {formData[column.field] && (
                      <span className="clear-button" onClick={() => clearField(column.field)}>
                        <i className="fa-solid fa-x"></i>
                      </span>
                    )}
                  </div>
              ):(
                    <div className="input-container">
                    <input
                    required={column.field==="CoefDC"||column.field==="CoefTP"||column.field==="CoefDS"?false:true}
                    name={column.field}
                      type={column.type}
                      placeholder={props.row[column.field]}
                      value={formData[column.field] ||''}
                      onChange={(e) => handleChange(e, column.field,column.type)}
                      min={column.type === "number" ? -Infinity : undefined}
                      pattern={column.type === "number" ? "^[0-9]*(\.[0-9]*[1-9])?[0-9]*$": undefined}
                      disabled={!modify || !(column.field!=="users") || !(column.field!=="alumnis")}
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
          <button>Modify</button>
        </form>
      </div>
    </div>
  );
            };

export default Modify;
