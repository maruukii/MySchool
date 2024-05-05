import React,{useState} from 'react';
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = (props) => {
        const [formData, setFormData] = useState({});
      
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

  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
        <i class="fa-solid fa-x"></i>
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "img" && item.field !== "createdAt" && item.field !== "verified")
            .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                {column.field === "workspace" ? (
                    <select>
                      <option value="">Select</option>
                      <option value="option1">Lycée Ksour Essef</option>
                    </select>
                  ) : (
                    <div className="input-container">
                    <input
                      type={column.type}
                      placeholder={column.field}
                      value={formData[column.field] || ""}
                      onChange={(e) => handleChange(e, column.field)}
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
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
