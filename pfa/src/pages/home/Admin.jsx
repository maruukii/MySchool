import React from 'react'
import Menu from '../../components/menu/AdminMenu'
import "../../../styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Navbar from '../../components/navbar/Navbar'
const queryClient = new QueryClient();
const Admin = (props) => {
  
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
 
  return (
    <><Navbar setisLoggedin={props.setisLoggedin}/*setDropdownOpen={setDropdownOpen}*//>
    <div className="containerContent">
    <div className="menuContainer">
      <Menu /> 
      </div>
            <div className="contentContainer">
            
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
           
          </div>
       
          </div></>
  )
}

export default Admin
