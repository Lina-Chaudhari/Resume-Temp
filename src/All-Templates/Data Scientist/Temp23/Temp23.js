import React from 'react';
import html2pdf from 'html2pdf.js';
import"./temp23.css";
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

class Temp23 extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector('.App23');
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
        
        <div className="App23">
      <div className="resume23">
        <header className="header23">
          <h1 style={{color:"white"}} contentEditable="true">Grace Jackson</h1>
          <h2 contentEditable="true">Data Scientist | Machine Learning</h2>
          <p contentEditable="true" style={{color:"white"}} className="contact-info23">📞 +1-(234)-555-1234 | 📧 help@enhancv.com | 📍 San Francisco, CA</p>
          <p contentEditable="true" style={{color:"white"}} >🔗 linkedin.com</p>
        </header>
        <div className="main-content23">
          <div className="left-column23">
            <section className="summary23" id='section23'>
              <h3 className='hedingh3'>SUMMARY</h3>
              <p contentEditable="true">With over 9 years of experience in data science, including advanced classification, regression modeling, and proficient use of R and Python for data analysis, I bring a solid track record of applying data analysis to achieve substantial business outcomes. My career highlights include implementing key predictive models and developing data-centric solutions directly contributing to operational growth and efficiency.</p>
            </section>
            <section className="experience23"  id='section23'>
              <h3 className='hedingh3'>EXPERIENCE</h3>
              <div className="job23">
                <h4  contentEditable="true" className='h4'>Senior Data Scientist</h4>
                <p className="job-meta23" contentEditable="true">Tech Innovations Inc. | 📅 <span className="job-date23"> 02/2020 - Present</span> | San Francisco, CA</p>
                <ul contentEditable="true">
                  <li>Led a team to optimize algorithm performance, improving data processing efficiency by 30% and reducing costs by 15%.</li>
                  <li>Pioneered an advanced predictive model for market trend analysis that influenced strategic decisions and increased revenue projections by 25%.</li>
                  <li>Spearheaded the integration of a new analytics platform, enhancing data visualization capabilities and leading to a 40% improvement in user engagement.</li>
                 
                </ul>
              </div>
              <div className="job23">
                <h4 contentEditable="true" className='h4'>Data Scientist</h4>
                <p v className="job-meta23">Global Analytics Corp. | 📅 <span className="job-date23"> 05/2017 - 01/2020</span> | San Francisco, CA</p>
                <ul contentEditable="true">
                  <li>Developed a real-time anomaly detection system that reduced false positives by 35%, enhancing data integrity.</li>
                  <li>Automated data collection and cleaning processes, leading to a 50% reduction in data prep time.</li>
                </ul>
              </div>
             
            </section>
            <section className="education23"  id='section23'>
              <h3 className='hedingh3'>EDUCATION</h3>
              <p contentEditable="true">MSc Applied Mathematics - University of California, Berkeley | <span className="edu-date">📅 01/2012 - 01/2014</span> | Berkeley, CA</p>
              <p contentEditable="true">Bachelor of Science in Statistics - San Francisco State University | <span className="edu-date">📅 01/2008 - 01/2012</span> | San Francisco, CA</p>
            </section>
          </div>
          <div className="right-column23"  id='section23'>
            <section className="projects23">
              <h3 className='hedingh3'>PROJECTS</h3>
              <div>
                <h4 className='h4' contentEditable="true">Exploratory Data Analysis Toolkit</h4>
                <p contentEditable="true">Developed an open-source Python library to streamline exploratory data analysis. See more on the project at github.com/eda-toolkit</p>
              </div>
              <div>
                <h4 contentEditable="true" className='h4'>Real-time Anomaly Detection Framework</h4>
                <p contentEditable="true">Contributed to a lightweight real-time anomaly detection system in R, suitable for streaming data. Check my contribution at github.com/real-time-adf</p>
              </div>
            </section>
            <section className="achievements23"  id='section23'>
              <h3 className='hedingh3'>ACHIEVEMENTS</h3>
              <ul contentEditable="true">
                <li>Data Warehouse Architecture</li>
                <li>Market Trend Predictive Model</li>
                <li>Machine Learning in Product Enhancement</li>
                <li>Sales Data Analysis Breakthrough</li>
              </ul>
            </section>
            <section className="skills23"  id='section23'>
              <h3 className='hedingh3'>SKILLS</h3>
              <ul contentEditable="true">
                <li>Statistical Modeling</li>
                <li>Data Visualization</li>
                <li>Data Wrangling</li>
                <li>SQL</li>
              </ul>
            </section>
            <section className="certification23"  id='section23'>
              <h3 className='hedingh3'>COURSES</h3>
              <p contentEditable="true">Certified Data Scientist with R, DataCamp</p>
              <p contentEditable="true">Azure Machine Learning Certification, Microsoft</p>
            </section>
            <section className="passions23"  id='section23'>
              <h3 className='hedingh3'>PASSIONS</h3>
              <p contentEditable="true">Predictive Analytics</p>
            </section>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  }
}

export default Temp23;
