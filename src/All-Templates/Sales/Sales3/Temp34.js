import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft,faEnvelope, faPhone, faMapMarkerAlt, faCalendarAlt,faTools,faFileAlt,faBriefcase,faGraduationCap ,faTrophy} from '@fortawesome/free-solid-svg-icons';
import './temp34.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
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

const Temp34 = () => {
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
    const element = document.querySelector('.resume34');
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

      <div className="resume34">
      <div className="header34">
  <div className="name34"  contentEditable="true">Your Name</div>
  <div className="job-title34"  contentEditable="true">Sales Representative</div>

  <fieldset>
    <label>
      <img
        src={imageSrc}
        alt="Profile"
        onClick={handleImageClick}
        className="profile-image34"
        style={{ cursor: 'pointer' }}
      />
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </label>

    <div className="contact34"  contentEditable="true">
      <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(30, 144, 255)' }} /> your.email@example.com
    </div>
    <div className="contact34"  contentEditable="true">
      <FontAwesomeIcon icon={faPhone} style={{ color: 'rgb(30, 144, 255)' }} /> +1 234 567 8901
    </div>
    <div className="contact34"  contentEditable="true">
      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'rgb(30, 144, 255)' }} /> City, Country
    </div>
  </fieldset>
</div>

      <div className="main34">
        <section className="summary34">
          <h2 className='tittle34'>   <FontAwesomeIcon icon={faFileAlt} />Summary</h2>
          <p  contentEditable="true">
            A dedicated and results-driven Sales Representative with 5+ years of experience in achieving sales targets
            and exceeding customer expectations. Proven track record of building and maintaining client relationships
            while driving revenue growth.
          </p>
        </section>

        <section className="experience34">
          <h2 className='tittle34 '> <FontAwesomeIcon icon={faBriefcase} />Experience</h2>
          <div className="experience-item34">
            <div className="experience-header34">
              <h3  contentEditable="true" >Senior Sales Representative</h3>
              <div className="experience-details34"  contentEditable="true">
                <FontAwesomeIcon icon={faCalendarAlt} /> Jan 2018 - Present
              </div>
            </div>
            <div className="experience-company34"  contentEditable="true">
              Company Name, City, Country
            </div>
            <ul  contentEditable="true">
              <li>Developed and executed strategic sales plans to achieve company goals.</li>
              <li>Managed key accounts and maintained strong relationships with clients.</li>
              <li>Consistently exceeded sales targets by 20% year-over-year.</li>
            </ul>
          </div>

        </section>

        <section className="skills34">
          <h2  className='tittle34 '>  <FontAwesomeIcon icon={faTools} />Skills</h2>
          <ul  contentEditable="true">
            <li>Negotiation</li>
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Customer Relationship Management (CRM)</li>
            <li>Prospecting and Lead Generation</li>
          </ul>
        </section>

        <section className="education34">
          <h2  className='tittle34 '><FontAwesomeIcon icon={faGraduationCap} />Education</h2>
          <div className="education-item34"  contentEditable="true">
            <h3>Bachelor of Business Administration</h3>
            <div className="education-details34">University Name, Graduation Year</div>
          </div>
        </section>

        <section className="achievements34" >
          <h2  className='tittle34'><FontAwesomeIcon icon={faTrophy} />Achievements</h2>
          <ul contentEditable="true">
            <li>Received Salesperson of the Year Award in 2022.</li>
            <li>Achieved highest quarterly sales growth in company history.</li>
          </ul>
        </section>
      </div>
    </div>

    </>
  );
};

export default Temp34;
