import Supervisor from "./pages/home/Supervisor";
import Headmaster from "./pages/home/Headmaster";
import Teacher from "./pages/home/Teacher";
import "../styles/global.scss";
import Menu from "../components/menu/Menu";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Login from "./pages/login/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
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
        },
        {
          path: "/Headmasters",
          element: <Headmaster/>,
        },
        {
          path: "/Teachers",
          element: <Teacher/>,
        },
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
