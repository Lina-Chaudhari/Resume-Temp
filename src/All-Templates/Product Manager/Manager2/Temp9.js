import React from 'react';
import "./temp9.css";
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

class Temp9 extends React.Component {
  state = {
    selectedImage: profileImage,
    ' --Headcolor': 'rgb(19, 56, 56)', 
    colors: ['#133838', '#154360', '#17202A ', '#27AE60', '#5B2C6F', '#0E6655 ']
  };

  setTheme = (color) => {
    document.documentElement.style.setProperty( '--Headcolor', color);
    this.setState({ '--Headcolor': color });
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
    const element = document.querySelector('.resume9');
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
    
        <div className="resume9">
          <header className='header9'>
            <div className="profile9">
            <img
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
              <div className="details">
                <h1 contentEditable="true"  style={{color:"white"}}>John Doe</h1>
                <p contentEditable="true"  style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Manager</p>
              </div>
            </div>
          </header>
      
          <section className="content">
            <div className="left">
          
              <section className="summary">
                <h2  className='hed2'>Summary</h2>
                <p contentEditable="true">
                  Experienced manager with a demonstrated history of working in various industries.
                  Skilled in leadership, team-building, and strategic planning.
                  Strong professional with a Master's degree in Business Administration.
                </p>
              </section>

              <section className="experience">
                <h2  className='hed2'>Experience</h2>
                <div className="job">
                  <h3 contentEditable="true">Senior Manager</h3>
                  <p className="company" contentEditable="true">ABC Company</p>
                  <p className="date" contentEditable="true">June 2015 - Present</p>
                  <ul contentEditable="true" className='ul'>
                    <li>Led a team of 50+ employees in achieving departmental goals.</li>
                    <li>Implemented cost-saving measures resulting in 20% reduction in expenses.</li>
                    <li>Developed and executed strategic plans to improve operational efficiency.</li>
                  </ul>
                </div>
            
                <div className="job">
                  <h3 contentEditable="true">Manager</h3>
                  <p className="company" contentEditable="true">XYZ Corporation</p>
                  <p className="date" contentEditable="true">January 2010 - May 2015</p>
                  <ul contentEditable="true" className='ul'>
                    <li>Managed cross-functional teams to deliver projects on time and within budget.</li>
                    <li>Streamlined processes resulting in a 30% increase in productivity.</li>
                  </ul>
                </div>
              </section>
          
            </div>
        
            <div className="right">
            <section className="contact">
                <h2 className='hed2'>Contact Information</h2>
                <ul className='ul'>
                  <li contentEditable="true" >Email: john.doe@example.com</li>
                  <li contentEditable="true" >Phone: +1234567890</li>
                  <li contentEditable="true" >LinkedIn: linkedin.com/in/johndoe</li>
                </ul>
              </section>
              <section className="education">
                <h2  className='hed2'>Education</h2>
                <div className="degree">
                  <h3 contentEditable="true">Master of Business Administration (MBA)</h3>
                  <p contentEditable="true" className="university">University of Management</p>
                  <p contentEditable="true" className="date">Graduated: May 2010</p>
                </div>
            
                <div className="degree">
                  <h3 contentEditable="true">Bachelor of Science in Business Administration</h3>
                  <p contentEditable="true" className="university">State University</p>
                  <p contentEditable="true" className="date">Graduated: May 2008</p>
                </div>
              </section>
              <section className="certifications">
                <h2  className='hed2'>Certifications</h2>
                <ul className='ul'>
                  <li contentEditable="true">Project Management Professional (PMP)</li>
                  <li contentEditable="true" >Certified ScrumMaster (CSM)</li>
                </ul>
              </section>

              <section className="activities">
                <h2  className='hed2'>Activities</h2>
                <ul className='ul'>
                  <li contentEditable="true">Member, Local Chamber of Commerce</li>
                  <li contentEditable="true">Volunteer, Habitat for Humanity</li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Temp9;
