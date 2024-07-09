import React, { useState, useRef } from 'react';
import './Temp41.css';
import pic from '../../Images/profile.png';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

const Temp41 = () => {
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
    const element = document.querySelector('.resume-container41');
    const opt = {
      margin: 10,
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

      <div className="App41 resume-container41">
        <div className="header41">
          <h1 contentEditable="true">GUSTAVO ZANETTI</h1>
          <h2 contentEditable="true">Entry-level Software Engineer</h2>
          <div className="contact-info41">
            <p><i className="fa fa-phone"></i> +1-316-555-5555</p>
            <p><i className="fa fa-envelope"></i> help@enhancv.com</p>
            <p><i className="fa fa-map-marker"></i> Wichita, KS</p>
          </div>
        </div>
        <div className="main-content41">
          <div className="left-column41">
            <div className="summary41">
              <h3 className="h341">Summary</h3>
              <p contentEditable="true">
                Certified Software Engineer with 2 years of experience in developing features for Android, iOS and Web applications for educational platforms. Helped ABC company expand its business operations to five new countries by developing over 35 features for its language learning application using Java, Kotlin, Android and iOS SDK. Swift and Javascript. This effort increased their annual revenue to new customers to six platforms and earned $3M in monthly revenue. I am skilled in testing, troubleshooting, debugging, and working cross-functionally. Currently undergoing training for CIW Web Development Professional certification.
              </p>
            </div>
            <div className="experience41">
              <h3 className="h341">Experience</h3>
              <div className="job41">
                <h4 contentEditable="true">Software Engineer</h4>
                <p contentEditable="true" className="company41">BeConnected <span className="date41">01/2020 - 01/2023</span> Wichita, KS</p>
                <ul contentEditable="true">
                  <li>A Kansas-based provider of software development and technical support services to companies in the travel and lodging industry.</li>
                  <li>Increased the NPS score of our signature product app B by expanding the customer analytics and reporting functions of the platform.</li>
                  <li>Reduced CRR to 2.8% by updating current technical documentation and organizing a series of educational sessions among team members.</li>
                  <li>Boosted the traffic of "bio traveling websites by 30% by developing search and filtering endpoints, handling information from 7 airlines and lodging websites.</li>
                  <li>Enhanced the travel clients' rate presenting a streamlined way of handling payment and point earns at BeTernity 2022.</li>
                </ul>
              </div>
              <div className="job41">
                <h4 contentEditable="true">Software Engineer Intern</h4>
                <p contentEditable="true" className="company41">Renoad <span className="date41">05/2018 - 06/2019</span> Cleveland, OH</p>
                <ul contentEditable="true">
                  <li>Renoad is an information technology company which develops and provides E-Commerce Solutions.</li>
                  <li>Employed Python and Django to contribute to 2 of the company's currently active projects.</li>
                  <li>Debugged a long pending Auto login issue in GUI for regression platform on day 1.</li>
                </ul>
              </div>
            </div>
            <div className="education41">
              <h3 className="h341">Education</h3>
              <div className="degree41" contentEditable="true">
                <h4>M.Sc. in Computer Science</h4>
                <p className="school41">Kansas State University <span className="date41">08/2018 - 04/2020</span></p>
                <p>Coursework in Algorithms, Computer security, Artificial intelligence, Natural language processing.</p>
              </div>
              <div className="degree41" contentEditable="true">
                <h4>B.Sc. in Computer Science</h4>
                <p className="school41">California Institute of Technology - Caltech <span className="date41">07/2015 - 05/2018</span></p>
                <p>Successfully completed courses in mathematics, accounting and statistics.</p>
              </div>
            </div>
          </div>
          <div className="right-column41">
            <div className="skills41">
              <h3 className="h341">Skills</h3>
              <ul contentEditable="true">
                <li>Java</li>
                <li>C#</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Django</li>
                <li>Azure / ML</li>
                <li>Kotlin</li>
                <li>Swift</li>
                <li>Android</li>
                <li>iOS SDK</li>
              </ul>
            </div>
            <div className="languages41">
              <h3 className="h341">Languages</h3>
              <p contentEditable="true">English</p>
            </div>
            <div className="projects41">
              <h3 className="h341">Projects</h3>
              <div className="project41" contentEditable="true">
                <h4>The Chef</h4>
                <p className="date41">01/2019 - 03/2020</p>
                <p>
                  The Chef is a mobile application which is developed in Android Studio in Java. It is a recipe handbook, which shows method of preparation and ingredients. Awarded 9.5/10 score and a reference letter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp41;
