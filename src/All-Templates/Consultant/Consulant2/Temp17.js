import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import pic from "../../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faCheck,faStar,faCertificate } from '@fortawesome/free-solid-svg-icons';
import './temp17.css'; 
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

const Temp17 = () => {
  const [imageSrc, setImageSrc] = useState(pic); // Initialize with default image
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
    const element = document.querySelector('.resume-container17');
    const opt = {
      margin: 10, 
      filename: 'Consultant-resume.pdf',
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

      <div className="resume-container17">
        <header className="header17">
          <div className="columns17">
            <div className='left-column17'>
              <h1 style={{ color: "white" }} contentEditable="true">Taylor Foster</h1>
              <h2 style={{ color: "white" }}  contentEditable="true">Financial Consultant</h2>
              <div className="contact-info17">
                <p contentEditable="true">📞 +1-481-458-1738</p>
                <p contentEditable="true">📧 taylorB0@gmail.com</p>
                <p contentEditable="true">🔗 organic-pigeon.biz</p>
                <p contentEditable="true">📍 Jacobcliff, Poland</p>
              </div>
            </div>
            <div className='right-column17'>
              <img
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
          </div>
        </header>

        <div className="columns17">
          <div className="left-column17">
            <section className="summary17">
              <h3>SUMMARY</h3>
              <p contentEditable="true">Experienced and highly motivated Financial Consultant with a Bachelor's Degree in Finance from the University of Michigan. Proven track record of developing comprehensive investment strategies that have resulted in significant client asset growth. Possess strong written and verbal communication skills, effective leadership qualities, and a strong work ethic. Accomplishments include achieving top sales performance, implementing innovative investment strategies, and mentoring junior team members. Fluent in English and Spanish. Seeking an opportunity to utilize my skills and expertise in financial consulting to contribute to the success of a dynamic and client-focused organization.</p>
            </section>

            <section className="experience17">
              <h3>EXPERIENCE</h3>
              <div className="job17">
                <h4 contentEditable="true">Financial Consultant</h4>
                <p contentEditable="true"><strong>ABC Financial Advisors</strong> | 2022 - Present | Detroit, MI</p>
                <ul>
                  <li contentEditable="true">Conducted in-depth financial analysis and developed comprehensive investment strategies for high-net-worth clients.</li>
                  <li contentEditable="true">Collaborated with cross-functional teams to ensure superior outcomes for clients.</li>
                  <li contentEditable="true">Analyzed investment opportunities and client needs, resulting in a 10% increase in client assets under management.</li>
                  <li contentEditable="true">Developed and delivered client presentations, effectively communicating investment strategies.</li>
                  <li contentEditable="true">Maintained a client base of 50+ clients and achieved a 95% client retention rate.</li>
                </ul>
              </div>

              <div className="job17">
                <h4 contentEditable="true">Financial Advisor</h4>
                <p contentEditable="true"><strong>XYZ Wealth Management</strong> | 2017 - 2022 | Ann Arbor, MI</p>
                <ul>
                  <li contentEditable="true">Provided financial planning services to individual and corporate clients. Assisted clients in achieving their financial goals and managed portfolios.</li>
                  <li contentEditable="true">Analyzed client financial situations and developed customized financial plans resulting in a 20% increase in client wealth.</li>
                  <li contentEditable="true">Managed portfolios totaling $10 million in assets, ensuring optimal investment performance.</li>
                  <li contentEditable="true">Delivered presentations to prospective clients, effectively promoting the company's services and securing new business.</li>
                </ul>
              </div>
            </section>

            
          </div>

          <div className="right-column17">
            <section className="philosophy17">
              <h3>MY LIFE PHILOSOPHY</h3>
              <p contentEditable="true">Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</p>
            </section>

            <section className="strengths17">
              <h3>STRENGTHS</h3>
              <div className="strength17">
                <h4 contentEditable="true"><FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px', fontSize: '20px', color: 'green' }} />Effective Communication</h4>
                <p contentEditable="true">Strong written and verbal communication skills demonstrated through clear and concise client presentations resulting in increased client satisfaction and trust.</p>
              </div>
              <div className="strength17">
                <h4 contentEditable="true"><FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px', fontSize: '20px', color: 'green' }} />Leadership</h4>
                <p contentEditable="true">Proven leadership qualities and entrepreneurial spirit, leading cross-functional teams resulting in successful project completion and improved team performance.</p>
              </div>
              <div className="strength17">
                <h4 contentEditable="true"><FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px', fontSize: '20px', color: 'green' }} />Time Management</h4>
                <p contentEditable="true">Ability to work well under pressure with multiple priorities and deadlines, efficiently managing time resulting in timely and accurate completion of projects.</p>
              </div>
            </section>
            <section className="certifications17">
              <h3>CERTIFICATIONS</h3>
              <p contentEditable="true"><FontAwesomeIcon icon={faCertificate} style={{ marginRight: '10px',fontSize: '24px', color: 'green' }} />Certified Financial Planner (CFP)</p>
              <p contentEditable="true"><FontAwesomeIcon icon={faCertificate} style={{ marginRight: '10px',fontSize: '24px', color: 'green' }} />Chartered Financial Analyst (CFA)</p>
            </section>

            <section className="awards17">
              <h3>AWARDS</h3>
              <p contentEditable="true"><FontAwesomeIcon icon={faStar} style={{  marginRight: '10px',color: 'rgb(227, 227, 38)', fontSize: '20px' }} />Top Performer Award - ABC Financial Advisors</p>
              <p contentEditable="true"><FontAwesomeIcon icon={faStar} style={{  marginRight: '10px',color: 'rgb(227, 227, 38)', fontSize: '20px' }} />Outstanding Achievement Award - XYZ Wealth Management</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp17;
