import "./navbar.scss";
import { useNavigate } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import AuthContext from '../../store/auth-store.jsx';
const Navbar = (props) => {
  const location=useNavigate()
  const { user } = useContext(AuthContext);
  var users=user.FirstName
  if (users===null){
    users="/"
  }
  const handleSignOut = () => {
    props.setisLoggedin(false)
    location("/")
  };

  return (
    
    <div className="navbar">
      <div className="logo">
        <img src="/school-svgrepo-com.svg" alt="" />
        <span className="apptitle">MySchool</span>
      </div>
      {location.pathname!=='/' ?(<div className="icons">
        <div className="notification">
          <img src="/notifications-svgrepo-com.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="/public/noavatar.png"
            alt=""
          />
          
          <span>{users}</span>
        </div>
        <img src="/log-out-svgrepo-com.svg" alt="" className="icon" onClick={handleSignOut}/>
      </div>):null}
    </div>
  );
};


export default Navbar;
