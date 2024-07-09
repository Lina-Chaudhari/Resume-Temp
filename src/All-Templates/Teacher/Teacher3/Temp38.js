import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './temp38.css';
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

const Temp38 = () => {
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
    const element = document.querySelector('.resume38');
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
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div className="resume38">
        <div className="left-side38">
          <div className="profile-section38" onClick={handleImageClick}>
            <img src={imageSrc} alt="Profile" className="profile-pic38" />
          </div>
          <h1 contentEditable="true">Aaron Loeb</h1>
          <h2 contentEditable="true">Preschool Teacher</h2>
          <div className="section38 contact-section38">
            <h3>Reach Me At</h3>
            <ul>
              <li  contentEditable="true"><FontAwesomeIcon icon={faPhone} /> 123-456-7890</li>
              <li  contentEditable="true"><FontAwesomeIcon icon={faEnvelope} /> hello@reallygreatsite.com</li>
              <li  contentEditable="true"><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Anywhere Street, Any City, State, Country 12345</li>
            </ul>
          </div>
          <div className="section38">
            <h3>Career Goals</h3>
            <p  contentEditable="true">I create fun and valuable Mathematics, English, and Science lessons for children of all ages. I aim to teach preschool children in remote areas.</p>
          </div>
          <div className="section38">
            <h3>Main Interests</h3>
            <ul  contentEditable="true">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Entertaining Lesson Plans for Kids</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Art in Mathematics</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Literature</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Online Tutoring</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Digital Education</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Public Speaking</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Spoken Word Poetry</li>
            </ul>
          </div>
        </div>
        <div className="right-side38">
          <div className="section38">
            <h3>Academic History</h3>
            <h4  contentEditable="true">San Dias University</h4>
            <ul  contentEditable="true">
              <li>BA Education | Class Valedictorian</li>
              <li>President, Educators Circle</li>
              <li>Vice President, The SDU Official Writers Club</li>
              <li>Member, Mathematics Society</li>
              <li>Member, Science Club</li>
              <li>Member, Physics Org</li>
            </ul>
            <h4  contentEditable="true">Pedigon High School</h4>
            <ul  contentEditable="true">
              <li>Consistent Honor Student</li>
              <li>News Writer</li>
              <li>Head Writer, PHS Express</li>
              <li>President, The Pedigon High School Writing Committee</li>
              <li>Head Editor, The PHS Yearbook Committee</li>
              <li>Member, The PHS Debate Society</li>
            </ul>
          </div>
          <div className="section38">
            <h3>Career History</h3>
            <h4  contentEditable="true">Preschool Teacher</h4>
            <p  contentEditable="true">Kyobi Preschool | September 2019 - Present</p>
            <ul  contentEditable="true">
              <li>Serves as the head teacher for one section</li>
              <li>Teaches art, science, and English to preschool students</li>
              <li>Coordinates with parents for class field trips</li>
            </ul>
            <h4  contentEditable="true">Mathematics Teacher</h4>
            <p  contentEditable="true">San Dias Kids Preschool | 2018 - 2019</p>
            <ul  contentEditable="true">
              <li>Taught math to kids aged 3 to 6</li>
              <li>Came up with fun and informative math lessons for students</li>
              <li>Created new lesson plans for new math teachers</li>
            </ul>
          </div>
          <div className="section38">
            <h3>Achievements</h3>
            <ul  contentEditable="true">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Best Preschool Teacher (2020)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Most Promising Educator (2019)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Employee of the Year (2018)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Best Math Teacher (2017)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Best Faculty Member (2016)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp38;
