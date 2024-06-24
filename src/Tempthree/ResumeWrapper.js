import React, { useState } from 'react';
import styled from 'styled-components';
import ResumeLeft from './ResumeLeft';
import html2pdf from 'html2pdf.js';
import ResumeRight from './ResumeRight';
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

const ResumeWrapper = () => {
  const [downloading, setDownloading] = useState(false);
  const downloadPDF = () => { 
    setDownloading(true); 
    const element = document.querySelector('.resume_wrappertech');
    const opt = {
      margin: 10, 
      filename: 'Teacher-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
    .from(element)
    .set(opt)
    .save()
    .then(() => setDownloading(false)); 
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
      <div className="resume_wrappertech">
        <ResumeLeft />
        <ResumeRight />
      </div>
    </>
  );

};

export default ResumeWrapper;
