import React from 'react';
import "./temp26.css";
import html2pdf from 'html2pdf.js';
import profileImage from "../../Images/profile.png";
import styled from 'styled-components';
import ColorItem from "../../color-item";
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

class Temp26 extends React.Component {
  state = {
    selectedImage: profileImage,
    '--Themcolor': '#00296b', 
    colors: ['#000000', '#000080', '#9e4636', '#666979', '#da70d6', '#ffa500 ']
  };

  setTheme = (color) => {
    document.documentElement.style.setProperty('--Themcolor', color);
    this.setState({ '--Themcolor': color });
  };

 

  downloadPDF = () => {
    const element = document.querySelector('.resume-box8');
    const opt = {
      margin: 10, 
      filename: 'Business Analyst.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { colors, backgroundColor } = this.state;
    return (
      <>
        <StyledButton onClick={this.downloadPDF}>
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
          Download
        </StyledButton>
        <StyledButtonNext>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
          Back
        </StyledButtonNext>

        <h1 className='heading1'>Select Color:</h1>
        <div className='color-switcher'>
          <div className='color-list'>
            {colors.map((color, idx) =>
              <ColorItem key={idx} setColor={this.setTheme} color={color} />
            )}
          </div>
        </div>

        <div className="resume-container26">
          <div className="header26" style={{ backgroundColor }}>
            <h1 className="name26" contentEditable="true">Blake Thornbrock</h1>
            <h2 className="title26" contentEditable="true">Business Analyst</h2>
          </div>
          <div className="section26 education26">
            <h3 className="section-title26">Education</h3>
            <p contentEditable="true">B.S. Business</p>
            <p contentEditable="true">Boston University</p>
            <p contentEditable="true">September 2010 - April 2014</p>
            <p contentEditable="true">Boston, MA</p>
          </div>
          <div className="section26 skills26">
            <h3 className="section-title26">Skills</h3>
            <ul contentEditable="true">
              <li>SQL</li>
              <li>Excel/Google Sheets</li>
              <li>Tableau</li>
              <li>Google Analytics</li>
              <li>Leadership Experience</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="section26 work-experience26">
            <h3 className="section-title26">Work Experience</h3>
            <div contentEditable="true">
              <h4 className="job-title26">Business Analyst</h4>
              <p className="job-company26">Lancer Insurance Company</p>
              <p className="job-date26">May 2018 - current / Boston, MA</p>
              <ul className="job-description26">
                <li>Increased revenue by $16M through analysis of data surrounding customer behaviors, vendor relationships, stakeholder goals, and workflows.</li>
                <li>Discovered an additional $3M in savings after compiling data and identifying dead industry trends.</li>
                <li>Participated in product development planning, providing key insights based on predictive modeling, which allowed PMs to circumvent a $50K legal fine.</li>
              </ul>
            </div>
            <div contentEditable="true">
              <h4 className="job-title26">Business Analyst</h4>
              <p className="job-company26">ThreeBridge Solutions</p>
              <p className="job-date26">August 2016 - May 2018 / Boston, MA</p>
              <ul className="job-description26">
                <li>Traveled 3 of 5 days to work with clients, observing business processes, interviewing staff, and documenting practices.</li>
                <li>Conducted research, analyzed business operations, and problem-solved operating inefficiencies, saving companies a combined 800 man hours a month.</li>
                <li>Worked with stakeholders and clients to model and document goals, communicating transparently to meet 98% of deadlines.</li>
              </ul>
            </div>
          </div>
          <div className="section26 contact26" style={{ backgroundColor }}>
            <h3 className="section-title26" style={{color:"white"}}>Contact</h3>
            <div className="contact-info26">
              <div className="contact-item26" contentEditable="true">
                <i className="fas fa-envelope"></i>
                <span>blake.thorn@email.com</span>
              </div>
              <div className="contact-item26" contentEditable="true">
                <i className="fas fa-phone-alt"></i>
                <span>(123) 456-7890</span>
              </div>
              <div className="contact-item26" contentEditable="true">
                <i className="fas fa-map-marker-alt"></i>
                <span>Boston, MA</span>
              </div>
              <div className="contact-item26" contentEditable="true">
                <i className="fab fa-linkedin"></i>
                <span><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp26;
