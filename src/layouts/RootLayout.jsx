import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavMobile from "../components/NavMobile.jsx";


function RootLayout() {
  return (
    <div className="root-layout">
      <div className="root-layout-wrapper">
        <NavMobile />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
