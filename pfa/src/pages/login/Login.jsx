import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import "../../../styles/global.scss"
import LoginNav from '../../components/navbar/LoginNav.jsx'
import Footer from '../../components/footer/Footer'
import AuthContext  from '../../store/auth-store.jsx'
import axios from 'axios'
const cinIDReducer = (prevState, action) => {
  if (action.type === "cin/id changed") {
    return { value: action.value, isValid: !isNaN(action.value) };
  }
  if (action.type === "validate_cin/id") {
    return { value: prevState.value, isValid: !isNaN(prevState.value) };
  }
  return { value: "", isValid: null };
};
const passwordReducer = (prevState, action) => {
  if (action.type === "password changed") {
    return { value: action.value, isValid: action.value.trim().length > 8 };
  }
  if (action.type === "validate_password") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 8,
    };
  }
  return { value: "", isValid: null };
};
const Login = ({setisLoggedin}) => {
  const navigate=useNavigate()
  const { loginUser } = useContext(AuthContext); // Use the context
  const [cinIDState, dispatchcinID] = useReducer(cinIDReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: cinIDIsValid } = cinIDState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(cinIDIsValid && passwordIsValid);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [cinIDIsValid, passwordIsValid]);
  const cinIDChangeHandler = (event) => {
    dispatchcinID({ type: "cin/id changed", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password changed", value: event.target.value });
  };

  const validateCINIDHandler = () => {
    dispatchcinID({ type: "validate_cin/id" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "validate_password" });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const arr = {
      ID: cinIDState.value,
      Password: passwordState.value
    };
    
    const response = await axios.post("http://localhost:3001/personnels/login",arr);
    console.log(response)
    
    if(response){
      loginUser(response.data); // Store the user data in context
      setisLoggedin(true)
      if(response.data.Job==="Teacher"){
        navigate("Teachers")
      }
      if(response.data.Job==="Admin"){
        navigate("admin")
      }
      if(response.data.Job==="Headmaster"){
        navigate("headmasters")
      }
      if(response.data.Job==="Supervisor"){
        navigate("supervisors")
      }
    }
  };
  return (
    <>
    <div className='main'>
      <LoginNav/>
      <div className='loginContainer'>
    <div className="text-center">
    
    <div className="form-signin">
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Log in</h1>
    
        <div className="form-floating">
        <label htmlFor="floatingInput">CIN/ID</label>
          <input type="text"  className="form-control" id="floatingInput" value={cinIDState.value}
            onChange={cinIDChangeHandler}
            onBlur={validateCINIDHandler}/>
          
        </div>
        <div className="form-floating">
        <label htmlFor="floatingPassword">Password</label>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}/>
          
        </div>
    
        <button className="w-100 btn btn-lg btn-primary" type="submit" >Log in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2023–2024</p>
      </form>
    </div>      
      </div>
      </div>
      </div>
      <Footer></Footer>
      </>
  )
}

export default Login
