import React from 'react'
import "../../../styles/global.scss"
import LoginNav from '../../components/navbar/LoginNav'
import Footer from '../../components/footer/Footer'
import ReactDOM from 'react-dom/client'
import App from '../../App.jsx'

const handleClick = () => {
 
};
const Login = () => {
  return (
    <>
    <div className='main'>
      <LoginNav></LoginNav>
      <div className='loginContainer'>
    <div className="text-center">
    
    <div className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Log in</h1>
    
        <div className="form-floating">
        <label htmlFor="floatingInput">CIN/ID</label>
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          
        </div>
        <div className="form-floating">
        <label htmlFor="floatingPassword">Password</label>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          
        </div>
    
        <button onClick={handleClick} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
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
