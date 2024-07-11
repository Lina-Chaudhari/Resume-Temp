
import React from 'react';
import './temp53.css';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faPhone, faEnvelope, faMapMarkerAlt, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
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

const Temp53 = () => {
  const downloadPDF = () => {
    const element = document.querySelector('.container53');
    const opt = {
      margin: 5,
      filename: 'Engineer resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <>
      <StyledButton onClick={downloadPDF}>
        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Download
      </StyledButton>
      <StyledButtonNext>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Back
      </StyledButtonNext>

      <div className="container53">
        <header className="header53">
          <h1 className="name53" contentEditable="true">John Doe</h1>
          <h2 className="job-title-header53"  contentEditable="true">Senior Software Engineer</h2>
          <div className="contact-info53">
            <p  contentEditable="true">
              <FontAwesomeIcon icon={faPhone} className="icon53" />
              (123) 456-7890
            </p>
            <p  contentEditable="true">
              <FontAwesomeIcon icon={faEnvelope} className="icon53" />
              john.doe@example.com
            </p>
            <p  contentEditable="true">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon53" />
              New York, NY
            </p>
            <p  contentEditable="true">
              <FontAwesomeIcon icon={faLinkedin} className="icon53" />
              linkedin.com/in/johndoe
            </p>
          </div>
        </header>

        <h2 className="section-title53">Engineering</h2>
        <p className="description53"  contentEditable="true">
          Results-oriented Engineering professional with a strong track record of driving cost savings and efficiency improvements. Skilled in project management, team leadership, and problem-solving, with a proven ability to deliver successful outcomes on time and within budget. Adapt at conducting feasibility studies, managing cross-functional teams, and producing detailed reports to ensure stakeholder satisfaction and project success.
        </p>

        <h2 className="section-title53">Work Experience</h2>
        <div  contentEditable="true">
          <h3 className="job-title53">Engineering</h3>
          <h4 className="company-name53">Apex Engineering Solutions</h4>
          <p className="date-range53">  <FontAwesomeIcon icon={faCalendarDays} className="icon53" />01/2023 – 04/2023</p>
          <p className="description53">
            <ul  contentEditable="true">
              <li>Designed and developed a new engineering project using advanced techniques, resulting in a 30% reduction in production costs and a 20% increase in overall efficiency.</li>
              <li>Conducted feasibility studies for new engineering projects, evaluating factors such as cost and safety, leading to a 25% increase in successful project implementation.</li>
              <li>Managed a cross-functional team of architects, contractors, and engineers, ensuring project success and achieving a 95% on-time completion rate.</li>
            </ul>
          </p>
        </div>

        <div  contentEditable="true">
          <h3 className="job-title53">Senior Engineer</h3>
          <h4 className="company-name53">TechPro Engineering</h4>
          <p className="date-range53">  <FontAwesomeIcon icon={faCalendarDays} className="icon53" />09/2022 – 12/2022</p>
          <p className="description53">
            <ul  contentEditable="true">
              <li>Performed complex engineering calculations to ensure designs met safety standards and regulatory requirements, resulting in a 40% reduction in project risk.</li>
              <li>Managed engineering projects from start to finish, ensuring they were completed within budget and on time, resulting in a 15% increase in customer satisfaction.</li>
              <li>Collaborated with cross-functional teams to successfully implement new engineering initiatives, resulting in a 50% increase in team efficiency and project success rate.</li>
            </ul>
          </p>
        </div>

        <div  contentEditable="true">
          <h3 className="job-title53">Junior Engineer</h3>
          <h4 className="company-name53">TechPro Engineering</h4>
          <p className="date-range53">  <FontAwesomeIcon icon={faCalendarDays} className="icon53" />07/2022 – 09/2022</p>
          <p className="description53">
            <ul  contentEditable="true">
              <li>Conducted testing and quality assurance to ensure the functionality and durability of engineering projects, resulting in a 20% decrease in product defects.</li>
              <li>Troubleshoot and resolved technical issues during the design and development stages of engineering projects, resulting in a 30% reduction in project delays.</li>
              <li>Prepared and presented engineering reports, including project status updates and technical documentation, leading to improved communication and a 25% increase in stakeholder satisfaction.</li>
            </ul>
          </p>
        </div>

        <h2 className="section-title53">Skills & Competencies</h2>
        <ul className="skill-list53"  contentEditable="true">
          <li className="skill-item53">Advanced project design and development</li>
          <li className="skill-item53">Cost reduction and efficiency improvement</li>
        </ul>
      </div>
    </>
  );
};

export default Temp53;
