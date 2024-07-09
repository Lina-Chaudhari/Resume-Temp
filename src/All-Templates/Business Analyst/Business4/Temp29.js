import React from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Temp29.css';

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledButtonNext = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledIcon = styled.span`
  margin-right: 5px;
`;

const Temp29 = () => {

  const downloadPDF = () => {
    const element = document.querySelector('.container29'); 
    const opt = {
      margin: 5,
      filename: 'Business Analyst-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <>
      <StyledButton onClick={downloadPDF}>
        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Download
      </StyledButton>
      <StyledButtonNext>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Back
      </StyledButtonNext>

      <div className="container29">
        <div className="sidebar29">
          <h1 contentEditable="true">ABIGAIL HALL</h1>
          <div className="achievements29 section29">
            <h2 className="section-title" style={{color:"white" ,marginTop:"20%"}}>Achievements</h2>
            <ul contentEditable="true">
              <li>Streamlined reporting processes</li>
              <li>Enhanced data integration</li>
              <li>Award for innovation</li>
            </ul>
          </div>
          <div className="skills29 section29">
            <h2 className="section-title29" style={{color:"white"}}>Skills</h2>
            <ul contentEditable="true">
              <li>Data Visualization</li>
              <li>Agile and Scrum</li>
              <li>JIRA</li>
              <li>SQL</li>
              <li>ETL</li>
              <li>Business Intelligence</li>
            </ul>
          </div>
          <div className="certifications29 section29">
            <h2 className="section-title29" style={{color:"white"}}>Certifications</h2>
            <ul contentEditable="true">
              <li>Certified Scrum Master</li>
              <li>Advanced Data Modeling</li>
            </ul>
          </div>
          <div className="projects section29">
            <h2 className="section-title29" style={{color:"white"}}>Projects</h2>
            <ul contentEditable="true">
              <li>Analytics Dashboard Enhancement Project</li>
            </ul>
          </div>
        </div>
        <div className="main-content29">
          <div className="contact-info29 section29">
            <h2 contentEditable="true" className="contact-item29" style={{color:"blue"}}>Senior Business Analyst | Data Analytics Expert</h2>
            <div contentEditable="true" className="contact-item29"><StyledIcon><FontAwesomeIcon icon={faEnvelope}  /></StyledIcon>abi.hall@enhancv.com |</div>
            <div contentEditable="true" className="contact-item29"><StyledIcon><FontAwesomeIcon icon={faLink} /></StyledIcon>linkedin.com/in/abigail-hall |</div>
            <div  contentEditable="true" className="contact-item29"><StyledIcon><FontAwesomeIcon icon={faMapMarkerAlt} /></StyledIcon>San Francisco, CA</div>
          </div>
          <div className="summary29 section29">
            <h2 className="section-title29">Summary</h2>
            <p className="text29" contentEditable="true">
              Seasoned IT business analyst with over 12 years in business analytics, specializing in data visualization and BI tools analysis. Demonstrated success in leading major analytics dashboard projects that enhanced reporting efficiency by 30%. Expertise in Agile and Scrum methodologies, JIRA, SQL, ETL, and Master Data Management. Proven ability in boosting operational efficiencies and achieving substantial cost savings through strategic data integration projects.
            </p>
          </div>
          <div className="experience29 section29">
            <h2 className="section-title29">Experience</h2>
            <ul >
              <li contentEditable="true">
                <strong>Senior Business Analyst</strong><br />
                Genentech - 01/2016 - Present<br />
                South San Francisco, CA
                <ul contentEditable="true">
                  <li>Led the development of an advanced analytics dashboard that improved decision-making speed for senior management by 25%.</li>
                  <li>Facilitated over 40 workshops to define and refine project scopes, translating complex data into actionable insights for cross-functional teams.</li>
                  <li>Conducted in-depth data analysis to validate the feasibility of new dashboard features, which increased user engagement by 15%.</li>
                </ul>
              </li>
              <li contentEditable="true">
                <strong>Business Systems Analyst</strong><br />
                Amgen - 06/2012 - 12/2015<br />
                Thousand Oaks, CA
                <ul contentEditable="true">
                  <li>Implemented a strategic data integration solution that streamlined operations and saved the company $200k annually.</li>
                  <li>Managed a portfolio of data analytics projects, ensuring alignment with business goals and continuous delivery of value.</li>
                  <li>Developed user stories and use cases for BI solutions, improving data-driven decision-making across the organization.</li>
                </ul>
              </li>
              
            </ul>
          </div>
          <div className="education29 section29">
            <h2 className="section-title29">Education</h2>
            <ul contentEditable="true">
              <li>
                Master of Science in Information Systems<br />
                University of San Francisco - 01/2006 - 01/2008<br />
                San Francisco, CA
              </li>
              <li>
                Bachelor of Science in Computer Science<br />
                University of California, Berkeley - 01/2002 - 01/2006<br />
                Berkeley, CA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp29;
