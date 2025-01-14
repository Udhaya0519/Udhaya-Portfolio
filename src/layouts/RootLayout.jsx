import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavMobile from "../components/NavMobile.jsx";


function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname;

  return (
    <div className="root-layout">
      <div className="root-layout-wrapper" style={ { paddingTop: isHomePage !== "/"? "100px": ""}}>
        <NavMobile />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
