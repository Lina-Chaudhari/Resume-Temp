import React from 'react';
import './temp37.css';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft,faSquare } from '@fortawesome/free-solid-svg-icons';

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

class Temp37 extends React.Component {

  downloadPDF = () => {
    const element = document.querySelector('.resume-container37');
    const opt = {
      filename: 'Design Engineering Professional-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
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


        <div className="resume-container37">
          <header className='header37'>
            <h1 contentEditable="true">Your Name</h1>
            <h6 contentEditable="true">Design Engineering Professional</h6>
            <p contentEditable="true">Enter your city, country, ZIP Code and professional email address. If you work remotely, specify that here.</p>
          </header>

          <main className='main37'>
            <section className="left-column37">
              <section className="summary37">
                <h2 className='h237'>Professional Summary</h2>
                <p  contentEditable="true">
                  Experienced Design Engineer with a year of experience in creating 3D models from 2D drawings, parts for machining, sheet metal fabrication, and injection molding...
                </p>
              </section>

              <section className="work-history37">
                <h2 className='h237'>Work History</h2>
                <div className="job37"  contentEditable="true">
                  <h3>Design Engineer</h3>
                  <p>Ken Garner Manufacturing | San Francisco, CA | 02/2022 - 07/2022</p>
                  <ul>
                    <li>Created 3D models from 2D drawings.</li>
                    <li>Created CAD drawings using AutoCad to convey manufacturing and production configurations.</li>
                    <li>Created parts for machining, sheet metal fabrication and injection molding.</li>
                  </ul>
                </div>
                <div className="job37"  contentEditable="true">
                  <h3>Mechanical Design Engineer</h3>
                  <p>Local Motors | San Francisco, CA | 05/2021 - 01/2022</p>
                  <ul>
                    <li>Supported engineering design development through analysis and simulation of prototypes and 3D computer models.</li>
                    <li>Documented products and processes using SolidWorks, Revit and ProjectWise to document release notes and designs.</li>
                    <li>Coordinated technical requirements, scheduling and solution development for engineering design and test issues.</li>
                  </ul>
                </div>
                <div className="job37"  contentEditable="true">
                  <h3>Processes Engineer Intern</h3>
                  <p>United Enertech | San Francisco, CA | 05/2019 - 08/2019</p>
                  <ul>
                    <li>Troubleshot and diagnosed problems with equipment, resolved routine issues and organized more advanced repairs.</li>
                    <li>Authored onboarding documentation to introduce new employees to business processes.</li>
                  </ul>
                </div>
              </section>
            </section>

            <aside className='right-column37'>
            <section className="skills37">
                <h2 className='h237'>Skills</h2>
                <ul  contentEditable="true">
                  <li><FontAwesomeIcon icon={faSquare} /> FEA and failure analysis</li>
                  <li><FontAwesomeIcon icon={faSquare} /> Rapid Prototyping</li>
                  <li><FontAwesomeIcon icon={faSquare} /> Leadership</li>
                  <li><FontAwesomeIcon icon={faSquare} /> Conflict Resolution</li>
                  <li><FontAwesomeIcon icon={faSquare} /> Team Player</li>
                  <li><FontAwesomeIcon icon={faSquare} /> Critical Thinking</li>
                </ul>
              </section>

              <section className="education37">
                <h2 className='h237'>Education</h2>
                <p  contentEditable="true">The University of Tennessee</p>
                <p  contentEditable="true">Chattanooga, TN</p>
                <p  contentEditable="true">BS: Mechanical Engineering</p>
              </section>
            </aside>
          </main>
        </div>
      </>
    );
  }
}

export default Temp37;
