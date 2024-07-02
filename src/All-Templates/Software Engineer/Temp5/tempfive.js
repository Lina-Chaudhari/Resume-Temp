import React from 'react';
import './tempfive.css';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaGithub, FaArrowRight,FaPhone,FaUser,FaBriefcase,FaGraduationCap, FaTools,FaFolder } from 'react-icons/fa'

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

const Temp5 = () => {
  
  const downloadPDF = () => { 
    const element = document.querySelector('.mainfive');
    const opt = {
      margin: 10, 
      filename: 'resume.pdf',
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


      
<div className="mainfive">
  <div className="leftfive">
      <br />
      <br />
      <h1 contentEditable="true">
        <span>Your Name</span> 
      </h1>
      <p className="sd" contentEditable="true" style={{fontWeight:"bold", fontSize:"15px"}}>Software Developer</p>
      <hr className="hr1" />
      <div className="box-1">
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px"}}><FaUser style={{ marginRight: '5px', fontSize: '20px' }} />CONTACT</p>
        <hr className="hr1" />
        <p className="pone" contentEditable="true" >
          <u style={{marginRight:"10px"}}> <FaPhone style={{ marginRight: '5px', fontSize: '15px'}}/>call</u>+121-2323-2323
        </p>
        <p className="pone" contentEditable="true" >
          <u style={{marginRight:"10px"}} ><FaEnvelope style={{ marginRight: '5px', fontSize: '15px'}}/> email</u>info@yourweb.com
        </p>
        <p className="pone" contentEditable="true" >
          <u style={{marginRight:"10px"}}> <FaGithub style={{ marginRight: '5px', fontSize: '15px'}}/> Github</u>info@yourweb.com
        </p>
      </div>
      <div className="box-1">
        <br />
        <hr className="hr1" />
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px"}}><FaGraduationCap style={{ marginRight: '5px', fontSize: '20px' }} />EDUCATION</p>
        <hr className="hr1" />
        <p className="p2" style={{ width: 350}} contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has
        </p>
        <p className="p2" style={{ width: 350 }} contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has
        </p>
        <br />
      </div>
      <div className="box-1">
        <br />
        <hr className="hr1" />
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px"}} >< FaTools style={{ marginRight: '5px', fontSize: '15px' }} />SKILLS</p>
        <hr className="hr1" />
        <ul className="skill"contentEditable="true">
          <li><FaArrowRight style={{ marginRight: '5px', fontSize: '15px'}} />HTML</li>
          <li><FaArrowRight style={{ marginRight: '5px', fontSize: '15px'}}/>CSS</li>
          <li><FaArrowRight style={{ marginRight: '5px', fontSize: '15px'}}/>JAVASCRIPT</li>
          <li><FaArrowRight style={{ marginRight: '5px', fontSize: '15px'}} />JQUERY</li>
        </ul>
      </div>
    </div>
    <div className="rightfive">
      <div className="box-2">
      <hr className="hr1" />
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px"}} > <FaUser style={{ marginRight: '5px', fontSize: '20px'}} />PROFILE</p>
        <hr className="hr1" />
        <p className="p2" contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has Lorme ispum is simply dummy text of the
          printing and typesetting industry. lorem ipsum has
        </p>
        <hr className="hr2" />
      </div>
      <div className="box-2">
      <hr className="hr1" />
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px"}} ><FaBriefcase style={{ marginRight: '5px', fontSize: '20px'}} />EXPERIENCE</p>
        <hr className="hr1" />
        <h4 style={{ fontSize: 14, fontWeight: 600 }}>Write Your Job Title</h4>
        <p className="p2" contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has Lorme ispum is simply dummy text of the
          printing and typesetting industry. lorem ipsum has
        </p>
        <p className="p2" contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has Lorme ispum is simply dummy text of the
          printing and typesetting industry. lorem ipsum has
        </p>
        <br />
      </div>
      <div className="box-2">
      <hr className="hr1" />
        <p className="headingone" style={{fontWeight:"bold", fontSize:"15px",color:"black"}} > <FaFolder style={{ marginRight: '5px', fontSize: '20px'}} />PROJECT</p>
        <hr className="hr1" />
        <p className="p2" contentEditable="true">
          Lorme ispum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has Lorme ispum is simply dummy text of the
          printing and typesetting industry. lorem ipsum has
        </p>
        <hr className="hr2" />
      </div>
    </div>
  </div>
    </>
      );
    }
  export default Temp5;