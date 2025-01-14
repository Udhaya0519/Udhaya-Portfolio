import { MdArrowForwardIos } from 'react-icons/md';
import '../assets/css/about.css';
import { CgWebsite } from 'react-icons/cg';


const About = () => {
  return (
    <div className='about-section container'>
      <div className="about-heading">
        <span className='about-sub-heading'>ABOUT</span>
        <h1>LEARN MORE ABOUT ME</h1>
      </div>
      <div className="about-me">
            <div className="profile-photo">
                <div className="my-photo">
                    <img width="100%" height="100%" src='../public/images/avatar_profile.png' alt="my photo" />
                </div>
            </div>
            <div className="about-info">
                <h4>
                    Full Stack Dev & Tech Enthusiast 
                </h4>
                <p className='about-desc'>
                    I'm a passionate tech enthusiast with a deep love for working with Python and an insatiable curiosity to explore the vast realms of cloud technologies and DevOps. As a software developer at heart, I find joy in crafting innovative solutions that harness the power of technology to solve real-world problems.In this fast-paced tech world, I am constantly seeking opportunities to contribute and learn. I am eager to be part of groundbreaking projects that push the boundaries of innovation and make a positive impact on the world. My quest for knowledge and enthusiasm for cutting-edge technologies drive me to stay ahead of the curve and embrace new challenges with open arms.
                </p>
                <div className="info">
                    <div className="phone-info">
                        <MdArrowForwardIos className="right-arrow-icon" style={{ color: '#4ceb95' }}/>
                        <strong>Phone:</strong>
                        <span>+91 9940302644</span>
                    </div>
                    <div className="email-info">
                        <MdArrowForwardIos className="right-arrow-icon" style={{ color: '#4ceb95' }}/>
                        <strong>Email:</strong>
                        <span>udhaya0519@gmail.com</span>
                    </div>
                    <div className="city-info">
                        <MdArrowForwardIos className="right-arrow-icon" style={{ color: '#4ceb95' }}/>
                        <strong>City:</strong>
                        <span>Chennai, India</span>
                    </div>
                    <div className="collaboration-info"> 
                        <MdArrowForwardIos className="right-arrow-icon" style={{ color: '#4ceb95' }}/>
                        <strong>Collaboration:</strong>
                        <span>Available</span>
                    </div>
                </div>
                <p>
                    Beyond my academic endeavors, I also hold a strong commitment to a healthy lifestyle. Being a fitness enthusiast, I firmly believe that regular exercise is essential for overall well-being. Whether it's going for a refreshing jog in the morning or hitting the gym to challenge myself, I always make time to stay active and keep my mind sharp
                </p>
            </div>
      </div>
      <div className="about-skills">
        <span className='about-sub-heading'>SKILLS</span>
        <div className="skills">
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill1">
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill2">
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill3">
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill4">
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill5">
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="skill-name">
                    <span>JavaScript</span>
                    <span>80%</span>
                </div>
                <div className="progress-bar-wrap">
                    <div className="progress-bar skill6">
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="about-interests">
        <span className='about-sub-heading'>Interests</span>
        <div className="interests-section">
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
            <div className="interest">
                <CgWebsite style={ {color:"#5578ff", fontSize:"30px"}}/>
                <span>User Interface</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
