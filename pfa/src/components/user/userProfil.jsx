import {useState} from 'react'
import "./single.scss";


  const Single = (props) => {
    const [showPopup, setShowPopup] = useState(false);
   
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
    const [value, setValue] = useState('');
  
    const handleChange = (e) => {
      const inputValue = e.target.value;
      // Check if the input is a positive number
      if (/^\d*\.?\d*$/.test(inputValue)) {
        setValue(inputValue);
      }
    };
    return (
      <div className="single">
        <div className="view">
          <div className="info">
            <div className="topInfo">
              {props.img && <img src={props.img} alt="" />}
              <h1>{props.title}</h1>
              <button className="btn btn-success" onClick={togglePopup}>Update</button>
            </div>
            <div className="details">
               
              {Object.entries(props.info).map((item) => (
                <div className="item" key={item[0]}>
                    <span className="itemTitle">{item[0]}</span>
                    
                  <span className="itemValue">{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <form>
            <h1 className='popup-title'>Modify Profil</h1>
              <div className="form-floating">
                <label htmlFor="FirstName">First name</label>
                <input type="text" className="form-control" />             
                </div>
                <div className="form-floating">
                <label htmlFor="LastName">Last name</label>
                <input type="text" className="form-control" />             
                </div>
                <div className="form-floating">
                <label htmlFor="Email">E-mail</label>
                <input type="email" className="form-control" />             
                </div>
                <div className="form-floating">
                <label htmlFor="phone">Phone number</label>
                <input type="number" value={value} 
          onChange={handleChange} className="form-control" />             
                </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={togglePopup}>Cancel</button>
            </form>            
            </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Single;
  