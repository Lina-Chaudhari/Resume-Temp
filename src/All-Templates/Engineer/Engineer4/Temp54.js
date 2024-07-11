import React, { useState, useRef } from 'react';
import './temp54.css';
import pic from '../../Images/profile.png';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faCalendar, faGraduationCap, faBriefcase, faBookOpen } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

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

const Temp54 = () => {
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
    const element = document.querySelector('.resume54');
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

      <div className="resume54">
        <header className="resume-header54">
          <div className="profile-pic" onClick={handleImageClick}>
            <img src={imageSrc} alt="Profile" className="profile-image" />
          </div>
          <div className="contact-info54">
            <h1>Vishal Omloti</h1>
            <p><b>Date of birth:</b> 09/11/1999</p>
            <p><b>Address:</b> Dream city 99, Bengaluru 99999</p>
            <p><b>Phone number:</b> +999 999 911</p>
            <p><b>Email address:</b> hello@kickresume.com</p>
          </div>
        </header>
        <section className="section54">
          <h4><FontAwesomeIcon icon={faBriefcase} /> Career Objective</h4>
          <p>A Structural Engineering candidate (M. Tech) with one year on site experience...</p>
        </section>
        <section className="section54">
          <h4><FontAwesomeIcon icon={faGraduationCap} /> Education</h4>
          <div className="timeline54">
            <div className="entry54">
              <div className="date-location54">
                <span>09/2015 – 01/2018</span>
                <span>Bengaluru</span>
              </div>
              <div className="details54">
                <h3>Structural Engineering (M. Tech.)</h3>
                <p>Ramaiah Institute of Technology</p>
                <p>Cumulative Grade points: 8.71</p>
              </div>
            </div>
            <div className="entry54">
              <div className="date-location54">
                <span>2010 – 2014</span>
                <span>Kalaburagi</span>
              </div>
              <div className="details54">
                <h3>Civil Engineering (Bachelor of Engineering)</h3>
                <p>HKE's Poojya Doddappa Appa College of Engineering</p>
                <p>Cumulative Grade Points: 7.82</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section54">
          <h4><FontAwesomeIcon icon={faBookOpen} /> Work Experience</h4>
          <div className="timeline54">
            <div className="entry54">
              <div className="date-location54">
                <span>09/2014 – 08/2015</span>
                <span>Bengaluru</span>
              </div>
              <div className="details54">
                <h3> Site Engineer</h3>
                <p>Shodhan Estates</p>
                <ul>
                  <li>Played a major role in Block work calculation...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section54">
          <h4><FontAwesomeIcon icon={faBookOpen} /> PG Project</h4>
          <p>Influence of Red mud and GGBS on Geopolymerisation in construction industry...</p>
        </section>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default Temp54;
