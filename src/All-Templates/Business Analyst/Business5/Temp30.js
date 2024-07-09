import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import selectedImage from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './temp30.css';

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

const Temp30 = () => {
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
    const element = document.querySelector('.resume-container30'); // Update the selector to match your target element
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

      <div className="resume-container30">
        <div className="resume30">
          <div className="left-column30">
            <section className="achievements30" id='section30'>
              <h2 className='h230'>Achievements</h2>
              <ul>
                <div contentEditable="true">
                  <li>Implemented Predictive Analytics Model</li>
                  <li>Data Governance Framework Leader</li>
                  <li>Operational Efficiency Improvement</li>
                  <li>Staff Training Program Initiator</li>
                </div>
              </ul>
            </section>
            <section className="skills30"  id='section30'>
              <h2 className='h230'>Skills</h2>
              <ul>
                <div contentEditable="true">
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>Python</li>
                  <li>SQL</li>
                </div>
              </ul>
            </section>
            <section className="courses30"  id='section30'>
              <h2 className='h230'>Courses</h2>
              <ul>
                <div contentEditable="true">
                  <li>Certified Analytics Professional</li>
                  <li>Tableau 10 A-Z: Hands-On Tableau Training For Data Science</li>
                </div>
              </ul>
            </section>
            <section className="passions30"  id='section30'>
              <h2 className='h230'>Passions</h2>
              <ul>
                <div contentEditable="true">
                  <li>Healthcare Informatics</li>
                  <li>Data-Driven Storytelling</li>
                  <li>Continuous Learning</li>
                </div>
              </ul>
            </section>
          </div>
          <div className="right-column30">
            <header className='header30'>
              <h1 contentEditable="true">Luke Adams</h1>
              <h2 contentEditable="true">Business Intelligence Analyst | Data Integration & Visualization</h2>
              <div className="profile-container30">
                <div className="contact-info30">
                  <div  contentEditable="true" className='con'><i className="fas fa-phone"></i> +1 (234) 555-1234</div>
                  <div contentEditable="true" className='con'><i className="fas fa-envelope"></i> help@enhancv.com</div>
                  <div contentEditable="true" className='con'><i className="fas fa-map-marker-alt"></i> Columbus, Ohio</div>
                  <div contentEditable="true"  className='con'><i className="fab fa-linkedin"></i> linkedin.com</div>
                </div>
                <div className="img30">
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
              </div>
            </header>
            <section className="summary30"  id='section30'>
              <h2 className='h230'>Summary</h2>
              <p contentEditable="true">With over 5 years of experience in business intelligence and data analysis within the healthcare industry, I've developed a profound skillset in data visualization and predictive modeling, contributing significantly to business growth. My career achievements include notable improvements in operational efficiency, data accuracy, and forecasting precision.</p>
            </section>
            <section className="experience30"  id='section30'>
              <h2 className='h230'>Experience</h2>
              <div className="job30" contentEditable="true">
                <h3>Senior Business Intelligence Analyst</h3>
                <p><strong>Cardinal Health</strong></p>
                <p>06/2018 - Present</p>
                <ul contentEditable="true">
                  <li>Implemented advanced predictive models using statistical methods.</li>
                  <li>Managed cross-functional teams for comprehensive service and product performance dashboards.</li>
                  <li>Developed a robust data governance framework.</li>
                </ul>
              </div>
              <div className="job30" contentEditable="true">
                <h3>Business Intelligence Analyst</h3>
                <p><strong>Johnson & Johnson</strong></p>
                <p>08/2015 - 05/2018</p>
                <ul contentEditable="true">
                  <li>Coordinated migration of legacy data systems to modern data lakes.</li>
                  <li>Designed and maintained interactive Tableau dashboards.</li>
                  <li>Enhanced forecasting accuracy through advanced analytical models using Python.</li>
                </ul>
              </div>
            </section>
            <section className="education30"  id='section30'>
              <h2 className='h230'>Education</h2>
              <div className="degree30" contentEditable="true">
                <h3>Master of Science in Data Science</h3>
                <p>The Ohio State University</p>
                <p>01/2013 - 01/2015</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp30;
