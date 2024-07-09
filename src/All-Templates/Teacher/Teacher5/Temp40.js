import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './temp40.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

const Temp40 = () => {
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
    const element = document.querySelector('.App40');
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

      <div className="App40">
        <div className="header40">
          <img src={imageSrc} alt="Profile" className="profile-img40" onClick={handleImageClick} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />
          <div className="header-info40">
            <h1 contentEditable="true">CLAUDIA ALVES</h1>
            <h2 contentEditable="true">ENGLISH TEACHER</h2>
            <div className="contact-info40" contentEditable="true">
              <FontAwesomeIcon icon={faPhone} className="icon" /> +1234-5678-9012
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 387 Clinton Portland LA
            </div>
          </div>
        </div>
        <div className="about-me40">
          <h3>ABOUT ME</h3>
          <p contentEditable="true">
            Enthusiastic and creative English Teacher with 7+ years of classroom
            teaching experience. A dedicated teacher who is easily adaptable to
            different learning styles.
          </p>
        </div>
        <div className="main-content40">
          <div className="left-side40">
            <div className="education40">
              <h3>EDUCATION</h3>
              <p contentEditable="true">University of Virginia<br />English Literature<br />Class of 2011</p>
              <p contentEditable="true">South Florida University<br />M.A. in Education<br />Class of 2016</p>
            </div>
            <div className="experience40">
              <h3>WORK EXPERIENCE</h3>
              <p contentEditable="true">2011-2012 King School<br />Substitute Teacher</p>
              <p contentEditable="true">
                Substituted for English and History classes. Provided after school
                tutoring for students in need of special attention. Taught English and
                History summer school classes for 3rd and 4th grade students who had
                fallen behind. Maintained high level of student discipline and resolved
                classroom conflicts.
              </p>
              <p contentEditable="true">2011-2012 Magnolia School<br />Second Grade Teacher</p>
              <p contentEditable="true">
                Co-designed a lesson plan for a class of twenty-one diverse students.
                Provided a variety of hands-on learning experiences that included the
                use of modern teaching methods. Created a classroom environment that
                was supportive.
              </p>
            </div>
          </div>
          <div className="right-side40">
            <div className="expertise40">
              <h3>EXPERTISE</h3>
              <ul contentEditable="true">
                <li>Special Education</li>
                <li>Experiential Learning</li>
                <li>Test Proctoring</li>
                <li>Class Cape Knowledge</li>
                <li>Presentation</li>
                <li>Child Psychology</li>
                <li>Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp40;
