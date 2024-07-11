import React from "react";
import "./temp48.css";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowLeft,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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

class Temp48 extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector(".resume48");
    const opt = {
      margin: 5,
      filename: "Marketing-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    return (
      <>
        <StyledButton onClick={this.downloadPDF}>
          <FontAwesomeIcon
            icon={faDownload}
            style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
          />
          Download
        </StyledButton>
        <StyledButtonNext>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
          />
          Back
        </StyledButtonNext>

        <div className="resume48">
          <div className="header48">
            <h1 contentEditable="true">Zoey Walker</h1>
            <p className="title48" contentEditable="true">
              Marketing Content Coordinator | Content Strategy | SEO
            </p>
            <div className="contact-info48">
              <p contentEditable="true">
                <FontAwesomeIcon icon={faEnvelope} /> help@enhancv.com
              </p>
              <p contentEditable="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Denver, Colorado
              </p>
            </div>
          </div>
          <div className="main-content48">
            <div className="left-column48">
              <div className="achievements48">
                <h3>ACHIEVEMENTS</h3>
                <ul contentEditable="true">
                  <li>
                    <strong>Increased Web Traffic:</strong> Led a campaign that
                    resulted in a 40% increase in web traffic.
                  </li>
                  <li>
                    <strong>Enhanced Brand Visibility:</strong> Initiated a social
                    media strategy that improved visibility by 50%.
                  </li>
                  <li>
                    <strong>Improved Lead Conversion:</strong> Collaborated with
                    sales to create targeted content, achieving a 20% increase in
                    lead conversion rates.
                  </li>
                  <li>
                    <strong>ROI Improvement in PPC Campaigns:</strong> Optimized
                    PPC campaigns to achieve a 25% improvement in ROI.
                  </li>
                </ul>
              </div>
              <div className="skills48">
                <h3>SKILLS</h3>
                <ul contentEditable="true">
                  <li>Content Strategy</li>
                  <li>SEO</li>
                  <li>Social Media Marketing</li>
                  <li>Email Marketing</li>
                  <li>PPC Campaigns</li>
                </ul>
              </div>
            </div>
            <div className="right-column48">
              <div className="summary48">
                <h2>Summary</h2>
                <p contentEditable="true">
                  With over 5 years of experience in marketing and content
                  strategy...
                </p>
              </div>
              <div className="experience48">
                <h2>Experience</h2>
                <div className="job48" contentEditable="true">
                  <h3>Marketing Content Coordinator</h3>
                  <p>GigSmart - Denver, Colorado</p>
                  <p>01/2021 - Present</p>
                  <ul contentEditable="true">
                    <li>
                      Developed and executed a content marketing strategy...
                    </li>
                    <li>Led a cross-functional team...</li>
                  </ul>
                </div>
                <div className="job48" contentEditable="true">
                  <h3>Digital Marketing Specialist</h3>
                  <p>Canva - Denver, Colorado</p>
                  <p>06/2018 - 12/2020</p>
                  <ul contentEditable="true">
                    <li>Managed and optimized PPC campaigns...</li>
                    <li>Designed and executed email marketing campaigns...</li>
                  </ul>
                </div>
                <div className="job48" contentEditable="true">
                  <h3>Content Marketing Associate</h3>
                  <p>Adobe - Denver, Colorado</p>
                  <p>03/2016 - 05/2018</p>
                  <ul contentEditable="true">
                    <li>
                      Contributed to the development of a content marketing
                      strategy...
                    </li>
                    <li>Assisted in managing the editorial calendar...</li>
                  </ul>
                </div>
              </div>
              <div className="education48">
                <h3>EDUCATION</h3>
                <div className="degree" contentEditable="true">
                  <h4>Master of Business Administration</h4>
                  <p>University of Colorado Boulder</p>
                  <p>01/2014 - 01/2016</p>
                </div>
                <div className="degree48" contentEditable="true">
                  <h4>Bachelor of Arts in Marketing</h4>
                  <p>Colorado State University</p>
                  <p>01/2010 - 01/2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp48;
