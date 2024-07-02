import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './Tech1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faUserTie, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import styled from 'styled-components';
import profileImage from "../../Images/profile.png";

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

const Temp2 = () => {
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
    const element = document.querySelector('.container2');
    const opt = {
      margin: 10,
      filename: 'Data-Scientist-resume.pdf',
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
      <StyledButtonBack>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Back
      </StyledButtonBack>

      <div className="container2">
        <div className="sidebar2">
          <img
            src={profileImage}
            alt="Resume_image"
            onClick={handleImageClick}
            className="profile-image2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <div className="section2">
            <h3 className="section-title2" style={{ color: "white" }}><FontAwesomeIcon icon={faUserTie} style={{ marginRight: '5px' }} /> Introduction</h3>
            <p className="text2">Hi there! I'm Chun Hei Kim and I love teaching all kinds of children...</p>
          </div>
          <div className="section2">
            <h3 className="section-title2" style={{ color: "white" }}><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '5px' }} /> Skills</h3>
            <p className="text2">English Literature<br />Grammar and Vocabulary...</p>
          </div>
          <div className="section2">
            <h3 className="section-title2" style={{ color: "white" }}><FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} /> Contact</h3>
            <p className="text2">123-456-7890<br />hello@reallygreatsite.com...</p>
          </div>
    
        </div>
        <div className="main-content2">
          <div className="header2">
            <h1 className="name2">CHUN HEI KIM</h1>
            <h2 className="title2">Elementary Teacher</h2>
            <hr className='hr2'></hr>
          </div>
          <div className="section2">
            <h3 className="section-title2">Education</h3>
            <p className="text2"><strong>Oulcaster University</strong><br />MA in Education & Development, Graduated 2010<br />Thesis: Innovative Teaching Methods...</p>
            <p className="text2"><strong>Kirmer State College</strong><br />BA in English Literature, Graduated 2007<br />Dean's List, GPA: 3.9...</p>
          </div>
          <div className="section2">
            <h3 className="section-title2">Experience</h3>
            <p className="text2"><strong>Elementary Teacher</strong><br />Sunny Rings Elementary School, 2011 - Present<br />Developed curriculum for...</p>
            <p className="text2"><strong>Substitute Teacher</strong><br />Gresdale Elementary School, 2010 - 2011<br />Ensured continuity in learning...</p>
          </div>
          <div className="section2">
            <h3 className="section-title2">Career Progression</h3>
            <p className="text2"><strong>Elementary Teacher</strong><br />Sunny Rings Elementary School...</p>
            <p className="text2"><strong>Substitute Teacher</strong><br />Gresdale Elementary School...</p>
          </div>
          <div className="section2">
            <h3 className="section-title2">Academic Background</h3>
            <p className="text2"><strong>Oulcaster University</strong><br />MA in Education & Development...</p>
            <p className="text2"><strong>Kirmer State College</strong><br />BA in English Literature...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp2;
