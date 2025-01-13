import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import NavMobile from "./NavMobile";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname;

  const [sendState, setSendState] = useState("");

  return (
    <>
      <NavMobile menuBarAction={sendState} />
      <div className="nav-bar">
        <div
          className="nav-bar-wrapper"
          style={{
            backgroundColor:
              isHomePage !== "/" ? "rgba(0, 0, 0, 0.9)" : "transparent",
          }}
        >
          <div className="container">
            {isHomePage !== "/" ? (
              <h1 className="name-heading" style={{ fontSize: "36px" }}>
                <Link to="/">Udhaya J</Link>
              </h1>
            ) : (
              <></>
            )}
            {isHomePage !== "/" ? <NavLinks /> : <></>}
            <IoMenu
              onClick={() => {
                setSendState("open");
                setTimeout(() => {
                  setSendState("close");
                });
              }}
              className="menu-icon"
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
