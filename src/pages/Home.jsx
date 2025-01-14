import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavLinks from "../components/NavLinks";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="home-container">
          <h1 className="name-heading">
            <Link to="/">Udhaya J</Link>
          </h1>
          <h2 className="sub-heading">
            I&apos;m a passionate{" "}
            <span className="role">Full Stack Developer</span> from Chennai, IND
          </h2>
          <NavLinks />
          <div className="social-links">
            <div className="icon-link">
              <FaLinkedin className="icon" />
            </div>
            <div className="icon-link">
              <FaGithub className="icon" />
            </div>
            <div className="icon-link">
              <FaInstagram className="icon" />
            </div>
            <div className="icon-link">
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>
        <div className="credits">Developed by Udhaya-J❤️</div>
      </div>

    </div>
  );
};

export default Home;
