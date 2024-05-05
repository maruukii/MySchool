import React,{useState} from 'react'
import Menu from '../../components/menu/HeadmasterMenu'
import "../../../styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Add from "../../components/add/add";

const queryClient = new QueryClient();
const Headmaster = () => {
  const [open, setOpen] = useState(false);
  const columns=[
    {
      field: "info",
      type: "text",
      headerName: "Teacher Info",
    },
    
  ]
  return (
    <div className="containerContent">
    <div className="menuContainer">
      <Menu  setOpen={setOpen} /> 
      </div>
            <div className="contentContainer">
            {open && <Add slug="Class" columns={columns} setOpen={setOpen} />}
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
           
          </div>
       
          </div>
  )
}

export default Headmaster
