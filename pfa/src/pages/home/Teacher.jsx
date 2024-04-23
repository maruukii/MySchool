import React from 'react'
import Menu from '../../../components/menu/TeacherMenu'
import "../../../styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const Teacher = () => {
  return (
    <div className="containerContent">
    <div className="menuContainer">
      <Menu /> 
      </div>
            <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
       
          </div>
  )
}

export default Teacher
