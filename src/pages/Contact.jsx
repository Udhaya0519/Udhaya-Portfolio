import { GrLocation } from 'react-icons/gr'
import '../assets/css/contact.css'
import { LuPhoneCall, LuShare2 } from 'react-icons/lu'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div className="contact-section container">
      <div className="contact-heading">
        <span className="contact-sub-heading">
          CONTACT
        </span>
        <h1>
          CONTACT ME
        </h1>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="location-icon-wrapper contact-icon-wrapper">
            <GrLocation className='location-icon contact-info-icon'/>
          </div>
          <div className="location-info contact-sub-info">
            <h5>My Address</h5>
            <span>Chennai - 600053,IND</span>
          </div>
        </div>
        <div className="contact-info">
          <div className="social-icon-wrapper contact-icon-wrapper">
            <LuShare2  className='social-icon contact-info-icon'/>
          </div>
          <div className="social-info contact-sub-info">
            <h5>Social Profiles</h5>
            <div className='contact-social-icons'>
              <Link to={"https://www.linkedin.com/in/udhaya-j"}>
                <FaLinkedin style={{color: "white",cursor:"pointer"}}/>
              </Link>
              <Link to={"https://github.com/Udhaya0519"}>
                <FaGithub style={{color: "white",cursor:"pointer"}}/>
              </Link>
              <Link to={"https://www.instagram.com/udhaya_janakiraman/"}>
                <FaInstagram style={{color: "white",cursor:"pointer"}}/>
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="mail-icon-wrapper contact-icon-wrapper">
            <MdOutlineMail className='mail-icon contact-info-icon'/>
          </div>
          <div className="mail-info contact-sub-info">
            <h5>Email Me</h5>
            <span>udhaya0519@gmail.com</span>
          </div>
        </div>
        <div className="contact-info">
          <div className="call-icon-wrapper contact-icon-wrapper">
            <LuPhoneCall className='call-icon contact-info-icon'/>
          </div>
          <div className="call-info contact-sub-info">
            <h5>Call Me</h5>
            <span>+91 9940302644</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
