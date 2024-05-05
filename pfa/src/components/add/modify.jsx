import React, { useState } from 'react';
import "./add.scss";

const Modify = (props) => {
  const [formData, setFormData] = useState({});
  const [modify, setModify] = useState(false);
  
  // Function to handle changes in input fields
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  // Function to clear input field
  const clearField = (field) => {
    setFormData({
      ...formData,
      [field]: '',
    });
    props.setRowData({
        ...props.row,
        [field]: '',
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    props.setModifopen(false);
  };
  const handleModify=(e)=>{
    setModify(true)
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setModifopen(false)}>
        <i class="fa-solid fa-x"></i>
        </span>
        <h1>Modify {props.slug}</h1> <button className="btn btn-success" style={{marginBottom:"1rem",position:"absolute",right:"5rem",top:"3.2rem"}} onClick={handleModify}><i class="fa-solid fa-pen-nib"></i></button>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "img" && item.field !== "createdAt" && item.field !== "verified")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "workspace" ? (
                    <select defaultValue={props.row["workspace"]} disabled={!modify}>
                      <option value="">No Workspace</option>
                      <option value="Lycée Ksour Essef">Lycée Ksour Essef</option>
                    </select>
                  ) : (
                    <div className="input-container">
                    <input
                      type={column.type}
                      placeholder={column.field}
                      value={formData[column.field] || props.row[column.field]}
                      onChange={(e) => handleChange(e, column.field)}
                      disabled={!modify}
                    />
                    {formData[column.field] && (
                      <span className="clear-button" onClick={() => clearField(column.field)}>
                        <i class="fa-solid fa-x"></i>
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
