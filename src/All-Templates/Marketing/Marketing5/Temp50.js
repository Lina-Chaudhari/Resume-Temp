import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowLeft,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faLanguage,
  faTrophy,
  faIndustry,
  faCogs,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./temp50.css";
import selectedImage from "../../Images/profile.png";

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

const Temp50 = () => {
  const [imageSrc, setImageSrc] = useState(selectedImage);
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
    const element = document.querySelector(".resume-container50");
    const opt = {
      margin: 5,
      filename: "Marketing-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <>
      <StyledButton onClick={downloadPDF}>
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

      <div className="resume-container50">
        <div className="sidebar50">
          <div className="section50">
            <h1  style={{color:"white"}} contentEditable="true">Frederic Vasser</h1>
            <p  style={{color:"white"}} contentEditable="true">Marketing Manager</p>
          </div>
          <div className="section50">
            <h2 className="title50" style={{color:"white"}}>
              Personal Info
            </h2>
            <div className="item50" style={{color:"white"}} contentEditable="true">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:fredvasser@email.com">fredvasser@email.com</a>
            </div>
            <div className="item" style={{color:"white"}} contentEditable="true">
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <a
                href="https://linkedin.com/fredvasser"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/fredvasser
              </a>
            </div>
            <div className="item50" style={{color:"white"}} contentEditable="true">
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7890
            </div>
          </div>
          <div className="section50">
            <h2 className="title50" style={{color:"white"}}>
              <FontAwesomeIcon icon={faCogs} /> Skills
            </h2>
            <div className="item50" contentEditable="true">
              Strategic Planning
            </div>
            <div className="item50" contentEditable="true">
              SEO and SEM
            </div>
            <div className="item50" contentEditable="true">
              Google Analytics
            </div>
          </div>
          <div className="section50">
            <h2 className="title50" style={{color:"white"}}>
              <FontAwesomeIcon icon={faTrophy} /> Awards
            </h2>
            <div className="item50" contentEditable="true">
            Marketing Campaign of the Year
            </div>
          </div>
          <div className="section50">
            <h2 className="title50" style={{color:"white"}}>
              <FontAwesomeIcon icon={faLanguage} /> Hobbies/Interests
            </h2>
            <div className="item50" contentEditable="true">
             Running & marathon strategy
              blog
            </div>
          </div>
        </div>
        <div className="main-content50">
          <div className="section50">
            <h2 className="title50">
              <FontAwesomeIcon icon={faBriefcase} /> Work History
            </h2>
            <div className="item50" contentEditable="true">
              <h3>Marketing Manager</h3>
              <p>Quantum Enterprises, Dover, DE</p>
              <p>2014-04 - Present</p>
              <ul contentEditable="true">
                <li>
                  Developing marketing strategies that increase brand
                  visibility.
                </li>
                <li>Leading a team of 15 marketing professionals.</li>
              </ul>
            </div>
            <div className="item50" contentEditable="true">
              <h3>Marketing Assistant</h3>
              <p>Stellar Systems, Dover, DE</p>
              <p>2010-06 - 2014-04</p>
              <ul contentEditable="true">
                <li>Assisted in the development of marketing campaigns.</li>
                <li>Supported sales team with marketing materials.</li>
              </ul>
            </div>
          </div>
          <div className="section50">
            <h2 className="title50">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h2>
            <div className="item50" contentEditable="true">
              <h3>Marketing, Bachelor of Science</h3>
              <p>University of Delaware, Newark, DE</p>
              <p>2006-09 - 2010-06</p>
            </div>
          </div>
          <div className="section50">
            <h2 className="title50" contentEditable="true">
              <FontAwesomeIcon icon={faIndustry} /> Membership
            </h2>
            <div className="item50" contentEditable="true">
              <h3>Member of the American Marketing Association</h3>
              <p>2019-11 - Present</p>
            </div>
          </div>
          <div className="section50">
            <h2 className="title50" contentEditable="true">
              <FontAwesomeIcon icon={faCogs} /> Certificates
            </h2>
            <div className="item50" contentEditable="true">
              <h3>Google Ads Search Certification</h3>
              <p>Google, 2020-05</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp50;
