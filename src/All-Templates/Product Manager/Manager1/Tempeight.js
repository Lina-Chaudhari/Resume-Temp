import React from 'react';
import "./tempeight.css";
import html2pdf from 'html2pdf.js';
import profileImage from "../../Images/profile.png";
import styled from 'styled-components';
import ColorItem from "../../color-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

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

class Tempeight extends React.Component {
  state = {
    selectedImage: profileImage,
    '--Themcolor': 'rgb(14, 14, 71)', 
    colors: ['#000000', '#000080', '#9E4636', '#27AE60', '#5B2C6F', '#0E6655 ']
  };

  setTheme = (color) => {
    document.documentElement.style.setProperty('--Themcolor', color);
    this.setState({ '--Themcolor': color });
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
    const element = document.querySelector('.resume-box8');
    const opt = {
      margin: 10, 
      filename: 'Manager-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { selectedImage, colors, backgroundColor } = this.state;
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

        <div className="box-outer8" style={{ backgroundColor }}>
          <div className="resume-box8">
            <div id='them'>
              <div className="col-sm-6">
                <img className="profile"
                  src={selectedImage}
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
                <h1 className="name" contentEditable="true">
                  Your name
                </h1>
                <p contentEditable="true" style={{ color: "white", fontSize: "15px", margin: " 3px 0px 0px 20px", float: "left", textTransform: "uppercase" }}>Human Resource Manager</p>
              </div>
              <div className="col-sm-6">
                <div style={{ float: "right" }}>
                  <p className="contat8_p" contentEditable="true">
                    <FontAwesomeIcon icon={faHome} style={{ marginRight: '4px', fontSize: '20px', color: "white" }} />
                    &nbsp; 2132 London, United Kingdom
                  </p>
                  <p className="contat8_p" contentEditable="true">
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '4px', fontSize: '20px', color: "white" }} />
                    &nbsp; Phone +(91)1 234 54554
                  </p>
                  <p className="contat8_p" contentEditable="true">
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '4px', fontSize: '20px', color: "white" }} />
                    &nbsp; Email: demo@gmail.com
                  </p>
                </div>
              </div>
              <div className="clearfix" />
              <br />
              <hr />
              <h4 style={{ color: "white" }}>Profile</h4>
              <hr />
              <p contentEditable="true" style={{ color: "white", fontSize: "15px" }}>
                Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.
              </p>
            </div>
            <hr />
            <br />
            <div className="box8-1">
              <div className="content8">
                <h1 className="head8">Education</h1>
                <br />
                <ul id='ul'>
                  <li>
                    <p className="para8-1" contentEditable="true">
                      (2009 - 2010)
                      <br />
                      High School of CBSE
                    </p>
                    <p className="para-2" contentEditable="true">
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                  </li>
                  <li>
                    <p className="para8-1" contentEditable="true">
                      (2007-2008)
                      <br />
                      Masters in Human Resources
                    </p>
                    <p className="para8-2" contentEditable="true">
                      The University of Texas, Dallas
                      September 2007 - May 2011
                    </p>
                  </li>
                </ul>
                <h1 className="head8">Skills</h1>
                <ul  id='ul'>
                  <li contentEditable="true">
                    <p>Detail oriented</p>
                    <div id="progress" />
                  </li>
                  <li contentEditable="true">
                    <p>Well-versed in Texas employment law</p>
                    <div id="progress1" />
                  </li>
                  <li contentEditable="true">
                    <p>Excellent written and oral communication skills</p>
                    <div id="progress2" />
                  </li>
                  <li contentEditable="true">
                    <p>Develops positive workplace relationships</p>
                    <div id="progress3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box8-2">
              <div className="content8-2">
                <h1 className="head8">Professional Experience</h1>
                <br />
                <ul  id='ul'>
                  <li>
                    <p contentEditable="true" className="para8-1">Human Resources Manager (January 2016 - Present)</p>
                    <p contentEditable="true" className="para8-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </li>
                  <li>
                    <p className="para8-1" contentEditable="true">Human Resources Associate (March 2015 - January 2016)</p>
                    <p className="para8-2" contentEditable="true">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </li>
                  <li>
                    <p contentEditable="true" className="para8-1">UI Designer IN Lorem Ipsum (2018 - 2020)</p>
                    <p contentEditable="true" className="para8-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </>
    );
  }
}

export default Tempeight;
