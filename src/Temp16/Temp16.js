import React from 'react';
import html2pdf from 'html2pdf.js';
import"../Temp16/temp16.css"
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


class Temp16 extends React.Component {
    downloadPDF = () => {
        const element = document.querySelector('.resume-container16');
        const opt = {
          margin: 10, 
            filename:     'Consultant-resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
    };

    render() {
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

      <div className="resume-container16">
      <div className="header16">
        <h1 contentEditable="true">Dyonte Blake</h1>
        <p contentEditable="true">Consultant</p>
        <p contentEditable="true">📧 dyonteblake4@email.com | 📞 (123) 456-7890</p>
        <p contentEditable="true">📍 Houston, TX | 🔗 LinkedIn</p>
      </div>

      <div className="sidebar16">
        <div className="career-summary">
          <h2>Career Summary</h2>
          <p contentEditable="true">Sales-focused and financially-savvy consultant with 12+ years of experience supplying data-driven and customized technology solutions to high-profile clients and companies. Seeking to imagine new technologies to synthesize and streamline the outcomes of Technology Source.</p>
        </div>
        
        <div className="education">
          <h2>Education</h2>
          <p contentEditable="true"><strong>Bachelor of Science</strong> in Business Administration</p>
          <p contentEditable="true">Texas A&M University</p>
          <p contentEditable="true">2004 - 2008 | College Station, TX</p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li contentEditable="true">Data Analysis</li>
            <li contentEditable="true">Collaborative</li>
            <li contentEditable="true">Advanced Excel</li>
            <li contentEditable="true">Problem-solving</li>
            <li contentEditable="true">Revenue Forecasting</li>
            <li contentEditable="true">Verbal and Written Communication</li>
          </ul>
        </div>
      </div>

      <div className="main-content16">
        <h2>Work Experience</h2>
        <div className="job">
          <h3 contentEditable="true">Senior Consultant</h3>
          <p contentEditable="true"><strong>Oliver Wyman</strong> | 2012 - Present | Houston, TX</p>
          <ul>
            <li contentEditable="true">Specialized in revenue forecasting for 11 top 500 global companies, including Amazon and Walmart</li>
            <li contentEditable="true">Managed consulting 6-person team to perform quantitative analyses and stage forecasting for international clients</li>
            <li contentEditable="true">Traveled to 17 countries to meet with high-profile clients to discuss technology goals concerning financial needs</li>
            <li contentEditable="true">Researched and provided cost-effective solutions that improved clients' business processes by adding or removing technologies</li>
            <li contentEditable="true">Provided quotes for projects and delineated packages and option plans for clients, partnering with the lead sales representative to apply seasonal promotions and discounts</li>
          </ul>
        </div>

        <div className="job">
          <h3 contentEditable="true">Technical Solutions Consultant</h3>
          <p contentEditable="true"><strong>Unit4</strong> | 2010 - 2012 | Houston, TX</p>
          <ul>
            <li contentEditable="true">Provided technical support, solutions, and training to over 77 small and 3 global enterprises, with 95% of clients rating services as trustworthy, adaptable, and easy to understand</li>
            <li contentEditable="true">Collaborated with the sales team to deliver technical solutions based on budgets and needs, reducing clients' expenses on cloud-based technologies by 16%</li>
            <li contentEditable="true">Installed and configured U4ia, developed tutorial webinars, drafted slides, one-page user guides, and supported clients via phone, email, and chat</li>
            <li contentEditable="true">Responded to 24+ proposal requests per month and traveled within the state to provide demos of Unit4 ERP solutions</li>
          </ul>
        </div>

        <div className="job">
          <h3 contentEditable="true">Technology Advisory Consultant</h3>
          <p contentEditable="true"><strong>Accenture</strong> | 2008 - 2010 | Houston, TX</p>
          <ul>
            <li contentEditable="true">Traveled 250+ miles per week to meet with clients regarding project needs, budget, and timeline</li>
            <li contentEditable="true">Devised solutions to protect clients' assets, save money and provide seamless integration of business aspects using cloud-based systems</li>
            <li contentEditable="true">Overhauled email and communication platforms for more than 36 clients, decreasing spam, error messages, and delays by 87%</li>
            <li contentEditable="true">Trained clients' staff in the use of cybersecurity systems and ERPs and followed up with clients 2 weeks after project completion to ensure satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
                
    
        </>             
      );
  }
};

export default Temp16;
