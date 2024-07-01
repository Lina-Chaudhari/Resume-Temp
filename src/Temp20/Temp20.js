import React, { useRef, useEffect, useState } from 'react';
import './temp20.css';
import profileImage from '../Temp20/profile.png'; 
import html2pdf from 'html2pdf.js';
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

const Temp20 = () => {
  const [selectedImage, setSelectedImage] = useState(profileImage);
  const sidebarCanvasRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const downloadPDF = () => {
    const element = document.querySelector('.resume-container20');
    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'canvas-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  useEffect(() => {
    const canvas = sidebarCanvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `hsl(${(Date.now() / 100) % 360}, 100%, 70%)`);
      gradient.addColorStop(1, `hsl(${(Date.now() / 100 + 60) % 360}, 100%, 50%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGradient();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
      
      <div className="resume-container20">
        <div className="resume-sidebar20">
          <canvas ref={sidebarCanvasRef} width={240} height={800} className="sidebar-canvas20" />
          <img
            className="profile-image20"
            src={selectedImage}
            alt="Profile"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <div className="contact-info20">
            <h2 className="hed2">Contact</h2>
            <p contentEditable="true">+123456789</p>
            <p contentEditable="true">www.website.com</p>
            <p contentEditable="true">emailaddress@gmail.com</p>
          </div>
          <div className="social-media20">
            <h2 contentEditable="true" className="hed2">Find Me Online</h2>
            <p contentEditable="true">Twitter.com/profile</p>
            <p contentEditable="true">LinkedIn.com/profile</p>
            <p contentEditable="true">Facebook.com/profile</p>
            <p contentEditable="true">Instagram.com/profile</p>
          </div>
          <div className="skills-section20">
            <h2 className="hed2">Skills</h2>
            <ul className="skills-list20">
              <li contentEditable="true">Skill 1</li>
              <li contentEditable="true">Skill 2</li>
              <li contentEditable="true">Skill 3</li>
              <li contentEditable="true">Skill 4</li>
              <li contentEditable="true">Skill 5</li>
            </ul>
          </div>
        </div>
        <div className="resume-main20">
          <h1 contentEditable="true">Name Surname</h1>
          <h2 contentEditable="true">Job Position</h2>
          <div className="profile-section20">
            <h2 className="hed2">Profile</h2>
            <p contentEditable="true">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </p>
          </div>
          <div className="experience-section20">
            <h2 className="hed2">Experience</h2>
            <div className="experience20">
              <h3 contentEditable="true">2020-Present</h3>
              <h4 contentEditable="true">Job Position/Company Name</h4>
              <p contentEditable="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.
              </p>
            </div>
            <div className="experience20">
              <h3 contentEditable="true">2018-2019</h3>
              <h4 contentEditable="true">Job Position/Company Name</h4>
              <p contentEditable="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.
              </p>
            </div>
            <div className="experience20">
              <h3 contentEditable="true">2016-2018</h3>
              <h4 contentEditable="true">Job Position/Company Name</h4>
              <p contentEditable="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.
              </p>
            </div>
          </div>
          <div className="education-section20">
            <h2 className="hed2">Education</h2>
            <div className="education20">
              <h3 contentEditable="true">2014-2016</h3>
              <h4 contentEditable="true">Degree/Field of Study</h4>
              <p contentEditable="true">University Name</p>
            </div>
            <div className="education20">
              <h3 contentEditable="true">2010-2014</h3>
              <h4 contentEditable="true">Degree/Field of Study</h4>
              <p contentEditable="true">University Name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp20;
