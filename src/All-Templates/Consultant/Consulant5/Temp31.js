import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import pic from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt,faBriefcase,faTools,faGraduationCap,faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import './Temp31.css';

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

const Temp31 = () => {
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
    const element = document.querySelector('.resume31');
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

      <div className="resume31">
        <header className="header31">
          <h1 contentEditable="true">Martin Lane</h1>
          <h2 contentEditable="true">Business Development Consultant</h2>
          <div className="contact-info31">
            <p contentEditable="true"><FontAwesomeIcon icon={faEnvelope} /> martin@novoresume.com <span><FontAwesomeIcon icon={faPhone} /> 0032 231 512</span></p>
            <p contentEditable="true"><FontAwesomeIcon icon={faMapMarkerAlt} /> Chicago, IL</p>
            <p contentEditable="true"><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/martin.lane</p>
            <p contentEditable="true"><FontAwesomeIcon icon={faMedium} /> medium.com/@martin.lane</p>
          </div>
        </header>
        <div className="main-content31">
          <section className="professional-experience31">
            <h3><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '5px', fontSize: '20px', color: 'black' }} />Professional Experience</h3>
            <div className="job31" contentEditable="true">
              <h4>Business Development Consultant</h4>
              <h5>JC2.0 Technologies <FontAwesomeIcon icon={faExternalLinkAlt} /></h5>
              <p>04/2014 - Present | Chicago, IL</p>
              <ul>
                <li>Monitor and analyze current market conditions to understand the latest market trends and innovations...</li>
                <li>Redrafted marketing blueprint, resulting in optimized overall brand perception and increased revenue growth by 200%...</li>
                <li>Initiate strategies for small, medium and large companies to drive productive resource allocation, and boost profitability...</li>
              </ul>
            </div>
            <div className="job31"contentEditable="true">
              <h4>Consultant</h4>
              <h5>J W Project <FontAwesomeIcon icon={faExternalLinkAlt} /></h5>
              <p>02/2009 - 03/2014</p>
              <ul>
                <li>Evaluated diverse organizational systems to identify workflow, communication, and resource utilization...</li>
                <li>Managed revenue models, process flows, operations support, & customer engagement strategies to ensure project success...</li>
                <li>Created detailed roadmaps of action items & project goals; provided reporting & analysis across budgeting & planning...</li>
              </ul>
            </div>
            <div className="job31" contentEditable="true">
              <h4>Business Consultant</h4>
              <h5>OGL Group <FontAwesomeIcon icon={faExternalLinkAlt} /></h5>
              <p>07/2005 - 01/2009</p>
              <ul>
                <li>Strategized on consumer and B2B marketing collateral for the company, driving a 30% increase in project revenue...</li>
                <li>Revamped staff incentive program, optimizing peak performance and reducing turnover...</li>
              </ul>
            </div>
            <section className="certifications31">
              <h3><FontAwesomeIcon icon={faMapMarkerAlt}  style={{ marginRight: '5px', fontSize: '20px', color: 'black' }}/>Certifications</h3>
              <ul contentEditable="true">
                <li>Business Analysis Professional Certification (2019) <FontAwesomeIcon icon={faExternalLinkAlt} /> - Valid through 12/2023</li>
                <li>Business Planning and Consultancy Certification (2018) <FontAwesomeIcon icon={faExternalLinkAlt} /> - Valid through 12/2022</li>
                <li>Successful Negotiation: Essential Strategies and Skills (2012) <FontAwesomeIcon icon={faExternalLinkAlt} /> - Online course offered by University Of Michigan</li>
              </ul>
            </section>
          </section>
          
          <div className="side-content31">
            <section className="skills31">
              <h3> <FontAwesomeIcon icon={faTools}  style={{ marginRight: '5px', fontSize: '20px', color: 'black' }}/>Skills & Competencies</h3>
              <ul contentEditable="true">
                <li>Sales Forecasts</li>
                <li>Business Intelligence</li>
                <li>SWOT Analysis</li>
                <li>Tracking Industry Trends</li>
                <li>HubSpot CRM</li>
                <li>Salesforce Sales Cloud</li>
                <li>Six Sigma</li>
                <li>Inbound & Outbound Marketing</li>
                <li>Cold Calling</li>
                <li>Customer Segmentation</li>
                <li>SEO & SEM</li>
                <li>Google Suite (Ads & Analytics)</li>
              </ul>
            </section>
            <section className="awards31">
              <h3><FontAwesomeIcon icon={faGraduationCap}  style={{ marginRight: '5px', fontSize: '20px', color: 'black' }}/>Awards</h3>
              <ul contentEditable="true">
                <li>Business Catalyst Awardee (2019) <FontAwesomeIcon icon={faExternalLinkAlt} /> - Boston Consulting Group</li>
                <li>Ranked Among Top 25 Consultants in the State of Illinois (2018) <FontAwesomeIcon icon={faExternalLinkAlt} /> - M&J Consulting Magazine</li>
              </ul>
            </section>
            <section className="languages31">
              <h3><FontAwesomeIcon icon={faTrophy}  style={{ marginRight: '5px', fontSize: '20px', color: 'black' }} />Languages</h3>
              <ul contentEditable="true">
                <li>English</li>
                <li>Arabic</li>
                <li>German</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp31;
