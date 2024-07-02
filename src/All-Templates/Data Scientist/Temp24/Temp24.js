import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './temp24.css';
import styled from 'styled-components';
import pic from "../../Images/profile.png";
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
  left: 20px; /* Move to the left side */
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

const Temp24 = () => {
  const [imageSrc, setImageSrc] = useState(pic);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    const element = document.querySelector('.App24');
    const opt = {
      margin: 10,
      filename: 'Data Scientist-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
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

      <div className="App24">
        <div className="container24 resume-container24">
          <header className="header24">
            <fieldset className="profileFieldset24">
              <legend className="profileTitle24">
                <img
                  src={imageSrc}
                  alt="Resume_image"
                  onClick={handleImageClick}
                  className="profileImage24"
                />
                <div className="profileText24">
                  <h3 contentEditable="true">Name: Brooke Ware</h3>
                  <p contentEditable="true">Job Position:Senior Data Scientist</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
              </legend>
              <div className="profileDetails24">
                <p className="summary24" contentEditable="true">
                Techniques used to segment or slice data into smaller, more manageable parts for analysis or presentation purposes. This could involve methods like partitioning data based on certain criteria or creating subsets of data for specific analyses.
                </p>
                <div className="contactInfo24">
                  <a className="contactItem24" contentEditable="true">brooke@noworeume.com</a>
                  <span className="contactItem24" contentEditable="true">123 444 555</span>
                  <span className="contactItem24" contentEditable="true">Columbus, Ohio</span>
                  <a className="contactItem24" contentEditable="true">medium.com/@brooke.ware</a>
                </div>
              </div>
            </fieldset>
          </header>

          <div className="content24">
            <div className="leftColumn24">
              <fieldset className="section24">
                <legend className="sectionTitle24">Work Experience</legend>
                <div className="job24">
                <h4 className="jobTitle24" contentEditable="true">Data Scientist</h4>
                  <p className="company24" contentEditable="true">Big Data Analytics Co. | 06/2018 - Present</p>
                  <ul className="list24" contentEditable="true">
                    <li>Developed predictive models using machine learning algorithms to analyze and interpret complex data sets.</li>
                    <li>Collaborated with cross-functional teams to identify and solve business problems using data-driven techniques.</li>
                    <li>Designed and implemented data pipelines for data extraction, transformation, and loading (ETL) processes.</li>
                    <li>Performed exploratory data analysis (EDA) to discover trends, patterns, and insights that drive business decisions.</li>
                    <li>Presented findings and insights to stakeholders and executives through clear and compelling data visualizations and reports.</li>
                  </ul>
                </div>
                <div className="job24" contentEditable="true">
                <h4 className="jobTitle24" contentEditable="true">Data Analyst Intern</h4>
                  <p className="company24" contentEditable="true">Tech Startup XYZ | 01/2017 - 05/2018</p>
                  <ul className="list24">
                    <li>Assisted in the development and maintenance of data collection systems and databases.</li>
                    <li>Analyzed data to identify trends and patterns, providing insights to improve operational efficiency.</li>
                    <li>Created dashboards and reports to visualize key metrics and performance indicators.</li>
                    <li>Contributed to team projects, collaborating with analysts and engineers to enhance data quality and integrity.</li>
                    <li>Supported the implementation of data-driven strategies to optimize marketing campaigns and customer engagement.</li>
                  </ul>
                </div>
              </fieldset>

              <fieldset className="section24">
                <legend className="sectionTitle24">Education</legend>
                <p className="education24" contentEditable="true">BA in Journalism (Minor in Marketing) | The Ohio State University | 08/2013 - 05/2016</p>
              </fieldset>
            </div>

            <div className="rightColumn24">
              <fieldset className="section24">
                <legend className="sectionTitle24">General Skills</legend>
                <ul className="skillsList24" contentEditable="true">
                  <li>Copywriting</li>
                  <li>Identifying Audience</li>
                  <li>SEO</li>
                  <li>Attention to Detail</li>
                  <li>Creative Writing</li>
                  <li>Establishing Tone</li>
                  <li>Wordpress</li>
                  <li>Digital Marketing</li>
                  <li>Time-management</li>
                  <li>Editing</li>
                </ul>
              </fieldset>

              <fieldset className="section24">
                <legend className="sectionTitle24">Personal Project</legend>
                <p className="project24" contentEditable="true">
                  <strong>Freelance Fiction Writer (2016 - Present)</strong><br />
                  Compose fiction or nonfiction prose, such as short stories, novels, articles, descriptive or critical analyses, and essays. Develop story influences and themes, plots, characterizations, psychological analyses, historical environments, action, and dialogue to create material ensuring efficiency of the creative process to deliver the project on time.
                </p>
              </fieldset>

              <fieldset className="section24">
                <legend className="sectionTitle24">Languages</legend>
                <ul className="languagesList24" contentEditable="true">
                  <li>English - Native or Bilingual Proficiency</li>
                  <li>Spanish - Native or Bilingual Proficiency</li>
                  <li>French - Full Professional Proficiency</li>
                  <li>German - Limited Working Proficiency</li>
                </ul>
              </fieldset>

              <fieldset className="section24">
                <legend className="sectionTitle24">Interests</legend>
                <ul className="interestsList24" contentEditable="true">
                  <li>Renewable Energy</li>
                  <li>Gardening</li>
                  <li>Calligraphy</li>
                  <li>Astronomy</li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp24;
