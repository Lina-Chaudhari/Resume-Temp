import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhoneAlt, faEnvelope, faGlobe,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import selectedImage from "../../Images/profile.png";
import './temp36.css';

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

const Temp36 = () => {
  const [imageSrc, setImageSrc] = useState(selectedImage);
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
    const element = document.querySelector('.resume-container36');
    const opt = {
      margin: 5,
      filename: 'Sales-resume.pdf',
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
      
      <div className="resume-container36">
        <header className="header36">
          <img src={imageSrc} alt="Profile" className="profile-image36" onClick={handleImageClick} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <div className="contact-info36">
            <div className="name-job36">
              <h1 style={{color: "#091f5b"}} contentEditable="true">CLAUDIA ALVES</h1><br></br>
              <h2 style={{color: "#091f5b"}} contentEditable="true">Sales Representative | Business Development | Client Relations</h2>
            </div>
            <div className="contact-details36">
              <p contentEditable="true"><FontAwesomeIcon icon={faPhoneAlt} style={{color: "#091f5b"}}/> +123-456-7890</p>
              <p contentEditable="true"><FontAwesomeIcon icon={faEnvelope} style={{color: "#091f5b"}}/> hello@reallygreatsite.com</p>
              <p contentEditable="true"><FontAwesomeIcon icon={faGlobe} style={{color: "#091f5b"}}/> www.reallygreatsite.com</p>
              <p contentEditable="true"><FontAwesomeIcon icon={faMapMarkerAlt}style={{color: "#091f5b"}} />123 Anywhere St., Any City</p>
            </div>
          </div>
        </header>
        <section className="section36 summary36">
          <h3>Professional Summary</h3>
          <p contentEditable="true">With over 9 years of experience in sales, I bring a track record of strategic planning and client relations success. My expertise in CRM and market analysis, coupled with my ability to lead high-performing teams, drives significant business growth. Most notably, I led a team to achieve record-breaking sales figures, reflecting my dedication and skill in this field.</p>
        </section>
        <section className="section36 academic36">
          <h3>Academic Background</h3>
          <div className="education36" contentEditable="true">
            <h4>Master of Business Administration</h4>
            <p>Case Western Reserve University</p>
            <p>2014 - 2016</p>
            <p>3.7/4 GPA</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="education36" contentEditable="true">
            <h4>Bachelor of Science in Marketing</h4>
            <p>Case Western Reserve University</p>
            <p>2011 - 2014</p>
            <p>3.9/4 GPA</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </section>
        <section className="section36 career36">
          <h3>Career History</h3>
          <div className="job36" contentEditable="true">
            <h4>Senior Sales Executive</h4>
            <p>Arowwai Industries</p>
            <p>2018 to Present</p>
            <p>Spearheaded a new CRM implementation, improving customer tracking and sales efficiency by 25%.</p>
            <p>Led a team of 10 sales representatives, achieving a team sales record of $5M in Q4 2023.</p>
          </div>
          <div className="job36" contentEditable="true">
            <h4>Sales Representative</h4>
            <p>Arowwai Industries</p>
            <p>2015 to 2018</p>
            <p>Developed a sales training program, enhancing team's selling skills and product knowledge.</p>
            <p>Increased market share by 10% in the Midwest region through effective team leadership.</p>
          </div>
        </section>
        <div className="split-section36">
          <section className="section36 skills36">
            <h3>Core Skills</h3>
            <ul contentEditable="true">
              <li>Client Relationship Management</li>
              <li>Up to date knowledge of the market</li>
              <li>Strong communication skills</li>
              <li>Expert at building rapport with clients</li>
              <li>Time Management</li>
            </ul>
          </section>
          <section className="section36 references36">
            <h3>Work References</h3>
            <p contentEditable="true">Eleanor Fitzgerald</p>
            <p contentEditable="true">General Manager</p>
            <p contentEditable="true">Arowwai Industries</p>
            <p contentEditable="true">hello@reallygreatsite.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Temp36;
