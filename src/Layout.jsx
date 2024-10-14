import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const noSidebar =
    location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signup");
      return;
    }
  }, []);

  return <div className="flex">{!noSidebar && <Sidebar />}</div>;
};

export default Layout;
