import React from 'react'
import "../../../styles/global.scss"
import Menu from '../../../components/menu/SupervisorMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Supervisor = () => {
  return (
    <div className="containerContent">
    <div className="menuContainer">
      <Menu /> 
     
          
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div></div>
  )
}

export default Supervisor
