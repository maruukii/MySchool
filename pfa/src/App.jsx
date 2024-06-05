import Supervisor from "./pages/home/Supervisor";
import Headmaster from "./pages/home/Headmaster";
import Teacher from "./pages/home/Teacher";
import "../styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import TeacherTime from "./pages/timetable/TeacherTime";
import Login from "./pages/login/Login";
import ManageAlumni from "./pages/alumni/manageAlumni";
import Classroom from "./pages/Classroom/classroom";
import Classes from "./pages/class/class"
import Admin from "./pages/home/Admin"
import Profil from "./pages/profil/profil";
import Users from "./pages/users/users"
import Workspace from "./pages/workspace/workspace";
import Subject from "./pages/subject/subject";
import Timetables from "./pages/timetable/manageTimetable"
import AdminHome from "./components/Home/admin"
import OtherHome from "./components/Home/others"
import Register from "./pages/registre/registre"
import { useState } from "react";
import axios from "axios";
const queryClient = new QueryClient();

function App() {
  const [isLoggedin, setisLoggedin] = useState(false)
//  

  const Layout = () => {
    return (
      <div>
      <div className="main">
        
        {!isLoggedin&&<Login setisLoggedin={setisLoggedin}/>}
        <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
      </div>
      <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/Supervisors",
          element: <Supervisor setisLoggedin={setisLoggedin} />,
          children:[
            {
              path:"alumnis",
              element:<ManageAlumni/>
            },{
              path:"",
              element:<OtherHome/>
            }
          ]
        },
        
        {
          path: "/Headmasters",
          element: <Headmaster setisLoggedin={setisLoggedin}/>,
          children:[
            {
              path: "Classes",
              element: <Classes />,
            },
            {
              path: "Classrooms",
              element: <Classroom />,
            },
            {
              path: "Timetables",
              element: <Timetables />,
            },{
              path:"",
              element:<OtherHome/>
            }
          ]
        },
        
        {
          path: "/Teachers",
          element: <Teacher setisLoggedin={setisLoggedin}/>,
          children:[
            {
              path: "Register",
              element: <Register />,
            },
            {
              path: "Timetable",
              element: <TeacherTime />,
            },{
              path:"",
              element:<OtherHome/>
            }
          ]
        },
        {
          path: "/Admin",
          element: <Admin  setisLoggedin={setisLoggedin}/>,
          children:[
            {
              path: "",
              element: <AdminHome />,

          },
            {
              path: "profil/:id",
              element: <Profil />,

          },
            {
                path: "Workspaces",
                element: <Workspace/>,

            },
            {
              path: "Subjects",
              element: <Subject/>,

          },
            {
              path: "Users",
              element: <Users />,
          },
          ]
        },
      ],
      
    },{
    path: "/login",
      element: <Login />}
  ]);
  return <RouterProvider router={router} />;
}

export default App
