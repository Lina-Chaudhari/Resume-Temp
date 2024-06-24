import React from 'react';
import html2pdf from 'html2pdf.js';
import '../TempSeven/tempseven.css';
import styled from 'styled-components';
import profileImages from '../TempSeven/pic.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faArrowLeft,faEnvelope,faLaptop} from '@fortawesome/free-solid-svg-icons';

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

class Tempseven extends React. Component {
    state = {
        selectedImage: profileImages
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
        const element = document.querySelector('.main-sectionseven7');
        const opt = {
          margin: 10, 
            filename:     'CA-Account-resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
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

      <section className="main-sectionseven7">
        <div className="left-part7">
        <div className="photo-container7">
  <img
    src={selectedImage}
    alt="Description of the image"
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
    </div>
    <div className="contact-container7">
      <h2 className="title7">Contact Me</h2>
      <div className="contact-list7">
        <div className="icon-container7">
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '4px', fontSize: '15px', color: 'white' }} />
        </div>
        <div className="contact-text7" contentEditable="true">
          <p style={{color:"white"}}> hello0011@gmail.com</p>
        </div>
      </div>
      <div className="contact-lis7t">
        <div className="icon-container7">
        <FontAwesomeIcon icon={faLaptop} style={{ marginRight: '4px', fontSize: '15px', color: 'white' }} />
        </div>
        <div className="contact-text7"  contentEditable="true">
          <p style={{color:"white"}}>www.resumesite.com</p>
        </div>
      </div>
      <div className="contact-list7">
        <div className="icon-container7">
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '4px', fontSize: '15px', color: 'white' }} />
        </div>
        <div className="contact-text7" contentEditable="true">
          <p style={{color:"white"}}>@hellolink</p>
        </div>
      </div>
    </div>
    <div className="education-container7">
      <h2 className="title7">Education</h2>
      <div className="course7">
       
        <h5 className="college-name7" contentEditable="true">University/College Details</h5>
        <p className="education-date7" contentEditable="true" style={{color:"white"}}>2006 - 2008</p>
      </div>
      <div className="course7">
        <h5 className="college-name7" contentEditable="true">University/College Details</h5>
        <p className="education-date7" contentEditable="true" style={{color:"white"}}>2006 - 2008</p>
      </div>
    </div>
    <div className="skills-container7">
      <h2 className="title7">Skills</h2>
      <div className="skill7">
        <ul>
        <li contentEditable="true">Team Management</li>
        <li contentEditable="true">Accounting</li>
        <li contentEditable="true">Reporting</li>
        <li contentEditable="true">Risk Analysis</li>
        <li contentEditable="true">Strategic Planning</li>
        <li contentEditable="true">Leadership</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="right-part7">
    <div className="banner7" >
      <h1 className="firstname7" contentEditable="true">Atharsh Anderson</h1>
      <h4 className="position7" contentEditable="true">Chartered Accountant (CA)</h4>
    </div>
    <div className="work-container7 ">
      <h2 className="title7 text-left7" style={{fontSize:"15px",fontFamily:"bload",color:"white",backgroundColor:"#002D62"}}>work experience</h2>
      <div className="work7">
        <div className="job-date7" contentEditable="true" >
          <h6 className="job7" >Job position here</h6>
          <p className="date7">2019 - 2022</p>
        </div>
        <h2 className="company-name7" contentEditable="true">Company Name l Location</h2>
        <p className="work-text7" contentEditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor,
          quis tempus arcu elementum. In elementum elit at dui tristique
          feugiat. Mauris convallis, mi at mattis malesuada, neque nulla
          volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus
          urna i
        </p>
      </div>
      <div className="work7">
        <div className="job-date7" contentEditable="true">
          <h6 className="job7" >Job position here</h6>
          <p className="date7">2019 - 2022</p>
        </div>
        <h2 className="company-name7" contentEditable="true">Company Name l Location</h2>
        <p className="work-text7" contentEditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor,
          quis tempus arcu elementum. In elementum elit at dui tristique
          feugiat. Mauris convallis, mi at mattis malesuada, neque nulla
          volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus
          urna i
        </p>
      </div>
      <div className="work7">
        <div className="job-date7" contentEditable="true">
          <h6 className="job7" >Job position here</h6>
          <p className="date7">2019 - 2022</p>
        </div>
        <h2 className="company-name7" contentEditable="true">Company Name l Location</h2>
        <p className="work-text7" contentEditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor,
          quis tempus arcu elementum. In elementum elit at dui tristique
          feugiat. Mauris convallis, mi at mattis malesuada, neque nulla
          volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus
          urna i
        </p>
      </div>
    </div>
    <div className="references-container7">
      <h2 className="title7 text-left7" style={{fontSize:"15px",fontFamily:"bload",color:"white",backgroundColor:"#002D62"}}>References</h2>
      <div className="references7">
        <div className="left-references7">
          <h4 className="name7" contentEditable="true">Name Surname</h4>
          <p className="company-name7" contentEditable="true">Job position, Company Name</p>
          <div className="phone7">
            <div className="phone-text7" >
              <p contentEditable="true">Phone:</p>
              <p contentEditable="true">Email:</p>
            </div>
            <div className="phone-number7">
              <p contentEditable="true">123-456-7890</p>
              <p contentEditable="true">hello0011@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>             
    
    </>
    )
  }
}

export default Tempseven


