import React, { useState, useRef } from 'react';
import '../Tempsix/tempsix.css';
import styled from 'styled-components';
import pic from "../TemoFour/profile.png";
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope,FaPhone,FaUser } from 'react-icons/fa'


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
const Tempsix = () => {
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
    const element = document.querySelector('.resume-boxsix');
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
    <><StyledButton onClick={downloadPDF}>
    <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
    Download
  </StyledButton>
  <StyledButtonNext>
    <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
    Back
  </StyledButtonNext>
    <div className="resume-boxsix">
      <div className="top-sec">
        <div className="top-leftsix">
        <div className="profilesix">
        <img className='porfilesix-pic'
          src={imageSrc} 
          alt="Resume_image" 
          onClick={handleImageClick} 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        </div>
          <h1 className="name" contentEditable="true">XYZ Nmae</h1>
          <p className="n-p" contentEditable="true">Software Developer</p>
          <hr className="line" />
        </div>
        <div className="top-rightsix">
          <p className="p1" contentEditable="true"><FaUser style={{marginRight:"5px"}}/>Address<span>c-2334 Street Name</span></p>
          <p className="p1"contentEditable="true"><FaPhone style={{marginRight:"5px"}}/>Phone<span> <br />+0123-444-5555</span></p>
          <p className="p1"contentEditable="true"><FaEnvelope style={{marginRight:"5px"}}/>Email<span> <br />info@dummy.com</span></p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="leftsix-section">
        <div className="info">
          <p className="heading">profile</p>
          <p className="inp" contentEditable="true">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="info">
          <p className="heading">Education</p>
          <div className="edusix" contentEditable="true">
            <p>2010-2013 -BCA</p>
            <p><strong>Indira Gandhi National Open University</strong></p>
          </div>
          <div className="edusix" contentEditable="true">
            <p>2013-2015 -MCA</p>
            <p><strong>Indira Gandhi National Open University</strong></p>
          </div>
        </div>
        <div className="info">
          <p className="heading">Skills</p>
          <ul className="skill"contentEditable="true">
            <li contentEditable="true">HTML <span>80%</span></li>
            <li contentEditable="true">CSS <span>80%</span></li>
            <li contentEditable="true">JAVASCRIPT <span>50%</span></li>
            <li contentEditable="true">RXJS <span>40%</span></li>
          </ul>
        </div>
      </div>
      <div className="rightsix-section">
        <div className="clearfix"></div>
        <br /><br />
        <div className="rightsix-heading">
          <p className="heading">Work Experience</p>
        </div>
        <div className="clearfix"></div>
        <div className="lr-box" contentEditable="true">
          <div className="leftsix">
            <p className="p4d" contentEditable="true">2012 - 2014</p>
          </div>
          <div className="rightsix" contentEditable="true">
            <p className="p4">Web Designer</p>
            <p className="p5">Retoching Company</p>
            <p className="p5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="lr-box">
          <div className="leftsix" contentEditable="true">
            <p className="p4d" contentEditable="true">2014 - 2017</p>
          </div>
          <div className="rightsix" contentEditable="true">
            <p className="p4">Graphic Web Assitant</p>
            <p className="p5">Setup Box Manufactring</p>
            <p className="p5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="lr-box">
          <div className="leftsix"contentEditable="true">
            <p className="p4d" contentEditable="true">2017 - 2021</p>
          </div>
          <div className="rightsix" contentEditable="true">
            <p className="p4">Web Designer</p>
            <p className="p5">Retoching Company</p>
            <p className="p5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="clearfix"></div>
        </div>
        <br />
      </div>
    </div>
    </>
  );
};

export default Tempsix;
