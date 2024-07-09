import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt, faGlobe, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import './temp35.css';
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

const Temp35 = () => {
  const [imageSrc, setImageSrc] = useState(selectedImage);
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
    const element = document.querySelector('.resume-container35');
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

      <div className="resume-container35">
        <div className="profile-container35">
          <img className="profile-image35" src={imageSrc} alt="Profile" onClick={handleImageClick} />
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <div className="header35">
            <h1 contentEditable="true">Donna Stroupe</h1>
            <h2 contentEditable="true">Sales Representative</h2>
          </div>
        </div>
        <div className="content-container35">
          <div className="sidebar35">
            <div className="contact-info35">
              <div className="contact-item35" contentEditable="true">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon35" />
                <span>hello@reallygreatsite.com</span>
              </div>
              <div className="contact-item35" contentEditable="true">
                <FontAwesomeIcon icon={faPhone} className="contact-icon35" />
                <span>+123-456-7890</span>
              </div>
              <div className="contact-item35" contentEditable="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon35" />
                <span>123 Anywhere St., Any City</span>
              </div>
              <div className="contact-item35" contentEditable="true">
                <FontAwesomeIcon icon={faGlobe} className="contact-icon35" />
                <span>reallygreatsite.com</span>
              </div>
            </div>
            <div className="section35 about-me35">
              <h3 className="section-title35">About Me</h3>
              <p contentEditable="true">
                I am a Sales Representative who initializes and manages relationships
                with customers. They serve as their point of contact and lead from
                initial outreach through the making of the final purchase by them or
                someone in their household.
              </p>
            </div>
            <div className="section35 skills35">
              <h3 className="section-title35">Skills</h3>
              <ul className="list" contentEditable="true">
                <li className="list-item">Fast-moving Consumer Goods</li>
                <li className="list-item">Packaged Goods</li>
                <li className="list-item">Sales Operations</li>
                <li className="list-item">Experience in B2B</li>
              </ul>
            </div>
            <div className="section35 education35">
              <h3 className="section-title35">Education</h3>
              <ul className="list35" contentEditable="true">
                <li className="list-item35">
                  <strong>BA Sales and Commerce</strong> <br />
                  Wardale University <br />
                  <FontAwesomeIcon icon={faCalendarAlt} />  2011 - 2015
                </li>
              </ul>
            </div>

          </div>

          <div className="main-content35">
            <div className="section35 work-experience35">
              <h3 className="section-title35">Work Experience</h3>
              <ul className="list35" contentEditable="true">
                <li className="list-item35">
                  <strong>Timmerman Industries</strong> <br />
                  Consumer Goods Seller <br />
                  <FontAwesomeIcon icon={faCalendarAlt} /> Aug 2018 - Present
                  <ul contentEditable="true">
                    <li>Offer consumer goods packages to corporate and clients</li>
                    <li>Meet with clients every quarter to update or renew services</li>
                    <li>Train junior sales agents</li>
                  </ul>
                </li>
                <li className="list-item35" contentEditable="true">
                  <strong>Timmerman Industries</strong> <br />
                  FMCG Sales Agent <br />
                  <FontAwesomeIcon icon={faCalendarAlt} />  Jul 2015 - Aug 2018
                  <ul contentEditable="true">
                    <li>Visited corporate client offices to offer latest products</li>
                    <li>Built relationships with clients to maintain sales goals and create new opportunities</li>
                  </ul>
                </li>
                <li className="list-item35" contentEditable="true">
                  <strong>Sales Agent</strong> <br />
                  <FontAwesomeIcon icon={faCalendarAlt} />  Aug 2014 - Jul 2015
                  <ul contentEditable="true">
                    <li>Visited corporate client offices to offer latest products</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="section35 references35">
              <h3 className="section-title35">References</h3>
              <ul className="list35" contentEditable="true">
                <li className="list-item35">
                  <strong>Estelle Darcy</strong> <br />
                  Wardale Inc. / CEO <br />
                  Phone: +123-456-7890 <br />
                  Email: hello@reallygreatsite.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp35;
