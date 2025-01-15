import { Link } from 'react-router-dom'
import '../assets/css/projects.css'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'



const Projects = () => {
  return (
    <div className='projects-section container'>
      <div className="projects-heading">
        <span className="projects-sub-heading">
          PROJECTS
        </span>
        <h1>
          MY WORKS
        </h1>
      </div>
      <div className="project-repo-link">
        <h4>For More Projects Visit</h4>
        <TbArrowBadgeRightFilled className="right-cursor-icon"/>  
        <Link to="https://github.com/Udhaya0519?tab=repositories">Github</Link>
      </div>
      <div className="project-flex">
        <div className="project-item">
          <img src="../public/images/project-image1.png" width="100%" height="100%" alt="" />
          <div className='project-item-info'>
            <div className="clip-border top"></div>
            <div className='project-name'>Bridal Lash</div>
            <div className="clip-border bottom"></div>
          </div>
        </div>
        <div className="project-item">
          <img src="../public/images/project-image1.png" width="100%" height="100%" alt="" />
          <div className='project-item-info'>
            <div className="clip-border top"></div>
            <div className='project-name'>Bridal Lash</div>
            <div className="clip-border bottom"></div>
          </div>
        </div>
        <div className="project-item">
          <img src="../public/images/project-image1.png" width="100%" height="100%" alt="" />
          <div className='project-item-info'>
            <div className="clip-border top"></div>
            <div className='project-name'>Bridal Lash</div>
            <div className="clip-border bottom"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
