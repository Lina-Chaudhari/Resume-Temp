import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import selectedImage from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faUser, faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './temp28.css';

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

const Temp28 = () => {
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
    const element = document.querySelector('.resume28'); // Update the selector to match your target element
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

      <div className="resume28">
        <div className="left-column28">
          <div className="header28">
            <h1 contentEditable="true">Lorna Alvarado</h1>
            <h2 contentEditable="true">
              Senior Business Analyst
            </h2>
            <img
              src={imageSrc}
              alt="Lorna Alvarado"
              className="profile-image"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="contact28">
            <h3 className='h328'>
              Contact
            </h3>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
              +123-456-7890
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
              hello@reallygreatsite.com
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '5px' }} />
              123 Anywhere St., Any City, ST 12345
            </p>
          </div>
         <div className='card28'>
         <div className="about-me28">
            <h3 className='h328'>About Me</h3>
            <p contentEditable="true">Seasoned IT business analyst with over 12 years in business analytics, specializing in data visualization and BI software, including Qlikview and SAS. Demonstrated success in leading major analytics dashboard projects that enhanced reporting efficiency by 30%. Expertise extends to Agile and Scrum methodologies, JIRA, SQL, ETL, and Master Data Management. </p>
          </div>
         </div>
          <div className="skills28">
            <h3 className='h328'>Skills</h3>
            <ul contentEditable="true">
              <li>Data Visualization</li>
              <li>Creativity</li>
              <li>Agile and Scrum</li>
              <li>JIRA</li>
              <li>Critical Thinking</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
        <div className="right-column28">
          <div className="card28">
            <div className="education28">
              <h3 className='h328'>Education</h3>
              <div className="education-item28" contentEditable="true">
                <h4>Master of Science in Information Systems</h4>
                <p>Borcelle University, 2016 - 2020</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
              <div className="education-item28" contentEditable="true">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>Borcelle University, 2020 - 2023</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </div>
          </div>
          <div className="card28">
            <div className="experience28">
              <h3 className='h328'>Experience</h3>
              <div className="experience-item28" contentEditable="true">
                <h4>Business Systems Analyst</h4>
                <p>Arowwai Industries, 2016 - 2020</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
              <div className="experience-item28" contentEditable="true">
                <h4>Data Analyst</h4>
                <p>Arowwai Industries, 2019 - 2020</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </div>
          </div>
          <div className="card28">
          <div className="references28">
            <h3 className='h328'>
              References
            </h3>
            <div className="reference-item28" contentEditable="true">
              <p>Harumi Kobayashi</p>
              <p>Wardiere Inc. / CEO</p>
              <p>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                Phone: 123-456-7890
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                Email: hello@reallygreatsite.com
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp28;
