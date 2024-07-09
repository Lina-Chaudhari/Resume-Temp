import React from 'react';
import "./temp43.css";
import html2pdf from 'html2pdf.js';
import profileImage from "../../Images/profile.png";
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

class Temp43 extends React.Component {
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
    const element = document.querySelector('.resume-container43');
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
        <div className="resume-container43">
          <div className="sidebar43">
            <img
              src={selectedImage}
              className="profile-pic43"
              alt="Profile"
              onClick={this.handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={this.handleImageChange}
              style={{ display: 'none' }}
            />
            <div className="contact-info43" contentEditable="true">
              <p><i className="fa fa-phone"></i> +123-456-7890</p>
              <p><i className="fa fa-envelope"></i> hello@reallygreatsite.com</p>
              <p><i className="fa fa-globe"></i> www.reallygreatsite.com</p>
              <p><i className="fa fa-map-marker"></i> 123 Anywhere St., Any City</p>
            </div>
            <div className="skills43">
              <h3>Skills</h3>
              <ul contentEditable="true">
                <li>Bookkeeping</li>
                <li>Tax Filing</li>
                <li>Data Entry</li>
                <li>Data Analysis</li>
                <li>Cost Reduction Management</li>
                <li>Public Accounting</li>
                <li>Business Budgeting</li>
                <li>Business Assessments</li>
              </ul>
            </div>
            <div className="languages43">
              <h3>Languages</h3>
              <ul contentEditable="true">
                <li>English</li>
                <li>Filipino</li>
                <li>Spanish</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
          <div className="main-content43">
            <h1 contentEditable="true">Harper Russo</h1>
            <h2 contentEditable="true">Certified Public Accountant</h2>
            <section>
              <h3>Professional Experience</h3>
              <p contentEditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </section>
            <section>
              <h3>Work Experience</h3>
              <div contentEditable="true">
                <h4>Keishton & Partners | Senior Accountant</h4>
                <p>June 2028 - Present</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                </ul>
              </div>
              <div contentEditable="true">
                <h4>Timmerman Industries | Junior Accountant</h4>
                <p>February 2028 - February 2029</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                </ul>
              </div>
              <div contentEditable="true">
                <h4>Ingosde Company | Junior Accountant</h4>
                <p>January 2027 - January 2028</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
                </ul>
              </div>
            </section>
            <section>
              <h3>Education</h3>
              <div contentEditable="true">
                <h4>Really Great University, 2023-2027</h4>
                <p>Bachelor of Science in Accountancy</p>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Temp43;
