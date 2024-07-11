import React, { useState, useRef } from 'react';
import './temp55.css';
import pic from '../../Images/profile.png';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

const Temp55 = () => {
  const [imageSrc, setImageSrc] = useState(pic);
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
    const element = document.querySelector('.container55');
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

     
      <div className="container55">
      <div className="header55">
        <img 
          src={imageSrc} 
          alt="Resume_image" 
          onClick={handleImageClick} 
          className="profile-image55"
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        <div className="header-text55">
          <h1 className="name55" contentEditable="true">Daniel Micardo</h1>
          <h2 className="position55" contentEditable="true">Engineer </h2>
        </div>
      </div>
      <div className="contact55">
        <div contentEditable="true"><FaPhone /> +1234-5678-9012</div>
        <div contentEditable="true"><FaEnvelope /> danielmicardo@email.com</div>
        <div contentEditable="true"><FaMapMarkerAlt /> 3877 Clinton Street Portland</div>
      </div>
      <div className="section55">
        <h3 className="section-title55">Profile</h3>
        <p contentEditable="true">Enthusiastic and creative English Teacher with 7+ years of classroom teaching experience. A dedicated teacher who is easily adaptable to different learning styles.</p>
      </div>
      <div className="section55">
        <h3 className="section-title55">Experience</h3>
        <div className="experience-item55" contentEditable="true">
          <strong>2011-2012 King School</strong><br />
          Substitute Teacher<br />
          Taught English and History summer school classes for 3rd and 4th grade students who had fallen behind.
        </div>
        <div className="experience-item55" contentEditable="true">
          <strong>2011-2012 Magnolia School</strong><br />
          Second Grade Teacher<br />
          Provided a variety of hands-on learning experiences that included the use of modern teaching methods.
        </div>
      </div>
      <div className="section55">
        <h3 className="section-title55">Education</h3>
        <div className="education-item55" contentEditable="true">
          University of Virginia (2011) English B.A. in English Literature
        </div>
        <div className="education-item55" contentEditable="true">
          South Florida University (2016) English M.A. in Education
        </div>
      </div>
      <div className="section55">
        <h3 className="section-title55">Certification</h3>
        <div className="certification-item55" contentEditable="true">
          Professional Graduate Certificate in Teaching & Learning (PgCTL)<br />
          Diploma Education and Training (DET)
        </div>
      </div>
    </div>
    </>
  );
};

export default Temp55;
