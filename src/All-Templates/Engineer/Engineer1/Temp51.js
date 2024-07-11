import React, { useState, useRef } from 'react';
import './temp51.css';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhone, faEnvelope, faMapMarkerAlt,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const Temp51 = () => {
 

  const downloadPDF = () => {
    const element = document.querySelector('.container51');
    const opt = {
      margin: 5,
      filename: 'Engineer resume.pdf',
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

      <div className="container51">
        <div className="header51">
          <h1 className="title51" contentEditable="true">Engineering Resume Example</h1>
          <h2 className="subtitle51" contentEditable="true">By Resume Genius</h2>
          <div className="contact-info51">
            <div contentEditable="true"><FontAwesomeIcon icon={faPhone} /> (323) 721-1984</div>
            <div contentEditable="true"><FontAwesomeIcon icon={faEnvelope} /> harper.stewart@gmail.com</div><br></br>
            <div contentEditable="true"><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/harperstewart</div>
          </div>
        </div>

        <div className="section51">
          <h3 className="section-title51">Resume Summary</h3>
          <p contentEditable="true">Mechanical Engineer with 5+ years of experience in lightweight materials innovation, production, and maintenance...</p>
        </div>

        <div className="section51">
          <h3 className="section-title51">Education</h3>
          <div className="education51">
            <div><FontAwesomeIcon icon={faCalendarDays} /> May 2017</div>
            <div contentEditable="true">
              <strong>B.S. in Mechanical Engineering</strong><br />
              UC San Diego, San Diego, CA<br />
              GPA: 3.8/4.0
            </div>
          </div>
        </div>

        <div className="section51">
          <h3 className="section-title51">Professional Experience</h3>
          <div className="experience51" contentEditable="true">
            <strong>MECHANICAL ENGINEER</strong> | SeedSecure, San Diego, CA<br />
            <FontAwesomeIcon icon={faCalendarDays} /> Sept 2020 – Present<br />
            <ul>
              <li>Worked with a team of 10 to ideate, create, maintain, and update lightweight materials...</li>
              <li>Increased production efficiency by 15% by strategically minimizing bottlenecks...</li>
            </ul>
          </div>
          <div className="experience51" contentEditable="true">
            <strong>MECHANICAL ENGINEERING APPRENTICE</strong> | Rathbone Pacific, San Diego, CA<br />
            <FontAwesomeIcon icon={faCalendarDays} /> Jun 2017 – Aug 2020<br />
            <ul>
              <li>Researched new materials-generation techniques, compiling and distributing an average of 3 reports/year...</li>
              <li>Liaised between design, production, and quality control teams...</li>
            </ul>
          </div>
        </div>

        <div className="section51">
          <h3 className="section-title51">Additional Skills</h3>
          <div className="skills51" contentEditable="true">
            <div>Tinkercad</div>
            <div>AutoCAD</div>
            <div>Problem solving</div>
            <div>Inventor CAM</div>
            <div>MATLAB</div>
            <div>SolidWorks</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp51;
