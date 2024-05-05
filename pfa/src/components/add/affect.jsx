import React, { useState } from 'react';
import "./add.scss";

const Affect = (props) => {
  const [modify, setModify] = useState(false);
  
  // Function to handle changes in input fields
  

  // Function to clear input field
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    props.setAffectopen(false);
  };
  const handleModify=(e)=>{
    setModify(true)
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setAffectopen(false)}>
        <i class="fa-solid fa-x"></i>
        </span>
        <h1>Affect {props.slug}</h1> <button className="btn btn-success" style={{marginBottom:"1rem",position:"absolute",right:"5rem",top:"3.2rem"}} onClick={handleModify}><i className="fa-solid fa-pen-nib"></i></button>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field ==="class" || item.field ==="level" )
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "level" ? (
                    <select defaultValue={props.row["level"]} disabled={!modify}>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
                    
                  ) : (
                    <div className="input-container">
                    <select defaultValue={props.row["class"]} disabled={!modify}>
                  <option value="Class A">Class A</option>
                  <option value="Class B">Class B</option>
                  <option value="Class C">Class C</option>
                  <option value="Class D">Class D</option>
              </select>
                    
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
