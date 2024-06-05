import React, { useState,useEffect } from 'react';
import "./add.scss";
const Affect = (props) => {
  props.setold(props.row["Class"])
  const [modify, setModify] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(props.row)
  const clearField = (field) => {
    setFormData({
      ...formData,
      [field]: '',
    });
  };
  const handleChange = (e, field,type) => {
    let value = e.target.value;
    if (type === "number" && Number(value) <= 0) {
      value = undefined;
    }
    setFormData({
      ...formData,
      [field]:value,
    });
  };
  // Function to handle changes in input fields
  
  // Function to clear input field
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedArray = props.array; // Create a copy of the array
    const data=new FormData(e.target)
    props.columns
            .filter((item) => item.field ==="Class"  )
            .map((column) => (
              updatedArray[column.field] = data.get(column.field)))
              console.log(updatedArray)
    props.setArray(updatedArray); 
    // Update the state with the new array
    props.putData()    
    props.setAffectopen(false);
  };

  
  const handleModify=(e)=>{
    setModify(true)  
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setAffectopen(false)}>
        <i className="fa-solid fa-x"></i>
        </span>
        <h1>Affect {props.slug}</h1> <button className="btn btn-success" style={{marginBottom:"1rem",position:"absolute",right:"5rem",top:"3.2rem"}} onClick={handleModify}><i className="fa-solid fa-pen-nib"></i></button>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field ==="Class" || item.field ==="Level" || item.field ==="Spec")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "Level" ? (
                  <div className="input-container">
                    <input type="text" placeholder={props.row["Level"]} disabled={true}/>
                    </div>
                  ): column.field === "Spec" ? (
                    <div className="input-container">
                    <input type="text" placeholder={props.row["Spec"]} disabled={true}/>
                    </div>
                  ): column.field === "Class" ?(
                    <select name={column.field} defaultValue={props.row["Class"]} disabled={!modify} required={true}>
                    {props.classes.map((item, index) => (
                      <option key={index} value={item["_id"]}> 
                        {item["ClassName"]}
                      </option> ))}                   
                      </select>
                  ):(
                    <div className="input-container">
                    <input
                    name={column.field}
                      type={column.type}
                      placeholder={props.row[column.field]}
                      value={formData[column.field] || ""}
                      disabled={!modify}
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
          <button>Affect</button>
        </form>
      </div>
    </div>
  );
            };

export default Affect;
