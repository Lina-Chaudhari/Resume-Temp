import React, { useState, useRef } from 'react';
import './temp52.css';
import pic from '../../Images/profile.png';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


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

const Temp52 = () => {
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
    const element = document.querySelector('.resume-container52');
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

      <div className="resume-container52">
        <header className="header52">
          
        <div className="avatar52"> 
        <img className="avatar52"
          src={imageSrc} 
          alt="Resume_image" 
          onClick={handleImageClick} 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }}
        /></div>
          <div>
            <h1 className="name52" contentEditable="true">Vishal Omloti</h1>
            <div className="contact-details52">
              <div  contentEditable="true">Date of birth: 09/11/1999</div>
              <div  contentEditable="true">Address: Dream city 99, Bengaluru 99999</div>
              <div  contentEditable="true"><FaPhone /> +999 999 911</div>
              <div  contentEditable="true"><FaEnvelope /> hello@kickresume.com</div>
            </div>
          </div>
        </header>

        <section className="section52">
          <h2 className="section-header52">Carrier Objective</h2>
          <div className="section-content52"  contentEditable="true">
            <p>Highly motivated and detail-oriented Structural Engineering graduate with a Master’s degree (M.Tech) in Structural Engineering from [Your University]. Possesses over one year of hands-on experience in site engineering and project management. Demonstrated proficiency in structural analysis, design of RCC structures, and advanced finite element method analysis. Proven ability to collaborate with interdisciplinary teams, manage multiple projects, and deliver high-quality results under tight deadlines. Adept at using industry-standard software tools for design and analysis. Seeking to leverage academic background and professional experience to contribute effectively to a dynamic engineering team and drive innovative structural solutions.</p>
          </div>
        </section>

        <section className="section52">
          <h2 className="section-header52">Education</h2>
          <div className="section-content52">
            <div className="education-item52"  contentEditable="true">
              <strong>Structural Engineering (M. Tech.)</strong> - Ramaiah Institute of Technology
              <p>Cumulative Grade points: 8.71</p>
            </div>
            <div className="education-item52"  contentEditable="true">
              <strong>Civil Engineering (Bachelor of Engineering)</strong> - HKE's Poojya Doddappa Appa College of Engineering
              <p>Cumulative Grade Points: 7.82</p>
            </div>
          </div>
        </section>

        <section className="section52">
          <h2 className="section-header52">Work Experience</h2>
          <div className="section-content52">
            <div className="work-experience-item52"  contentEditable="true">
              <strong>Site Engineer</strong> - Shodhan Estates
              <ul  contentEditable="true">
                <li className="list-item52">Played a major role in Block work calculation and construction supervision</li>
                <li className="list-item52">Extensively involved in Inventory control, daily progress documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section52">
          <h2 className="section-header52">PG Project</h2>
          <div className="section-content52"  contentEditable="true">
            <p>Influence of Red mud and GGBS on Geopolymerisation in construction industry...</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Temp52;
