import React from 'react';
import './temp45.css';
import html2pdf from 'html2pdf.js';
import profileImage from '../../Images/profile.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const ProfileImage = styled.img`
  cursor: pointer;
  width: 100px;  /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  border-radius: 50%; /* Makes the image circular */
`;

class Temp45 extends React.Component {
  state = {
    selectedImage: profileImage
  };

  handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.setState({ selectedImage: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  downloadPDF = () => {
    const element = document.querySelector('.resume-container45');
    const opt = {
      margin: 5,
      filename: 'Account-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { selectedImage } = this.state;
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

        <div className="resume-container45">
          <header className="header45">
            <ProfileImage src={selectedImage} alt="Profile" onClick={this.handleImageClick} />
            <input
              type="file"
              id="imageInput"
              style={{ display: 'none' }}
              onChange={this.handleImageChange}
            />
            <h1 contentEditable="true">Addalee Langston</h1>
            <p contentEditable="true" className="contact-info45">
              <FontAwesomeIcon icon={faEnvelope} /> alangston@email.com | 
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7890 | 
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Richmond, VA | 
              <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            </p>
            <p contentEditable="true" className="summary45">Certified Public Accountant (CPA) with 7+ years of experience in public accounting and financial auditing...</p>
          </header>

          <section className="experience45" id='section45'>
            <h4>WORK EXPERIENCE</h4>
            <div className="job45" contentEditable="true">
              <h3>Northrop Grumman - Accountant</h3>
              <p>Feb 2019 - current | Minneapolis, MN</p>
              <ul>
                <li>Managed government and private foundation grants totaling over $18M annually</li>
                <li>Worked closely with program management on budgets, programs, and financial reporting</li>
                <li>Owned monthly analysis of GL reconciliation, and performed adjustments as needed</li>
                <li>Led development and analysis of agency-wide budget to reach 27% more members YoY</li>
                <li>Streamlined preparation and review of the GL through automation, saving 23 hours monthly</li>
              </ul>
            </div>
            {/* Add other job experiences similarly */}
          </section>

          <section className="education45" id='section45'>
            <h4>EDUCATION</h4>
            <p contentEditable="true">Saint Cloud State University - Master of Business Administration, Accounting</p>
            <p contentEditable="true">August 2014 - May 2016 | St. Cloud, MN</p>
            <p contentEditable="true">Capella University - Bachelor of Arts, Accounting</p>
            <p contentEditable="true">August 2010 - May 2014 | Minneapolis, MN</p>
          </section>

          <section className="skills45" id='section45'>
            <h4>SKILLS</h4>
            <p contentEditable="true">GAAP; GL accounting; QuickBooks; Excel; Auditing; Tax accounting; Expense reporting</p>
          </section>

          <section className="certifications45" id='section45'>
            <h4>CERTIFICATIONS</h4>
            <p contentEditable="true">Certified Public Accountant (CPA)</p>
          </section>
        </div>
      </>
    );
  }
}

export default Temp45;
