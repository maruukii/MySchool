import React,{useState} from 'react'
import Menu from '../../components/menu/TeacherMenu'
import "../../../styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Navbar from '../../components/navbar/Navbar'
import Add from "../../components/add/add"
const queryClient = new QueryClient();
const Teacher = (props) => {
  props.setisLoggedin(true)
  const [open, setOpen] = useState(false);
  const columns=[
    {
      field: "register",
      type: "text",
      headerName: "Class",
    }, {
      field: "subject",
      type: "text",
      headerName: "Subject",
    },]
  return (
    <><Navbar setisLoggedin={props.setisLoggedin}/*setDropdownOpen={setDropdownOpen}*//>
    <div className="containerContent">
    <div className="menuContainer">
      <Menu setOpen={setOpen} /> 
      </div>
            <div className="contentContainer">
            {open && <Add slug="Class Register" columns={columns} setOpen={setOpen} />}
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
       
          </div></>
  )
}

export default Teacher
