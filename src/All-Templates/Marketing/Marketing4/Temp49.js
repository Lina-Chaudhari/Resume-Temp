import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhone, faEnvelope, faMapMarkerAlt, faBriefcase, faGraduationCap, faLanguage, faTrophy, faIndustry, faCogs } from '@fortawesome/free-solid-svg-icons';
import './temp49.css';
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

const Temp49 = () => {
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
    const element = document.querySelector('.resume-container49');
    const opt = {
      margin: 5,
      filename: 'Marketing-resume.pdf',
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

      <div className="resume-container49" id="resume49">
        <div className="left-column49">
          <h1  contentEditable="true">CARLA JENSEN</h1>
          <div className="contact-info49">
            <p contentEditable="true"><FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} /> Phone: +1-708-943-7078</p>
            <p  contentEditable="true"><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /> Email: deniselaroc@gmail.com</p>
            <p  contentEditable="true"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} /> Location: Los Angeles, CA</p>
          </div>
          <h2 className="section-title49"><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px' }} /> EXPERIENCE</h2>
          <div className="experience-item49"  contentEditable="true">
            <h3>Head, Content Marketing</h3>
            <p>EdWorks, Los Angeles, CA</p>
            <p><i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>2015 - Present</p>
            <ul>
              <li>Recognized among the Kapost 50 B2B Content Marketing Rock Stars (2015) for interactive content</li>
              <li>Manage over 1,000 daily user-generated content including deals, coupons, blog posting, & more</li>
            </ul>
          </div>
          <div className="experience-item49"  contentEditable="true">
            <h3>Content Marketer</h3>
            <p>Dawn Unlimited, San Francisco, CA</p>
            <p><i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>2014 - 2015</p>
            <ul>
              <li>Photographed for the 42weeks campaign, continuously reaching 70,000 views since the campaign finished</li>
              <li>Defined editorial strategy for 2014 and 2015</li>
              <li>Joined the company as #1 Employee</li>
            </ul>
          </div>
          <div className="experience-item49"  contentEditable="true">
            <h3>Senior Specialist, Content Marketing</h3>
            <p>Stretch Ltd., Los Angeles, CA</p>
            <p><i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>2012 - 2014</p>
            <ul>
              <li>Killer content marketing strategy increased reach by 50%, engagement at 2%, and 40% reduction in time to buy</li>
              <li>Increased inbound organic search traffic for company websites by 70%</li>
            </ul>
          </div>
          <h2 className="section-title49"><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '10px' }} /> EDUCATION</h2>
          <div className="education-item49"  contentEditable="true">
            <h3>B.A. | English</h3>
            <p>Central College (LA University)</p>
            <p><i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>2009 - 2013</p>
            <p><i class="fa-solid fa-bookmark" style={{ marginRight: '10px' }}></i>GPA: 3.9 / 4.0</p>
          </div>
          <div className="education-item49"  contentEditable="true">
            <h3>MBA in Sports Management, MBA in International Business</h3>
            <p>CA Business School</p>
            <p><i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>2006 - 2009</p>
            <p><i class="fa-solid fa-bookmark" style={{ marginRight: '10px' }}></i>GPA: 3.7 / 4.0</p>
          </div>
        </div>
        <div className="right-column49">
          <img src={imageSrc} alt="Profile" onClick={handleImageClick} style={{ cursor: 'pointer' }} className="profile-image49" />
          <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <h2 className="section-title49" style={{color:"white"}}><FontAwesomeIcon icon={faLanguage} style={{ marginRight: '10px' }} /> LANGUAGES</h2>
          <ul className="skills-list49"  contentEditable="true">
            <li className="skill-item49">English: Proficient</li>
            <li className="skill-item49">Danish: Proficient</li>
            <li className="skill-item49">Swedish: Proficient</li>
            <li className="skill-item49">German: Proficient</li>
            <li className="skill-item49">Cantonese: Advanced</li>
          </ul>
          <h2 className="section-title49"  style={{color:"white"}}><FontAwesomeIcon icon={faTrophy} style={{ marginRight: '10px' }} /> ACHIEVEMENTS</h2>
          <ul className="achievements-list49"  contentEditable="true">
            <li className="achievement-item49">Traveller: Travelled in 30 countries and on 3 continents</li>
            <li className="achievement-item49">Master of Languages: Speaks 5 languages and lived in 5 countries</li>
          </ul>
          <h2 className="section-title49"  style={{color:"white"}}><FontAwesomeIcon icon={faIndustry} style={{ marginRight: '10px' }} /> INDUSTRY EXPERTISE</h2>
          <ul className="skills-list49"  contentEditable="true">
            <li className="skill-item49">Digital Marketing</li>
            <li className="skill-item49">Account Management</li>
            <li className="skill-item49">Sales</li>
          </ul>
          <h2 className="section-title49"  style={{color:"white"}}><FontAwesomeIcon icon={faCogs} style={{ marginRight: '10px' }} /> SKILLS</h2>
          <ul className="skills-list49"  contentEditable="true">
            <li className="skill-item49">CMS: Wordpress, Hubspot, Joomla</li>
            <li className="skill-item49">Email Marketing: Mailchimp, Drip</li>
            <li className="skill-item49">Social Media Management: Hootsuite, Buffer</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Temp49;
