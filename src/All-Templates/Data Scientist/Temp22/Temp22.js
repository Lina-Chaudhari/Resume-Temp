import React from 'react';
import html2pdf from 'html2pdf.js';
import"./temp22.css";
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

class Temp22 extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector('.App22');
    const opt = {
      margin: 10, 
      filename: 'Data Scientist-resume.pdf',
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
        <div className="App22">
      <div className="resume22">
        <aside className="sidebar22">
          <header className="header22">
            <h1 contentEditable="true">Carla Jensen</h1>
            <h2 contentEditable="true">Data Enthusiast | Data Scientist </h2>
            <p contentEditable="true">📧 help@enhancv.com | 🔗 linkedin.com | 📍 undefined</p>
          </header>
          <section className="strengths22">
            <h3>STRENGTHS</h3>
            <ul contentEditable="true">
              <li>🔍 Analytical</li>
              <li>🧩 Problem-solver</li>
              <li>🤝 Collaborative</li>
            </ul>
          </section>
          <section className="skills22">
            <h3>SKILLS</h3>
            <ul contentEditable="true">
              <li>Python</li>
              <li>SQL</li>
              <li>Machine Learning</li>
              <li>Tableau</li>
              <li>R</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Data Mining</li>
            </ul>
          </section>
          <section className="certification22">
            <h3>CERTIFICATION</h3>
            <p contentEditable="true">Python for Data Science - University of Michigan</p>
            <p contentEditable="true">Applied Data Science with Python - University of Michigan</p>
          </section>
          <section className="passions22">
            <h3>PASSIONS</h3>
            <p contentEditable="true">Artificial Intelligence</p>
            <p contentEditable="true">Mountain Biking</p>
          </section>
        </aside>
        <main className="main-content22">
          <section className="summary22">
            <h3>SUMMARY</h3>
            <p contentEditable="true">Data enthusiast with a Master's degree in Data Science and 2 years of experience. Advanced knowledge in machine learning and statistical analysis. Proven track record of designing and implementing data-driven solutions for business improvement.</p>
          </section>
          <section className="experience22">
            <h3>EXPERIENCE</h3>
            <div className="job22">
              <h4 contentEditable="true">Junior Data Scientist</h4>
              <p contentEditable="true">IBM | 2018 - 2019 | New York, USA</p>
              <ul contentEditable="true">
                <li>Developed and implemented a machine learning model that improved efficiency by 20%</li>
                <li>Managed large datasets using Python and SQL, streamlining data collection by 30%</li>
                <li>Collaborated with the team to design new statistical analysis models</li>
              </ul>
            </div>
            <div className="job22">
              <h4 contentEditable="true">Assistant Data Analyst</h4>
              <p contentEditable="true">Google | 2019 - 2020 | California, USA</p>
              <ul contentEditable="true">
                <li>Assisted in analyzing large sets of data and providing insights to the marketing team</li>
                <li>Contributed to marketing strategy by providing data-driven insights, boosting leads by 10%</li>
                <li>Managed database using SQL, which ensured data integrity and availability</li>
              </ul>
            </div>
          </section>
          <section className="education22">
            <h3>EDUCATION</h3>
            <p contentEditable="true">BSc in Computer Science - University of Southern California | 2010 - 2014 | California, USA</p>
            <p contentEditable="true">MSc in Data Science - New York University | 2015 - 2018 | New York, USA</p>
          </section>
          <section className="languages22">
            <h3>LANGUAGES</h3>
            <p contentEditable="true">English - Native</p>
            <p contentEditable="true">Spanish - Advanced</p>
          </section>
        </main>
      </div>
    </div>
        
      </>
    );
  }
}

export default Temp22;
