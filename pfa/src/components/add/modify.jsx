import React, { useState } from 'react';
import "./add.scss";

const Modify = (props) => {
  const [formData, setFormData] = useState({});
  const [modify, setModify] = useState(false);
  const [level, setLevel] = useState('First Level');
  // Function to handle changes in input fields
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
        <i class="fa-solid fa-x"></i>
        </span>
        <h1>Modify {props.slug}</h1> <button className="btn btn-success" style={{marginBottom:"1rem",position:"absolute",right:"5rem",top:"3.2rem"}} onClick={handleModify}><i className="fa-solid fa-pen-nib"></i></button>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "class" && item.field !== "class"  && item.field !== "id")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "workspace" ? (
                    <select defaultValue={props.row["workspace"]} disabled={!modify}>
                      <option value="">No Workspace</option>
                      <option value="Lycée Ksour Essef">Lycée Ksour Essef</option>
                    </select>
                  ) : column.field === "level" ? (
                    <select defaultValue={props.row["level"]} onChange={handleLevel} disabled={!modify}>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
                    
                  ):column.field === "type" ? (
                    <select defaultValue={props.row["type"]} disabled={!modify}>
                      <option value="Lab">Lab</option>
                      <option value="Normal">Normal</option>
                    </select>
                  ) : column.field === "spec" ? (
                    <select disabled={level==="First Level"} value={level === "First level" ? "nospec" : undefined}>
                  <option value="nospec">No specialty</option>
                  <option value="Technology">Technology</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select>
                  ) : (
                    <div className="input-container">
                    <input
                      type={column.type}
                      placeholder={props.row[column.field]}
                      value={formData[column.field] ||''}
                      onChange={(e) => handleChange(e, column.field,column.type)}
                      min={column.type === "number" ? 0 : undefined}
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
