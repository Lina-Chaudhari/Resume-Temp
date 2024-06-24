import React from 'react';
import "./temp12.css";
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import profileImage from '../Temp12/profile.png';
import ColorItem from "../Temp10/color-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft ,faGraduationCap, faCode, faBriefcase , faEnvelope, faMapMarkerAlt, faPhoneAlt,faAlignLeft} from '@fortawesome/free-solid-svg-icons';

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

class Temp12 extends React.Component {
  state = {
    selectedImage: profileImage,
    hrtagColor: '#fff',
    colors: ['#333', '#154360', '#D68910', '#641E16 ', '#5B2C6F', '#0E6655']
  };

  setTheme = (color) => {
    this.setState({ hrtagColor: color });
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
    const element = document.querySelector('.resume12');
    const opt = {
      margin: 10, 
      filename: 'Production-resume.pdf',
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

        <h1 className='heading1'>Select Color:</h1>
        <div className='color-switcher'>
          <div className='color-list'>
            {colors.map((color, idx) =>
              <ColorItem key={idx} setColor={this.setTheme} color={color} />
            )}
          </div>
        </div>

        <div className="resume12">
          <header className='header12'>
            <div className="left12">
              <h1 contentEditable="true">Your Name</h1>
              <h2 contentEditable="true">Production Manager</h2>
            </div>
            <div className="center">
              <img
                className="profile"
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
            </div>
            <div className="right12">
              <p contentEditable="true">Email: you@example.com</p>
              <p contentEditable="true">Phone: +1234567890</p>
              <p contentEditable="true">
                LinkedIn: <a href="#">Your LinkedIn Profile</a>
              </p>
            </div>
          </header>

          <section className="section summary" style={{ backgroundColor: hrtagColor }}>
            <div className="card">
              <h2><FontAwesomeIcon icon={faAlignLeft} style={{ marginRight: '10px', color: 'black' }} />Summary</h2>
              <p contentEditable="true">Experienced Product Manager with a proven track record of successfully launching
                 and managing innovative products from concept to market. Skilled in product strategy,
                  roadmap development, and cross-functional collaboration. Strong analytical background
                   with a focus on customer insights and market trends. Effective communicator known for 
                   leading teams to deliver impactful solutions that drive business growth and customer satisfaction.</p>
            </div>
          </section>

          <section className="section experience" >
            <div>
              <h2><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px', color: 'black' }} />Experience</h2>
                <div class="experience-item ">
                <h3 contentEditable="true">Product Manager</h3>
                <p contentEditable="true" class="date">July 2018 - Present</p>
                <p contentEditable="true" class="company">Tech Solutions Inc., San Francisco, CA</p>
                <p contentEditable="true" class="description">
                    Led product development efforts for a suite of enterprise software solutions. Collaborated with cross-functional teams to define product strategy and roadmap, resulting in a 30% increase in user engagement.
                </p>
                </div>
                <div class="experience-item">
                    <h3 contentEditable="true">Associate Product Manager</h3>
                    <p contentEditable="true" class="date">January 2016 - June 2018</p>
                    <p contentEditable="true"  class="company">Startup Innovations Ltd., Palo Alto, CA</p>
                    <p contentEditable="true" class="description">
                        Contributed to the launch of a new mobile app from concept to release, overseeing market research, user testing, and feature prioritization. Achieved 100,000+ downloads within the first six months.
                    </p>
                </div>
            </div>
          </section>

          <section className="section education">
            <div>
              <h2><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '10px', color: 'black' }} />Education</h2>
              <div className="education-item">
                <h3 contentEditable="true">Bachelor of Science in Business Administration</h3>
                <p contentEditable="true" className="date">September 2012 - June 2016</p>
                <p contentEditable="true" className="description">University of Example, New York, NY</p>
              </div>
              <div className="education-item">
                <h3 contentEditable="true">Master of Business Administration (MBA)</h3>
                <p contentEditable="true" className="date">September 2016 - May 2018</p>
                <p contentEditable="true" className="description">Example University, Los Angeles, CA</p>
              </div>
            </div>
          </section>
          <section className='skills'>
          <div class="skills">
                <h2 > <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', color: 'black' }} />Skills</h2>
                <ul class="skills-list">
                <li contentEditable="true">Product Management</li>
                <li contentEditable="true">Market Analysis</li>
                <li contentEditable="true">Agile Methodologies</li>
                <li contentEditable="true">User Experience (UX) Design</li>
                <li contentEditable="true">Data Analysis</li>
                <li contentEditable="true">Project Management</li>
                <li contentEditable="true">Cross-functional Collaboration</li>
                <li contentEditable="true">Leadership</li>
                <li contentEditable="true">Communication Skills</li>
                </ul>
  </div>
          </section>
        </div>
      </>
    );
  }
}

export default Temp12;
