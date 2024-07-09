import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Temp32.css';
import selectedImage from "../../Images/profile.png";

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

const Temp32 = () => {
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
    const element = document.querySelector('.App32');
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

      <div className="App32">
        <div className="header32">
          <img src={imageSrc} alt="Profile" onClick={handleImageClick} style={{ cursor: 'pointer' }} className="profile-image32" />
          <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <div className="header-info32">
            <h1>Donna Stroupe</h1>
            <h2>Sales Representative</h2>
          </div>
        </div>
        <hr />
        <div className="main-content32">
          <div className="left-column32">
            <div className="contact-info32">
              <h3 className='h332'>Contact Information</h3>
              <p><i className="fas fa-envelope"></i> hello@reallygreatsite.com</p>
              <p><i className="fas fa-phone"></i> +123-456-7890</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Anywhere St, Any City</p>
              <p><i className="fas fa-globe"></i> reallygreatsite.com</p>
            </div>
            <hr />
            <div className="education32">
              <h3 className='h332'><i class="fa-solid fa-school"></i>Education</h3>
              <p>BA Sales and Commerce<br />Wardine University<br />2011 - 2015</p>
              <p>BA Sales and Commerce<br />Wardine University<br />2011 - 2015</p>
            </div>
            <hr />
            <div className="skills32">
              <h3 className='h332'><i class="fa-solid fa-star"></i>Skills</h3>
              <ul>
                <li>Fast-moving Consumer Goods</li>
                <li>Packaged Consumer Goods</li>
                <li>Sales</li>
                <li>Experience in account management</li>
              </ul>
            </div>
            <hr />
            <div className="languages32">
              <h3 className='h332'><i class="fa-solid fa-bars"></i>Languages</h3>
              <p>English<br />French</p>
            </div>
          </div>
          <div className="right-column32">
            <div className="about-me32">
              <h3 className='h332'><i class="fa-solid fa-user"></i>About Me</h3>
              <p>I am a Sales Representative who initiates and manages relationships with customers...</p>
            </div>
            <hr />
            <div className="work-experience32">
              <h3 className='h332'><i class="fa-solid fa-briefcase"></i>Work Experience</h3>
              <div className="job32">
                <p>Aug 2018 - present<br />Timerman Industries<br />Consumer Goods Seller</p>
                <ul>
                  <li>Offer consumer goods packages to corporate and clients</li>
                  <li>Meet with clients every quarter to update or renew services</li>
                  <li>Train junior sales agents</li>
                </ul>
              </div>
              <hr />
              <div className="job32">
                <p>Jul 2015 - Aug 2018<br />Timerman Industries<br />FMCG Sales Agent</p>
                <ul>
                  <li>Visited corporate client offices to offer latest products</li>
                  <li>Built relationships with clients to maintain sales goals and create new opportunities</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="references32">
              <h3 className='h332'><i class="fa-solid fa-comment"></i>References</h3>
              <div className="reference32">
                <p>Harper Russo<br />Wardine Inc. / CEO</p>
                <p>Phone: +123-456-7890<br />Email: info@reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp32;
