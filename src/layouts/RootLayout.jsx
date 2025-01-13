import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavbarMobile from "../components/NavBarMobile";


function RootLayout() {

  
  return (
    <div className="root-layout">
      <div className="root-layout-wrapper">
        <NavbarMobile />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
