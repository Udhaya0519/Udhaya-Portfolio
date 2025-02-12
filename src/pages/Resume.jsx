import '../assets/css/resume.css';


const Resume = () => {
  return (
    <div className="resume-section container">
        <div className="resume-heading">
            <span className="resume-sub-heading">
                RESUME
            </span>
            <h1>
                CHECK MY RESUME
            </h1>
        </div>
        <div className="resume-main-section">
            <div className='resume-grid'>
                <div className="resume-sub-section resume-summary">
                    <h2>Summary</h2>
                    <div className="resume-sub-content">
                        <h3>UDHAYA J</h3>
                        <br />
                        <p></p>
                        <ul>
                            <li>Chennai, India</li>
                            <li>(+91) 9940302644</li>
                            <li>udhaya0519@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="resume-sub-section resume-summary">
                    <h2>Skills</h2>
                    <div className="resume-sub-content">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>DOM Manipulation</li>
                        </ul>
                    </div>
                    <div className="resume-sub-content">
                        <h3>Frontend Frameworks</h3>
                        <ul>
                            <li>React JS</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="resume-sub-content">
                        <h3>Backend</h3>
                        <ul>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>Mongo DB</li>
                        </ul>
                    </div>
                </div>
                <div className="resume-sub-section resume-education">
                    <h2>Education</h2>
                    <div className="resume-sub-content">
                        <h3>B.E. ELECTRONICS & COMM. ENGINEERING</h3>
                        <span>2021-2025</span>
                        <em>Anna University (BIT Campus), Trichy,India</em>
                        <p className='p-edu'>
                            An undergraduate program that focuses on the principles of electronics, communication systems, and embedded technologies while integrating software and hardware applications. The program emphasizes signal processing, networking, VLSI design, and IoT while providing a strong foundation in programming and system development. With the growing convergence of electronics and software, this field enables professionals to work in embedded systems, network security, wireless communication, and telecommunications.
                        </p>
                        <p className='p-edu'>
                            Relevant Coursework: C & Data Structures, Python, Computer Networks, Operating Systems, Embedded Systems, IoT, and AI&ML.
                        </p>
                    </div>
                    <div className="resume-sub-content">
                        <h3>HIGH SCHOOL</h3>
                        <span>2019-2021</span>
                        <em>T.I. MHSS, Chennai,India</em>
                        <p>
                            Completed my High School with Major in <br />
                            Computer Science <br />
                            Maths , Physics and Chemistry.
                        </p>
                    </div>
                </div>
            </div>
            <div className='resume-grid'>
                <div className="resume-sub-section resume-experience">
                    <h2>Experience</h2>
                    <div className="resume-sub-content">
                        <h3>FRONTEND DEVELOPER INTERN</h3>
                        <span>Jul 2024 - Aug 2024</span>
                        <em>SIT, Valasaravakkam,Chennai</em>
                        <ul>
                            <li>
                                Designed and developed responsive websites using HTML, CSS, JavaScript, and Tailwind CSS, ensuring seamless user experience across various devices and screen sizes.
                            </li>
                            <li>
                                Created interactive UI components and layouts with a strong focus on user experience, accessibility, and modern design principles, enhancing visual appeal and usability.Contributed to the development of the FitFusion single-page website, showcasing expertise in UI design, color selection, and responsive web layouts for an engaging user experience.
                            </li>
                            <li>
                                Applied industry best practices for responsive design, cross-browser compatibility, and performance optimization, ensuring high-quality and scalable frontend solutions.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-sub-section resume-certification">
                    <h2>CERTIFICATION</h2>
                    <div className="resume-sub-content">
                            <h3>Postman API fundamentals</h3>
                            <span>Dec 2024</span>
                            <em>Postman</em>
                            <h3>Networking Essentials</h3>
                            <span>May 2023</span>
                            <em>Cisco Networking Academy ,CISCO,India</em>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
