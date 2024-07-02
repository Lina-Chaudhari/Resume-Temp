import React from 'react';
import "./temp15.css";
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import profileImage from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faGraduationCap, faCode, faBriefcase, faEnvelope, faMapMarkerAlt, faPhoneAlt, faAlignLeft, faStar } from '@fortawesome/free-solid-svg-icons';

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

class Temp15 extends React.Component {
  state = {
    selectedImage: profileImage,
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
    const element = document.querySelector('.resume15');
    const opt = {
      margin: 10, 
      filename: 'Design-Engineering-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { selectedImage, hrtagColor, colors } = this.state;
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

       

        <div className="resume15">
          <div className="left15">
            <header className="header15">
            <img
                 className="profile-img"
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
              <div>
                <h1 contentEditable="true">John Doe</h1>
                <p  contentEditable="true">Design Engineering Professional</p>
              </div>
            </header>

            <section className="contact15 card15">
              <h2><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', marginRight: '10px' }} /> Contact </h2>
              <p  contentEditable="true"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '14px', marginRight: '5px' }} /> Email: john.doe@example.com</p>
              <p  contentEditable="true"><FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '14px', marginRight: '5px' }} /> Phone: (123) 456-7890</p>
              <p  contentEditable="true"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px', marginRight: '5px' }} /> LinkedIn: <a href="https://www.linkedin.com/in/johndoe">linkedin.com/in/johndoe</a></p>
            </section>

            <section className="skills15 card15">
              <h2><FontAwesomeIcon icon={faStar} style={{ fontSize: '20px', marginRight: '10px' }} /> Skills</h2>
              <ul>
                <li  contentEditable="true"><FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }}  /> Proficient in CAD software (SolidWorks, AutoCAD)</li>
                <li  contentEditable="true"><FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} /> Knowledgeable in Finite Element Analysis (FEA) and Design for Manufacturing (DFM)</li>
                <li  contentEditable="true"><FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} /> Strong understanding of materials science and mechanical engineering principles</li>
                <li  contentEditable="true"><FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} /> Excellent problem-solving and analytical skills</li>
                <li  contentEditable="true"><FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} /> Effective communication and teamwork abilities</li>
              </ul>
            </section>

            <section className="hobbies15 card15">
              <h2><FontAwesomeIcon icon={faAlignLeft} style={{ fontSize: '20px', marginRight: '10px' }} /> Hobbies</h2>
              <p  contentEditable="true"> Reading, Traveling, Photography</p>
            </section>
          </div>

          <div className="right15">
            <section className="education15 card15">
              <h2><FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '20px', marginRight: '10px' }} /> Education</h2>
              <div className="education-item15">
                <h3  contentEditable="true">Bachelor of Science in Mechanical Engineering</h3>
                <p  contentEditable="true">University of Engineering, Anytown, USA | Graduated May 2014</p>
                <p  contentEditable="true">Relevant Coursework: Thermodynamics, Fluid Mechanics, Machine Design</p>
              </div>
            </section>

            <section className="awards15 card15">
              <h2><FontAwesomeIcon icon={faStar} style={{ fontSize: '20px', marginRight: '10px' }} /> Awards</h2>
              <div className="awards-item15">
                <h3  contentEditable="true">Outstanding Engineering Achievement Award</h3>
                <p  contentEditable="true">ABC Engineering Inc., 2019</p>
                <p  contentEditable="true">Awarded for innovative design contributions and project leadership.</p>
              </div>
            </section>

            <section className="projects15 card15">
              <h2><FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '20px', marginRight: '10px' }} /> Projects</h2>
              <div className="projects-item15">
                <h3  contentEditable="true">Advanced Composite Structures Project</h3>
                <p  contentEditable="true">Lead Engineer, XYZ Design Solutions, 2017-2018</p>
                <p  contentEditable="true">Developed lightweight composite materials for aerospace applications.</p>
              </div>
            </section>

            <section className="experience15 card15">
              <h2><FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '20px', marginRight: '10px' }} /> Experience</h2>
              <div className="experience-item15">
                <h3  contentEditable="true">Senior Design Engineer</h3>
                <p  contentEditable="true">ABC Engineering Inc., Anytown, USA | March 2018 - Present</p>
                <p  contentEditable="true">Lead a team of engineers in designing and developing innovative products. Collaborated with cross-functional teams to ensure product feasibility and manufacturability.</p>
              </div>
              <div className="experience-item15">
                <h3  contentEditable="true">Design Engineer</h3>
                <p  contentEditable="true">XYZ Design Solutions, Somewhere City, USA | June 2014 - February 2018</p>
                <p  contentEditable="true">Designed mechanical components using CAD tools. Conducted simulations and tests to validate designs. Improved product efficiency by 20% through innovative design improvements.</p>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Temp15;
