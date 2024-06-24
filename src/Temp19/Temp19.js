import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import pic from "../Temp17/pic.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faUser, faBriefcase, faLightbulb, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './temp19.css'; 

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

const Temp19 = () => {
    const [imageSrc, setImageSrc] = useState(pic); // Initialize with default image
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
        const element = document.querySelector('.resume19'); // Targeting the resume container
        const opt = {
          margin: 5, // Top and bottom margin in mm
          filename: 'Consultant-resume.pdf',
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

      <div className="resume19">
        <header className="header19">
          <h1>John Doe</h1>
          <p className="title19" contentEditable="true">Recruitment Consultant</p>
          <p className="contact19"  contentEditable="true">Email: john.doe@example.com | Phone: +1 234 567 890</p>
        </header>

        <fieldset className="profile19">
          <legend>
            <FontAwesomeIcon icon={faUser} className="icon19" /> Profile
          </legend>
          <p  contentEditable="true">
            Experienced Recruitment Consultant with a proven track record in
            placing top talent in diverse industries. Adept at client relationship
            management, strategic sourcing, and talent acquisition.
          </p>
        </fieldset>

        <fieldset className="experience19">
          <legend>
            <FontAwesomeIcon icon={faBriefcase} className="icon19" /> Experience
          </legend>
          <div className="job19">
            <h3  contentEditable="true">Senior Recruitment Consultant</h3>
            <p  contentEditable="true" className="job-details19">ABC Recruiting, 2018 - Present</p>
            <ul  contentEditable="true">
              <li>Lead a team of 5 recruiters in sourcing and placing candidates.</li>
              <li>Developed and maintained relationships with key clients.</li>
              <li>Increased placement rate by 20% year-over-year.</li>
            </ul>
          </div>
          <div className="job19">
            <h3>  contentEditable="true"Recruitment Specialist</h3>
            <p className="job-details19">XYZ Staffing, 2015 - 2018</p>
            <ul  contentEditable="true">
              <li>Managed the full recruitment cycle for various roles.</li>
              <li>Conducted interviews and assessments to identify top talent.</li>
              <li>Coordinated recruitment campaigns and job fairs.</li>
            </ul>
          </div>
        </fieldset>

        <fieldset className="skills19">
          <legend>
            <FontAwesomeIcon icon={faLightbulb} className="icon19" /> Skills
          </legend>
          <ul  contentEditable="true">
            <li>Client Relationship Management</li>
            <li>Talent Acquisition</li>
            <li>Strategic Sourcing</li>
            <li>Interviewing and Assessments</li>
            <li>Data-Driven Recruiting</li>
          </ul>
        </fieldset>

        <fieldset className="education19">
          <legend>
            <FontAwesomeIcon icon={faGraduationCap} className="icon19" /> Education
          </legend>
          <div className="school19">
            <h3  contentEditable="true">Bachelor of Business Administration</h3>
            <p  contentEditable="true" className="school-details19">University of Example, 2011 - 2015</p>
          </div>
        </fieldset>

        <footer className="footer19">
          <p contentEditable="true">
            LinkedIn: <a href="https://linkedin.com/in/johndoe">linkedin.com/in/johndoe</a> |
            GitHub: <a href="https://github.com/johndoe">github.com/johndoe</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Temp19;
