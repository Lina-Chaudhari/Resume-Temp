import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import pic from "../Temp17/pic.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './temp18.css'; // Import CSS file
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';

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
  margin-left: 20px;
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

const Temp18 = () => {
  const [imageSrc, setImageSrc] = useState(pic); // Initialize with default image
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
    const element = document.querySelector('.App18');
    const opt = {
      margin: 5, 
      filename: 'Consultant-resume.pdf',
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

      <div className='body18'>
      <div className="App18">
      <div className="left-column18">
        <header className="header18">
          <div className="header-content18" >
            <h1 style={{color:"white"}} contentEditable="true">John Doe</h1>
            <p style={{color:"white"}} contentEditable="true">SAP Consultant</p>
            <address>
            <p contentEditable="true"><span className="icon-container"><FaMapMarkerAlt className="icon" /></span> 1234 E. Main St. Asheville, NC 28806</p>
              <p contentEditable="true"><span className="icon-container"><FaPhone className="icon" /></span> 828-485-1274</p>
              <p contentEditable="true"><span className="icon-container"><MdEmail className="icon" /></span> Trialsinbox@hotmail.com</p>
              <p contentEditable="true"><span className="icon-container"><AiFillLinkedin className="icon" /></span> linkedin.com/hsmith</p>
            </address>
          </div>
        </header>

        <section className="skills18">
          <h2>Skills</h2>
          <ul contentEditable="true">
            <li contentEditable="true">SAP ERP - Finance</li>
            <li contentEditable="true">SAP S/4HANA</li>
            <li contentEditable="true">Data Warehouse</li>
            <li contentEditable="true">SAP BusinessObjects</li>
            <li contentEditable="true">SAP Technology</li>
            <li contentEditable="true">SAP Cloud Solutions</li>
            <li contentEditable="true">Test Plans</li>
            <li contentEditable="true">SQL</li>
          </ul>
        </section>
        <section className="skills18">
          <h2>Languages</h2>
          <ul contentEditable="true">
            <li contentEditable="true">English</li>
            <li contentEditable="true">French</li>
            <li contentEditable="true">Russian</li>
            <li contentEditable="true">Hindi</li>
          </ul>
        </section>
      </div>

      <div className="right-column18">
        <section className="professional-summary18">
          <h2>Professional Summary</h2>
          <p contentEditable="true">Experienced SAP Consultant with over 10 years of experience in managing and implementing SAP projects. Adept at analyzing business requirements and translating them into SAP solutions. Excellent problem-solving skills and a proven track record of delivering projects on time and within budget.</p>
        </section>

        <section className="experience18">
          <h2>Experience</h2>
          <div className="job18">
            <h3 contentEditable="true">SAP Consultant</h3>
            <p contentEditable="true">Abernathy System, Inc • Durham, NC</p>
            <p contentEditable="true">2017 - 2021</p>
            <ul>
            <li contentEditable="true">Lead SAP implementation projects for various clients, ensuring seamless integration and user adoption.</li>
            <li contentEditable="true">Conducted business process analysis and provided recommendations for improvements using SAP solutions.</li>
            <li contentEditable="true">Developed and delivered training programs for end-users to enhance their SAP skills.</li>
            <li contentEditable="true">Collaborated with cross-functional teams to ensure successful project delivery.</li>
            </ul>
          </div>
          <div className="job18">
            <h3 contentEditable="true">SAP Business Analyst</h3>
            <p contentEditable="true">Abernathy System, Inc • Durham, NC</p>
            <p contentEditable="true">2016 - 2017</p>
            <ul>
            <li contentEditable="true">Gathered and analyzed business requirements to design SAP solutions that meet client needs.</li>
            <li contentEditable="true">Created detailed project plans and timelines to ensure project milestones were met.</li>
            <li contentEditable="true">Provided ongoing support and troubleshooting for SAP systems post-implementation.</li>
            <li v>Facilitated workshops and training sessions for business users.</li>
            </ul>
          </div>
        </section>

        <section className="education18">
          <h2>Education</h2>
          <div className="school18">
            <h3 contentEditable="true">MBA in Information Technology</h3>
            <p contentEditable="true">North Central College • Naperville, IL</p>
            <p contentEditable="true">2014 - 2016</p>
          </div>
          <div className="school18">
            <h3 contentEditable="true">Bachelor of Science in Computer Science</h3>
            <p contentEditable="true">Northern Illinois University • Dekalb, IL</p>
            <p contentEditable="true">1996 - 1998</p>
          </div>
        </section>

        <section className="certifications18">
          <h2>Certifications</h2>
          <p contentEditable="true" style={{color:"#004085"}}>SAP Certified Application Associate - SAP S/4HANA</p>
          <p contentEditable="true">June 2016</p>
          <p  vstyle={{color:"#004085"}}>SAP Certified Application Specialist - SAP BusinessObjects</p>
          <p contentEditable="true">June 2016</p>

          <p contentEditable="true">These are my current SAP skills and certifications that demonstrate my expertise in various SAP modules and technologies.</p>
        </section>
      </div>
    </div>

      </div>
    </>
  );
};

export default Temp18;
