import { NavLink } from "react-router-dom";

function NavLinks() {


  return (
    <nav className="home-nav-bar">
      <ul>
        <li>
          <NavLink to="/" className='home-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
