import Supervisor from "./pages/home/Supervisor";
import Headmaster from "./pages/home/Headmaster";
import Teacher from "./pages/home/Teacher";
import "../styles/global.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SupervisorTime from "./pages/timetable/SupervisorTime";
import HeadmasterTime from "./pages/timetable/HeadmasterTime";
import TeacherTime from "./pages/timetable/TeacherTime";
import Login from "./pages/login/Login";
import ManageAlumni from "./pages/alumni/manageAlumni";
import Classroom from "./pages/Classroom/classroom";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div>
      <div className="main">
        
        <Navbar />
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
          element: <Supervisor />,
          children:[
            {
                path: "Timetable",
                element: <SupervisorTime />,

            },{
              path:"alumnis",
              element:<ManageAlumni/>
            }
          ]
        },
        
        {
          path: "/Headmasters",
          element: <Headmaster/>,
          children:[
            {
              path: "Classrooms",
              element: <Classroom />,
            },
            {
              path: "Timetable",
              element: <HeadmasterTime />,
            },
          ]
        },
        
        {
          path: "/Teachers",
          element: <Teacher/>,
          children:[
            {
              path: "Timetable",
              element: <TeacherTime />,
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
