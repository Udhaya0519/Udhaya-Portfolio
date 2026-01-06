import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import "../assets/css/projects.css";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const Projects = () => {
   return (
      <div className="projects-section container">
         <div className="projects-heading">
            <span className="projects-sub-heading">PROJECTS</span>
            <h1>MY WORKS</h1>
         </div>
         <div className="project-repo-link">
            <h4>For More Projects Visit</h4>
            <TbArrowBadgeRightFilled className="right-cursor-icon" />
            <Link to="https://github.com/Udhaya0519?tab=repositories">
               Github
            </Link>
         </div>
         <div className="project-grid">
            <div className="project-item">
               <img
                  src="/images/eduvance.png"
                  width="100%"
                  height="100%"
                  alt="Eduvance LMS"
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Eduvance</div>
                  <div className="project-links">
                     <Link to={"https://eduvance-lms.vercel.app/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/EduVance"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/chatty.png"
                  width="100%"
                  height="100%"
                  alt="Chatty"
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Chatty</div>
                  <div className="project-links">
                     <Link to={"https://chatty-lovat-five.vercel.app/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/chatty"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/UAuth-image.png"
                  width="100%"
                  height="100%"
                  alt="UAuth App"
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">UAuth</div>
                  <div className="project-links">
                     <Link to={"https://mern-auth-app-pi.vercel.app/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/Mern-Auth-App"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/product-store.png"
                  width="100%"
                  height="100%"
                  alt=""
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Product Store</div>
                  <div className="project-links">
                     <Link to={"https://product-store-app-tan.vercel.app/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/Product-Store"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/project-image1.png"
                  width="100%"
                  height="100%"
                  alt=""
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Bridal Lash</div>
                  <div className="project-links">
                     <Link to={"https://udhaya0519.github.io/BridalLash-freelance-project/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/BridalLash-freelance-project"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/js-calc.png"
                  width="100%"
                  height="100%"
                  alt=""
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Simple Calculator</div>
                  <div className="project-links">
                     <Link to={"https://js-calculator-tailwind.vercel.app/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/JS_Calculator"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
            <div className="project-item">
               <img
                  src="/images/supremeTiles-image.png"
                  width="100%"
                  height="100%"
                  alt=""
               />
               <div className="project-item-info">
                  <div className="clip-border top"></div>
                  <div className="project-name">Supreme Tiles</div>
                  <div className="project-links">
                     <Link to={"https://udhaya0519.github.io/SUPREME-TILES-PROJECT/"}><FaLink /></Link>
                     <Link to={"https://github.com/Udhaya0519/SUPREME-TILES-PROJECT"}><FaGithub /></Link>
                  </div>
                  <div className="clip-border bottom"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
