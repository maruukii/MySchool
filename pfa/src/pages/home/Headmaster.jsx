import React,{useState,useEffect,useContext} from 'react'
import Menu from '../../components/menu/HeadmasterMenu'
import "../../../styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Add from "../../components/add/add";
import Navbar from '../../components/navbar/Navbar'
import AuthContext from '../../store/auth-store.jsx';
import axios from 'axios'
const queryClient = new QueryClient();
const Headmaster = (props) => {
  const { teacher, setTeacherData } = useContext(AuthContext); 
  const { user } = useContext(AuthContext);
console.log(user)
  props.setisLoggedin(true)
  console.log(teacher)
  const [open, setOpen] = useState(false);
  // const [teach, setTeacher] = useState();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/personnels/get/"+user.Workspace);
        setTeachers(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching workspace:', error);
      }
    };

    fetchData();
  }, []); 
  const columns=[
    {
      field: "info",
      type: "text",
      headerName: "Teacher Info",
    },
    
  ]
  return (
    <><Navbar setisLoggedin={props.setisLoggedin}/*setDropdownOpen={setDropdownOpen}*//>
    <div className="containerContent">
    <div className="menuContainer">
      <Menu  setOpen={setOpen} /> 
      
      </div>
            <div className="contentContainer">
            {open && <Add slug="Timetable" columns={columns} setOpen={setOpen} teachers={teachers} setTeacher={setTeacherData}/>}
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
           
          </div>
       
          </div></>
  )
}

export default Headmaster
