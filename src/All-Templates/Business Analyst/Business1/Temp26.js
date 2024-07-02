import React from 'react';
import "./temp26.css";
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

class Temp26 extends React.Component {
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

        <div className="resume-container">
      <div className="header">
        <h1 className="name">Blake Thornbrock</h1>
        <h2 className="title">Business Analyst</h2>
      </div>
      <div className="section">
        <div className="contact">
          <h3 className="section-title">Contact</h3>
          <p>blake.thorn@email.com</p>
          <p>(123) 456-7890</p>
          <p>Boston, MA</p>
          <p><a href="#">LinkedIn</a></p>
        </div>
      </div>
      <div className="section">
        <div className="education">
          <h3 className="section-title">Education</h3>
          <p>B.S. Business</p>
          <p>Boston University</p>
          <p>September 2010 - April 2014</p>
          <p>Boston, MA</p>
        </div>
      </div>
      <div className="section">
        <div className="skills">
          <h3 className="section-title">Skills</h3>
          <ul>
            <li>SQL</li>
            <li>Excel/Google Sheets</li>
            <li>Tableau</li>
            <li>Google Analytics</li>
            <li>Leadership Experience</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="work-experience">
          <h3 className="section-title">Work Experience</h3>
          <div>
            <h4 className="job-title">Business Analyst</h4>
            <p className="job-company">Lancer Insurance Company</p>
            <p className="job-date">May 2018 - current / Boston, MA</p>
            <ul className="job-description">
              <li>Increased revenue by $16M through analysis of data surrounding customer behaviors, vendor relationships, stakeholder goals, and workflows.</li>
              <li>Discovered an additional $3M in savings after compiling data and identifying dead industry trends.</li>
              <li>Researched and prepared presentations for C-level suite regarding profitability reports, policies, internal operating inefficiencies, and industry trends.</li>
              <li>Participated in product development planning, providing key insights based on predictive modeling, which allowed PMs to circumvent a $50K legal fine.</li>
            </ul>
          </div>
          <div>
            <h4 className="job-title">Business Analyst</h4>
            <p className="job-company">ThreeBridge Solutions</p>
            <p className="job-date">August 2016 - May 2018 / Boston, MA</p>
            <ul className="job-description">
              <li>Traveled 3 of 5 days to work with clients, observing business processes, interviewing staff, and documenting practices.</li>
              <li>Conducted research, analyzed business operations, and problem-solved operating inefficiencies, saving companies a combined 800 man hours a month.</li>
              <li>Worked with stakeholders and clients to model and document goals, communicating transparently to meet 98% of deadlines.</li>
              <li>Modeled data to generate reports comparing business process evolution, assisting C-level staff with appropriate KPIs based on improved operations.</li>
            </ul>
          </div>
          <div>
            <h4 className="job-title">Product Modeling Analyst</h4>
            <p className="job-company">Geico</p>
            <p className="job-date">August 2014 - August 2016 / Boston, MA</p>
            <ul className="job-description">
              <li>Identified operating improvements from internal data with SQL, which reduced man hours by 8% year over year.</li>
              <li>Tracked, extrapolated, and interpreted customer data using Python, SQL, and Excel to report customer behaviors and state-wide retention numbers.</li>
              <li>Presented predictive modeling insights to C-level suite and stakeholders, participating in decisions surrounding policy changes, which saved company $3.2M in legal costs in 2015.</li>
              <li>Worked with 3 analysts to institute a new modeling technique that saved 60 quarterly hours in customer comparisons.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  }
}

export default Temp26;
