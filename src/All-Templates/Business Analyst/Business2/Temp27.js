import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import selectedImage from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './temp27.css';

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

const Temp27 = () => {
  const [imageSrc, setImageSrc] = useState(selectedImage); // Initialize with default image
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
    const element = document.querySelector('.resume27'); // Update the selector to match your target element
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
      <div className="resume27">
      <header className="resume-header27">
        <div className="header-left27">
          <div>
            <h1 style={{color:"white"}} contentEditable="true">Daniel Gallego</h1>
            <p style={{color:"white"}} contentEditable="true">Business Analyst</p>
          </div>
        </div>
        <div className="contact-info27">
          <p contentEditable="true">📧 hello@reallygreatsite.com</p>
          <p contentEditable="true">📞 +123-456-7890</p>
          <p contentEditable="true">🏠 123 Anywhere St., Any City</p>
        </div>
      </header>
      
      <section className="summary27" id='section27'>
      <img
              src={imageSrc}
              alt="Description of the image"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
              className="profile-img"
            />
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
        <p contentEditable="true">
          Experienced Business Analyst with a strong background in data analysis and project management. 
          Skilled in identifying business needs and developing solutions to improve processes and drive growth. 
          Proven ability to communicate complex ideas clearly to stakeholders.
        </p>
      </section>

      <div className="main-content27">
        <div className="left-column27">
          <section className="education27" id='section27'>
            <h2>Education</h2>
            <p contentEditable="true"><strong>Borcelle University</strong></p>
            <p contentEditable="true">Bachelor of Science in Business Administration</p>
            <p contentEditable="true">Graduated May 2020</p>
          </section>

          <section className="skills27" id='section27'>
            <h2>Skills</h2>
            <ul contentEditable="true">
              <li>Data Analysis</li>
              <li>Project Management</li>
              <li>Stakeholder Communication</li>
              <li>Requirement Gathering</li>
              <li>Data Visualization</li>
              <li>Process Improvement</li>
            </ul>
          </section>
        </div>

        <div className="right-column27">
          <section className="work-experience27" id='section27'>
            <h2>Work Experience</h2>
            <p contentEditable="true"><strong>Business Analyst at Thynk Unlimited</strong></p>
            <p contentEditable="true">September 2023 - Present</p>
            <p contentEditable="true">Led a team in analyzing market trends and competitor performance to provide strategic recommendations to senior management.</p>
          </section>

          <section className="projects27" id='section27'>
            <h2>Projects</h2>
            <p contentEditable="true"><strong>Market Analysis Project</strong></p>
            <p contentEditable="true">Conducted in-depth market analysis for Giggling Platypus Co., resulting in a 15% increase in market share within six months.</p>
            <p contentEditable="true">Utilized data visualization techniques to present findings to executive team.</p>
          </section>

          <section className="certification27" id='section27'>
            <h2>Certification</h2>
            <p contentEditable="true">Certified Business Analysis Professional (CBAP)</p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Temp27;
