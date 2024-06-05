import React from 'react';
import "./add.scss";

const Delete = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.deleteData();
    props.setDelopen(false);
  };
  
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setDelopen(false)}>
        <i className="fa-solid fa-x"></i>
        </span>
        <h1>Delete {props.slug}</h1> 
        <form onSubmit={handleSubmit}>
        <p>Are you sure you want to delete this user ?</p>
          {props.columns
            .filter((item) => item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "class" && item.field !== "class"  && item.field !== "id")
            .map((column) => (
                <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                <div key={column.field} className="input-container">
      <input
        key={column.field}
        type={column.type}
        placeholder={props.row[column.field]}
        disabled={true}
      />
    </div></div>
))}
          <button style={{backgroundColor:"red",color:"white"}}>Delete</button>
        </form>
      </div>
    </div>
  );
            };

export default Delete;
