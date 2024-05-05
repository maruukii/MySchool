import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = (props) => {
  const history = useNavigate();
  const location = useLocation();
        const [formData, setFormData] = useState({});
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
  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });
const handleLevel=(e)=>{
setLevel(e.target.value);
console.log(e.target.value)
}
  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
    if(location.pathname === '/headmasters'){
      history('timetables');
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
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "createdAt" && item.field !== "verified" && item.field !== "users"  && item.field !== "class" && item.field !== "alumnis")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "workspace" ? (
                    <select>
                      <option value="">Select</option>
                      <option value="option1">Lycée Ksour Essef</option>
                    </select>
                  ) : column.field === "type" ? (
                    <select>
                      <option value="Lab">Lab</option>
                      <option value="Normal">Normal</option>
                    </select>
                  ) :  column.field === "group" ? (
                    <select>
                      <option value="both">Both</option>
                      <option value="groups">2 Groups</option>
                    </select>
                  )  :  column.field === "subject" ? (
                    <select>
                      <option value="math">Maths</option>
                      <option value="physics">Physics</option>
                    </select>
                  )  :column.field === "spec" ? (
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
                  ) :   column.field === "level" ? (
                    <select  onChange={handleLevel}>
                  <option value="First level" >First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
                  ):column.field === "info" ? (
                    <select className='info'>
                  <option value="1" >Mohamed, MAGHERBI, 14606600</option>
                  <option value="2">Foulen, Ben Foulen, 1460660l</option>
              </select>
                  ):(
                    <div className="input-container">
                    <input
                      type={column.type}
                      placeholder={column.field}
                      value={formData[column.field] || ""}
                      step={column.type === "time" ? 1800 : undefined}
                      min={column.type === "number" ? 0 : undefined}
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
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
