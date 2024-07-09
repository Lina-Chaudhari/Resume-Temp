import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './temp39.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhone, faEnvelope, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 
import styled from 'styled-components';
import profileImage from '../../Images/profile.png';

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

const StyledButtonBack = styled.button`
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

const Temp39 = () => {
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
    const element = document.querySelector('.app39');
    const opt = {
      margin: 5,
      filename: 'Teacher-resume.pdf',
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
      <StyledButtonBack onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Back
      </StyledButtonBack>

      <div className="app39">
        <header className="header39">
          <h1 contentEditable="true">ADDIE EVANS</h1>
          <h4 contentEditable="true">Human Resource Manager</h4>
        </header>
        <div className="content39">
          <div className="left39">
            <section className="summary39">
              <h2>PROFESSIONAL SUMMARY</h2>
              <p contentEditable="true">
                Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.
              </p>
            </section>
            <section className="work-history39">
              <h2>WORK HISTORY</h2>
              <div>
                <h3 contentEditable="true">Human Resources Manager</h3>
                <h6 contentEditable="true">Baltimore County Public Schools - Baltimore, MD</h6>
                <ul contentEditable="true">
                  <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                  <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                  <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</li>
                  <li>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met.</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="right39">
            <section className="contact39">
              <h2>CONTACT</h2>
              <p contentEditable="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', color: '#DAA520' }} />
                Address: Baltimore, MD 21206
              </p>
              <p contentEditable="true">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', color: '#DAA520' }} />
                Phone: 555 555 5555
              </p>
              <p contentEditable="true">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: '#DAA520' }} />
                Email: example@example.com
              </p>
            </section>
            <section className="skills39">
              <h2>SKILLS</h2>
              <ul contentEditable="true">
                <li><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px', color: '#DAA520' }} /> Detail oriented</li>
                <li><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px', color: '#DAA520' }} /> Well-versed in Texas employment law</li>
                <li><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px', color: '#DAA520' }} /> Excellent written and oral communication skills</li>
                <li><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px', color: '#DAA520' }} /> Develops positive workplace relationships</li>
              </ul>
            </section>
            <section className="education39">
              <h2>EDUCATION</h2>
              <div>
                <h6 contentEditable="true">Master of Education, Human Development, 06/2022</h6>
                <h6 contentEditable="true">University of Maryland - Baltimore County - Baltimore, MD</h6>
              </div>
            </section>
            <section className="certifications39">
              <h2>CERTIFICATIONS</h2>
              <ul contentEditable="true">
                <li>Maryland Teaching Certification - 2019</li>
                <li>Professional Certificate I - 2019</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp39;
