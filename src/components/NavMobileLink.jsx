import { NavLink } from "react-router-dom";


function NavMobileLink({ onLinkClick }) {

  return (
    <nav className="mobile-nav-bar">
      <ul>
        <li>
          <NavLink onClick={ onLinkClick } to="/" className="home-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={ onLinkClick } to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={ onLinkClick } to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink onClick={ onLinkClick } to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={ onLinkClick } to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobileLink;
