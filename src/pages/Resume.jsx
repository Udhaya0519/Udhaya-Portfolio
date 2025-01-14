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
                <div className="resume-sub-section resume-education">
                    <h2>Education</h2>
                    <div className="resume-sub-content">
                        <h3>B.E. ELECTRONICS & COMM. ENGINEERING</h3>
                        <span>2021-2025</span>
                        <em>Anna University (BIT Campus), Trichy,India</em>
                        <p className='p-edu'>
                            An undergraduate program that deals with the subjects and topics related to computer science, computer application, and its services. The main aim of this program is to create quality professionals and research fellows who can work in every sector of the world by implementing the technology of computer systems and software.
                
                        </p>
                        <p className='p-edu'>
                            Relevant Coursework: Java , C , SQL , Advanced Java , Angular , Mongodb , Cloud Computing Operating Systems and Software Development.
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
                                Data Collection: Collect data from 20 diverse sources (articles, reviews) using Python and web scraping (Selenium, Tweepy, Snscraper) to gather comprehensive brand insights.
                            </li>
                            <li>
                                Emotional & Sentiment Analysis: Analyze sentiments and emotions in the data to understand public opinion, brand perception, and customer satisfaction. Utilize Python libraries (pandas, numpy, matplotlib) for efficient data processing and visualization
                            </li>
                            <li>
                                Credit Assurance & Time Savings: Create credit assurance report with actionable insights. Save 1000 hours/month through automation and streamlined data processing, optimizing decision-making and resource allocation
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-sub-section resume-certification">
                    <h2>CERTIFICATION</h2>
                    <div className="resume-sub-content">
                            <h3>Networking Essentials</h3>
                            <span>May 2023</span>
                            <em>Cisco Networking Academy ,CISCO,India</em>
                            <p>
                                Completed my High School with Major in <br />
                                Computer Science <br />
                                Maths , Physics and Chemistry.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
