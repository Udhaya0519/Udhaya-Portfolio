import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavMobile from "../components/NavMobile.jsx";


function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname;

  return (
    <>
      <Navbar />
      <NavMobile />
      <div className="root-layout">
        <div className="root-layout-wrapper" style={ { paddingTop: isHomePage !== "/"? "100px": "",paddingBottom: isHomePage !== "/"? "50px": ""}}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
