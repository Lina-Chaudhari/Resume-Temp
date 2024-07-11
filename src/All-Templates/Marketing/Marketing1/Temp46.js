import React from "react";
import "./temp46.css";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faArrowLeft,faEnvelope, faPhone, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

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

class Temp46 extends React.Component {
  
  downloadPDF = () => {
    const element = document.querySelector(".resume46");
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

        <div className="resume46">
          <div className="right-column46">
          <div className="experience46">
              <h3>Professional Experience</h3>
              <div className="job46" contentEditable="true">
                <h4>Digital Marketing Strategist</h4>
                <p>
                  October 2018 - Present | Skyline Marketing Inc., San Diego, CA
                </p>
                <ul>
                  <li>
                    Manage all online marketing for a portfolio of 12 client
                    accounts.
                  </li>
                  <li>
                    Collaborate with marketing teams to develop visual
                    materials.
                  </li>
                  <li>
                    Enhance social media presence for clients across various
                    platforms.
                  </li>
                </ul>
              </div>
              <div className="job46" contentEditable="true">
                <h4>Digital Marketing Coordinator</h4>
                <p>
                  June 2015 - October 2018 | West Beach Fitness, San Diego, CA
                </p>
                <ul>
                  <li>
                    Defined digital marketing strategy for a new fitness center.
                  </li>
                  <li>Established and managed social media presence.</li>
                  <li>Drove SEO marketing initiatives.</li>
                </ul>
              </div>
            </div>
            <div className="education46">
              <h3>Education</h3>
              <p contentEditable="true">Bachelor of Science (B.S.) in Marketing</p>
              <p contentEditable="true">
                September 2011 - June 2015 | University of San Diego, San Diego,
                CA
              </p>
            </div>
            <div className="certifications46">
              <h3>Certifications</h3>
              <p contentEditable="true">
                Certified Web Professional – Web Developer, IWA (August 2016)
              </p>
              <p contentEditable="true">Certified Digital Designer (CDD), ADA (November 2015)</p>
            </div>
            
          </div>
          <div className="left-column46">
            
          <div className="header46">
    <h1 contentEditable="true">Aliya Jackson</h1>
    <h2 contentEditable="true">Senior Digital Marketing Specialist</h2>
    <p contentEditable="true">
      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
      4759 Sunnydale Lane, Plano, Texas, USA, 12345
    </p>
    <p contentEditable="true">
      <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
      email@youremail.com |
      <FontAwesomeIcon icon={faPhone} style={{ marginLeft: "8px", marginRight: "8px" }} />
      (123) 456-7890
    </p>
  </div>
            <div className="skills46">
              <h3>Key Skills</h3>
              <ul contentEditable="true">
                <li>Digital Marketing Strategy</li>
                <li>SEO Marketing</li>
                <li>Lead Nurturing</li>
                <li>Content Marketing</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp46;
