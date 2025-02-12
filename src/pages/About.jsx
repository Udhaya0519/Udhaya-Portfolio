import { MdArrowForwardIos } from "react-icons/md";
import "../assets/css/about.css";
import { FaRobot } from "react-icons/fa";
import { FaMobileAlt, FaDatabase } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiMaterialdesign, SiGraphql } from "react-icons/si";

const About = () => {
   return (
      <div className="about-section container">
         <div className="about-heading">
            <span className="about-sub-heading">ABOUT</span>
            <h1>LEARN MORE ABOUT ME</h1>
         </div>
         <div className="about-me">
            <div className="about-info">
               <h4>Full Stack Dev & Tech Enthusiast</h4>
               <p className="about-desc">
                  I'm a passionate MERN Stack Developer with a well-rounded
                  foundation in both frontend and backend development. I excel
                  at crafting responsive and visually engaging web applications,
                  ensuring seamless user experiences without compromising on
                  robust functionality. While I build complete full-stack
                  solutions, my particular focus is on the frontend—crafting
                  experiences that are both seamless and appealing. At the same
                  time, I'm actively deepening my skills with Python frameworks
                  like Django and Flask to further broaden my development
                  expertise. In today's fast-paced tech landscape, I embrace
                  every opportunity to learn and innovate, continuously pushing
                  the boundaries of what's possible with technology.
               </p>
               <div className="info">
                  <div className="phone-info">
                     <MdArrowForwardIos
                        className="right-arrow-icon"
                        style={{ color: "#4ceb95" }}
                     />
                     <strong>Phone:</strong>
                     <span>+91 9940302644</span>
                  </div>
                  <div className="email-info">
                     <MdArrowForwardIos
                        className="right-arrow-icon"
                        style={{ color: "#4ceb95" }}
                     />
                     <strong>Email:</strong>
                     <span>udhaya0519@gmail.com</span>
                  </div>
                  <div className="city-info">
                     <MdArrowForwardIos
                        className="right-arrow-icon"
                        style={{ color: "#4ceb95" }}
                     />
                     <strong>City:</strong>
                     <span>Chennai, India</span>
                  </div>
                  <div className="collaboration-info">
                     <MdArrowForwardIos
                        className="right-arrow-icon"
                        style={{ color: "#4ceb95" }}
                     />
                     <strong>Collaboration:</strong>
                     <span>Available</span>
                  </div>
               </div>
               <p>
                  Beyond my academic endeavors, I also hold a strong commitment
                  to a healthy lifestyle. Being a fitness enthusiast, I firmly
                  believe that regular exercise is essential for overall
                  well-being. Whether it's going for a refreshing jog in the
                  morning or hitting the gym to challenge myself, I always make
                  time to stay active and keep my mind sharp
               </p>
            </div>
         </div>
         <div className="about-interests">
            <span className="about-sub-heading">Interests</span>
            <div className="interests-section">
               <div className="interest">
                  <FaRobot style={{ color: "#5578ff", fontSize: "30px" }} />
                  <span>Artificial Intelligence</span>
               </div>
               <div className="interest">
                  <FaMobileAlt style={{ color: "#5578ff", fontSize: "30px" }} />
                  <span>Mobile-Friendly Development</span>
               </div>

               <div className="interest">
                  <MdOutlineWeb
                     style={{ color: "#ff6b6b", fontSize: "30px" }}
                  />
                  <span>Web Application Design</span>
               </div>

               <div className="interest">
                  <SiMaterialdesign
                     style={{ color: "#4caf50", fontSize: "30px" }}
                  />
                  <span>UI/UX Design</span>
               </div>

               <div className="interest">
                  <SiGraphql style={{ color: "#e535ab", fontSize: "30px" }} />
                  <span>API Development</span>
               </div>

               <div className="interest">
                  <FaDatabase style={{ color: "#f9c352", fontSize: "30px" }} />
                  <span>Data Management</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
