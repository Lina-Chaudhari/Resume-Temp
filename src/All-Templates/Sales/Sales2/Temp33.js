import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Temp33.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

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

const Temp33 = () => {

  const downloadPDF = () => {
    const element = document.querySelector('.resume33');
    const opt = {
      margin: 5,
      filename: 'Sales-resume.pdf',
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

      <div className="resume33">
      <div className="left-side33">
        <section className="achievements33">
          <h2>Achievements</h2>
          <div c>
            <h5 contentEditable="true"> <i class="fa-regular fa-star"></i>Top Sales Director Award</h5>
            <p contentEditable="true">Received the Top Sales Director award in 2022 for leading the team to achieve a 40% increase in annual sales revenue.</p>
          </div>
          <div>
            <h5 contentEditable="true"><i class="fa-regular fa-star"></i>Market Expansion Success</h5>
            <p contentEditable="true">Led the successful expansion into three new markets, increasing the company's market share by 25% within a year.</p>
          </div>
          <div>
            <h5 contentEditable="true"><i class="fa-regular fa-star"></i>Key Account Acquisition</h5>
            <p contentEditable="true">Negotiated and secured a pivotal contract worth over $5M, significantly contributing to the company's strategic growth.</p>
          </div>
        </section>
        <section className="skills33">
          <h2>Skills</h2>
        <div>
            <ul contentEditable="true">
                <li>Strategic Planning</li>
                <li>Client Relationship Management</li>
                <li>Market Expansion</li>
                <li>Contract Negotiation</li>
                <li>Team Leadership</li>
                <li>CRM Software</li>
            </ul>
        </div>
        </section>
        <section className="certifications33">
          <h2>Certifications</h2>
          <div>
            <h5 contentEditable="true"><i class="fa-solid fa-paperclip"></i>Advanced Sales Strategies</h5>
            <p contentEditable="true">Focused on innovative sales techniques and strategies for market penetration and growth. Provided by Coursera.</p>
          </div>
          <div>
            <h5 contentEditable="true"><i class="fa-solid fa-paperclip"></i>Effective Sales Leadership</h5>
            <p contentEditable="true">Covers leadership principles for sales managers, including team motivation and performance management. Offered by LinkedIn Learning.</p>
          </div>
        </section>
        <section className="projects33">
          <h2>Passioan</h2>
          <div>
            <h5 contentEditable="true"><i class="fa-solid fa-badge-check"></i>Innovative Technology</h5>
            <p contentEditable="true">Passionate about leveraging technology to solve real-world problems and drive business growth.</p>
          </div>
          <div>
            <h5 contentEditable="true"><i class="fa-solid fa-badge-check"></i>Mentoring</h5>
            <p contentEditable="true">Dedicated to mentoring young professionals, sharing knowledge and experiences to help them grow in their careers.</p>
          </div>
        </section>
      </div>
      <div className="right-side33">
        <header className="header33">
          <h1 contentEditable="true">Your Name</h1>
          <p contentEditable="true">Sales Director | Strategic Planning </p>
          <p contentEditable="true"><i className="fas fa-envelope"></i> your.email@example.com</p>
          <p contentEditable="true"><i className="fas fa-phone"></i> (123) 456-7890</p>
          <p contentEditable="true"><i className="fas fa-map-marker-alt"></i> Your City, Country</p>
        </header>
        <section className="summary33">
          <h2>Summary</h2>
          <p contentEditable="true">With over 8 years of experience in sales leadership, I excel in strategic planning, client relations, and market expansion. My career is highlighted by consistently exceeding sales targets and driving team success. Eager to bring top-tier negotiation, team leadership, and business development skills to a dynamic sales team.</p>
        </section>
        <section className="experience33">
  <h2>Experience</h2>
  <div className="experience-item33" contentEditable="true">
    <h4>Sales Director</h4>
    <p>Tech Innovate Solutions</p>
    <div className="experience-details33" contentEditable="true">
      <h6><i class="fa-regular fa-calendar-days"></i>2019</h6><h6><i class="fa-solid fa-location-pin"></i>Santa Clara, California</h6>
    </div>
    <ul contentEditable="true">
      <li>Led a team of 15 sales professionals, achieving a 40% year-over-year increase in sales revenue by implementing innovative sales strategies and enhancing the sales process.</li>
      <li>Spearheaded the expansion into three new markets, resulting in a 25% increase in market share and establishing the company's presence in competitive regions.</li>
      <li>Negotiated and secured contracts with key accounts worth over $5M, contributing significantly to the company's bottom line and strategic growth objectives.</li>
      <li>Implemented a CRM system that improved lead tracking and sales forecasting accuracy by 35%, enabling more strategic decision-making.</li>
    </ul>
  </div>
  <div className="experience-item33" contentEditable="true">
    <h4>Regional Sales Manager</h4>
    <p>Global Tech Solutions</p>
    <div className="experience-details33" contentEditable="true">
      <h6><i class="fa-regular fa-calendar-days"></i>2014-2019</h6><h6><i class="fa-solid fa-location-pin"></i>San Jose, California</h6>
    </div>
    <ul contentEditable="true" >
      <li>Managed a region generating over $2M in annual sales, exceeding sales targets by 20% each quarter through effective territory management and customer engagement strategies.</li>
      <li>Launched a partner program that increased sales channel revenue by 30% within the first year, enhancing product distribution and market penetration.</li>
      <li>Led the turnaround of an underperforming district, achieving a 15% sales increase in the first six months through strategic realignment and team motivation.</li>
      <li>Collaborated with marketing to develop targeted campaigns that increased lead generation by 40%, directly impacting sales growth.</li>
    </ul>
  </div>
</section>
        <section className="education33">
          <h2>Education</h2>
          <div  className="education-item33" contentEditable="true">
            <h5>Master of Business Administration</h5>
            <p>Stanford University</p>
          <h6><i class="fa-regular fa-calendar-days"></i>2009-2011</h6>  <h6><i class="fa-solid fa-location-pin"></i>Stanford, CA</h6>
         </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Temp33;
