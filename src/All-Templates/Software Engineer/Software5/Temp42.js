import React, { useState, useRef } from 'react';
import './temp42.css';
import pic from '../../Images/profile.png';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

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

const Temp42 = () => {
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
    const element = document.querySelector('.App42');
    const opt = {
      margin: 5,
      filename: 'Software Engineer resume.pdf',
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

      <div className="App42">
        {/* Header component */}
        <div className="header42">
          <div className="header-left42">
            <img className='profile-pic42'
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
            />
          </div>
          <div className="header-details42">
            <h1 contentEditable="true">Michael Levinson</h1>
            <h2 contentEditable="true">Senior Software Engineer</h2>
            <p contentEditable="true">
              Seasoned, forward-looking Software Engineer with 14+ years' background
              in creating and executing innovative software solutions to enhance
              business productivity...
            </p>
          </div>
        </div>
        <div className="contact-info42">
            <p contentEditable="true">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; michael@novoresume.com
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; 32131241241
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              &nbsp; Denver, CO
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faLinkedin} />
              &nbsp; linkedin.com/in/michael.levinson
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faGithub} />
              &nbsp; github.com/michael.levinson
            </p>
            <p contentEditable="true">
              <FontAwesomeIcon icon={faStackOverflow} />
              &nbsp; stackoverflow.com/michael.levinson
            </p>
          </div>
        <div className="expertise42">
          <h3>AREAS OF EXPERTISE</h3>
          <div className="expertise-tags42" contentEditable="true">
            <span>Project Management</span>
            <span>Proficient Troubleshooting</span>
            <span>Scrum &amp; Agile Methodologies</span>
            <span>Software Development Lifecycle</span>
            <span>Team Leadership &amp; Supervision</span>
            <span>Web Application Design &amp; Development</span>
            <span>Technical Process Improvement</span>
          </div>
        </div>
        {/* Work Experience component */}
        <div className="work-experience42">
          <h3>WORK EXPERIENCE</h3>
          <div className="job42" contentEditable="true">
            <h4>Senior Software Engineer</h4>
            <h5>
              Radiant Spark Technology, Inc. <span>Denver, CO</span>
            </h5>
            <p className="period42">03/2014 - Present</p>
            <ul contentEditable="true">
              <li>Supervised and lead a team of 5 junior software engineers...</li>
              <li>
                Demonstrated expertise in translating the client’s specific needs...
              </li>
              <li>
                Proficiently troubleshoot simple and complex technological issues...
              </li>
              <li>
                Enhanced the application’s features to effectively fix the bugs...
              </li>
              <li>Utilized software engineering expertise to develop products...</li>
            </ul>
          </div>
          <div className="job42" contentEditable="true">
            <h4>Software Engineer / Team Lead</h4>
            <h5>
              TechNet Fragile Technologies <span>Denver, CO</span>
            </h5>
            <p className="period42">02/2011 - 02/2014</p>
            <ul contentEditable="true">
              <li>
                Provided prompt solutions and proactive troubleshooting support...
              </li>
              <li>Documented all supported systems and applications...</li>
              <li>Determined areas for improvements by periodically monitoring...</li>
              <li>
                Established and utilized strategic methodologies to efficiently
                analyze...
              </li>
              <li>Led the onshore and offshore application development team...</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp42;

