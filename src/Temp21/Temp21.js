import React from 'react';
import html2pdf from 'html2pdf.js';
import"./tem21.css";
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

class Temp21 extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector('.App21');
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

        <div className="App21">
      <div className="resume21">
        <header className="header21">
          <h1 contentEditable="true">Michelle Sanders</h1>
          <h2 contentEditable="true" id='hding'>Data Scientist</h2>
          <p contentEditable="true">📧 help@enhancv.com | 🔗 linkedin.com | 📍 Chicago, Illinois</p>
        </header>
        <div className="main-content21">
          <div className="left-column21">
            <section className="summary21" id="section21">
              <h3 className="h3">Summary</h3>
              <p contentEditable="true">With 7 years of experience in the domain of data science and analytics, I bring a proven knowledge of complex problem solving, machine learning, and strategic data analytics. Standout achievements include developing a predictive ad model and implementing a real-time analytics platform.</p>
            </section>
            <section className="experience21" id="section21">
              <h3 className="h3">Experience</h3>
              <div className="job21" >
                <h4 contentEditable="true">Data Scientist</h4>
                <p contentEditable="true">Facebook | 2018 - Present | Chicago, IL</p>
                <ul contentEditable="true">
                  <li>Developed a machine learning model to predict user behaviour, which improved click-through rates on ads by 20%</li>
                  <li>Managed large datasets, improved procedures resulting in 30% time saved in data pre-processing</li>
                  
                </ul>
              </div>
              <div className="job21">
                <h4 contentEditable="true">Data Analyst</h4>
                <p contentEditable="true">IBM | 2015 - 2018 | Chicago, IL</p>
                <ul contentEditable="true">
                  <li>Implemented a big data platform for real-time analytics that increased processing speed by 35%</li>
                  <li>Designed and conducted A/B testing which resulted in 10% increase in user engagement</li>
                </ul>
              </div>
              
            </section>
            <section className="education21" id="section21">
              <h3 className="h3">Education</h3>
              <p contentEditable="true">Master's in Computer Science with specialization in Data Science</p>
              <p contentEditable="true">University of Chicago | 2011 - 2013 | Chicago, IL</p>
            </section>
          </div>
          <div className="right-column21">
            <section className="strengths21" id="section21">
              <h3 className="h3">Strengths</h3>
              <ul className="list" contentEditable="true">
                <li>Complex Problem Solving</li>
                <li>Machine Learning</li>
                <li>Leadership</li>
              </ul>
            </section>
            <section className="skills21" id="section21">
              <h3 className="h3">Skills</h3>
              <ul className="list" contentEditable="true">
                <li>Big Data</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
                <li>ETL</li>
                <li>Machine Learning</li>
                <li>AI</li>
              </ul>
            </section>
            <section className="certification21" id="section21">
              <h3 className="h3">Certification</h3>
              <p contentEditable="true">Certificate in Data Science - Johns Hopkins University (Coursera)</p>
              <p contentEditable="true">Machine Learning - Stanford University (Coursera)</p>
            </section>
            <section className="passions21" id="section21">
              <h3 className="h3">Passions</h3>
              <p contentEditable="true">Machine Learning - Passionate about leveraging machine learning to interpret complex datasets</p>
              <p contentEditable="true">Rock Climbing - Love challenging myself physically and mentally through rock climbing</p>
            </section>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  }
}

export default Temp21;
