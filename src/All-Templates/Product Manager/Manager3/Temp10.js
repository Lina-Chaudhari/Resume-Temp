import React from 'react';
import "./temp10.css";
import html2pdf from 'html2pdf.js';
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

class Temp10 extends React.Component {
  state = {
    hrtagColor: '#333',
    colors: ['#333', '#154360', '#D68910', '#641E16 ', '#5B2C6F', '#0E6655']
  };

  setTheme = (color) => {
    this.setState({ hrtagColor: color });
  };

  downloadPDF = () => {
    const element = document.querySelector('.resume10');
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
    const { hrtagColor, colors } = this.state;
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

        <div className="resume10" style={{ '--hrtag-color': hrtagColor }}>
          <header className='header10'>
            <div className="header-left10">
              <h1 contentEditable="true">Your Name</h1>
              <p contentEditable="true">Product Manager</p>
            </div>
            <div className="header-right10">
              <p contentEditable="true">Email: example@example.com</p>
              <p contentEditable="true">Phone: +1234567890</p>
            </div>
          </header>
          <hr className='hrtag' style={{ backgroundColor: hrtagColor }}></hr>
          <section className="summary">
            <h2>Summary</h2>
            <p contentEditable="true">Innovative product manager with a proven track record of successfully 
              leading cross-functional teams in the conception, development, and launch of high-impact products. 
              Experienced in agile methodologies, market analysis, and user-centered design principles. Strong 
              communicator and strategic thinker dedicated to delivering products that meet both customer needs
               and business objectives. Seeking to leverage my skills in a dynamic organization poised for growth and innovation.</p>
          </section>
          <hr className='hrtag' style={{ backgroundColor: hrtagColor }}></hr>
          <section className="experience">
            <h2>Experience</h2>
            <div className="job">
              <h3 contentEditable="true">Product Manager</h3>
              <p contentEditable="true">ABC Tech | March 2020 - Present</p>
              <ul>
                <li contentEditable="true">
                Led product development lifecycle from concept to launch for [product/service].
                </li>
                <li contentEditable="true">
                Collaborated with engineering, marketing, and sales teams to define product roadmap.
                </li>
                <li contentEditable="true">Conducted market research and gathered user feedback to drive product iterations.</li>
              </ul>
            </div>
          </section>
          <hr className='hrtag' style={{ backgroundColor: hrtagColor }}></hr>
          <section className="education">
            <h2>Education</h2>
            <div className="degree">
              <h3 contentEditable="true">Master of Business Administration (MBA)</h3>
              <p contentEditable="true">University of Business | Graduated: May 2019</p>
              <ul>
                <li contentEditable="true">Focused on strategic management and entrepreneurship.</li>
                <li contentEditable="true">Thesis: "Impact of Digital Transformation on Consumer Behavior".</li>
              </ul>
            </div>
          </section>
          <hr className='hrtag' style={{ backgroundColor: hrtagColor }}></hr>
          <section className="skills">
            <h2>Skills</h2>
            <ul>
              <li contentEditable="true">Product Strategy</li>
              <li contentEditable="true">Project Management</li>
              <li contentEditable="true">Cross-functional Team Leadership</li>
              <li contentEditable="true">Organizational Skills</li>
              <li contentEditable="true">User Experience (UX) Design</li>
              <li contentEditable="true">Market Analysis</li>
              <li contentEditable="true">Data Analysis</li>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default Temp10;
