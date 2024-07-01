import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './Temp25.css';
import profileImage from '../Temp25/profile.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  left: 20px; /* Move to the left side */
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

const Temp25 = () => {
  const [imageSrc, setImageSrc] = useState(profileImage);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    const element = document.querySelector('.resume-container25');
    const opt = {
      margin: 10,
      filename: 'Data Scientist-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
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

      <div className="resume-container25">
    <div className="header25">
      <img  src={profileImage} alt="Resume_image" onClick={handleImageClick}  className="profile-image25"/>
    <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }}/>
      <div className="header-info25">
        <h1>Hazel Clark</h1>
        <h2>Director of Data Science</h2>
        <p>📧 help@enhancv.com</p>
        <p>📍 Indianapolis, Indiana</p>
        <p>🔗 linkedin.com</p>
      </div>
    </div>

    <div className="section25">
      <h3 className="section-title25">SUMMARY</h3>
      <p>
        Expert data scientist with over 10 years of experience in software architecture and digital strategy development. Proven track record of implementing state-of-the-art platforms and creating innovative digital solutions in the pharmaceutical industry. Directed major projects leading to improved operational efficiency and business growth.
      </p>
    </div>

    <div className="section25">
      <h3 className="section-title25">EXPERIENCE</h3>
      <div className="experience-item25">
        <h4 className="job-title25">Senior Data Scientist</h4>
        <p className="company-info25">Eli Lilly and Company | 2016 - Present | Indianapolis, Indiana</p>
        <ul className="job-description25">
          <li>Worked on providing centralized support and expertise to teams across the research laboratories.</li>
          <li>Established best practices for data capture and contextualization resulting in a 25% increase in data accuracy.</li>
          <li>Led the development of a data integration platform, streamlining data ingestion from various domains.</li>
          <li>Oversaw the creation of operational solutions using AWS and Databricks, improving project efficiency by 30%.</li>
          <li>Initiated rapid prototyping and experimentation practices, accelerating product development timeline by 20%.</li>
        </ul>
      </div>
      <div className="experience-item25">
        <h4 className="job-title25">Data Science Specialist</h4>
        <p className="company-info25">Roche Diagnostics | 2013 - 2016 | Indianapolis, Indiana</p>
        <ul className="job-description25">
          <li>Managed the production and implementation of digital tools supporting decision making.</li>
          <li>Created bespoke tools for KPI tracking, contributing to a 15% increase in performance metrics accuracy.</li>
          <li>Developed digital transformation strategies for the company, leading to a 20% increase in operational efficiency.</li>
          <li>Worked with IT to establish a development model, decreasing system downtime by 18%.</li>
          <li>Evaluated the impact of digital solutions on business operations, resulting in a clearer understanding of ROI.</li>
        </ul>
      </div>
      <div className="experience-item25">
        <h4 className="job-title25">Junior Data Scientist</h4>
        <p className="company-info25">Cook Medical | 2011 - 2013 | Bloomington, Indiana</p>
        <ul className="job-description25">
          <li>Resolved complex business problems by implementing analytical techniques and statistical models.</li>
          <li>Designed algorithms and predictive models to extract insights and analyze trends from complex data sets.</li>
          <li>Co-led a team in the development of an end-to-end data visualization tool, enhancing decision-making and strategic planning.</li>
          <li>Contributed to the development and testing of IoT enabled features, resulting in a 15% improvement in device connectivity.</li>
          <li>Designed a low-code programming tool to automate routine tasks, saving over 100 man-hours a year.</li>
        </ul>
      </div>
    </div>

    <div className="section25">
      <h3 className="section-title25">STRENGTHS</h3>
      <ul className="strengths-list25">
        <li className="strength-item25">🔸 Analytical Thinking</li>
        <li className="strength-item25">🔸 Problem Solving</li>
        <li className="strength-item25">🔸 Team Leadership</li>
      </ul>
    </div>

    <div className="section25">
      <h3 className="section-title25">EDUCATION</h3>
      <div className="education-item25">
        <h4 className="degree25">PhD in Data Science</h4>
        <p className="school-info25">Stanford University | 2008 - 2011 | Stanford, CA</p>
      </div>
      <div className="education-item25">
        <h4 className="degree25">Master's Degree in Computer Science</h4>
        <p className="school-info25">Indiana University Bloomington | 2006 - 2008 | Bloomington, Indiana</p>
      </div>
      <div className="education-item25">
        <h4 className="degree25">Bachelor of Science in Computer Science</h4>
        <p className="school-info25">Indiana University–Purdue University Indianapolis | 2003 - 2006 | Indianapolis, Indiana</p>
      </div>
    </div>

    <div className="section25">
      <h3 className="section-title25">SKILLS</h3>
      <ul className="skills-list25">
        <li className="skill-item25">Data Science</li>
        <li className="skill-item25">Software Architecture</li>
        <li className="skill-item25">AWS</li>
        <li className="skill-item25">Databricks</li>
        <li className="skill-item25">Python Programming</li>
        <li className="skill-item25">SQL</li>
        <li className="skill-item25">R Programming</li>
        <li className="skill-item25">IoT</li>
        <li className="skill-item25">Security</li>
        <li className="skill-item25">Connected Data (Graph)</li>
        <li className="skill-item25">BI</li>
        <li className="skill-item25">Data Engineering</li>
        <li className="skill-item25">Statistical Modeling</li>
      </ul>
    </div>
  </div>

    
    </>
  );
};

export default Temp25;
