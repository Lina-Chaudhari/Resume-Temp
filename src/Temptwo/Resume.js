import React from 'react';
import html2pdf from 'html2pdf.js';
import './resume.css'; // Make sure this path is correct for your CSS file
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

class Resume extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector('.containertwo');
    const opt = {
      margin: 10, 
      filename: 'non-technical-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    return (
      <>
        <StyledButton onClick={this.downloadPDF}>
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
          Download
        </StyledButton>
        <StyledButtonNext>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
          Back
        </StyledButtonNext>

        <div className="containertwo">
          <div className="headertwo">
            <div className="full-name">
              <span className="first-name">John</span>
              <span className="last-name">Doe</span>
            </div>
            <div className="contact-infotwo">
              <span className="email">Email:</span>
              <span className="email-val">john.doe@gmail.com</span>
              <span className="separators2"></span>
              <span className="phone">Phone:</span>
              <span className="phone-val">111-222-3333</span>
            </div>
            <hr />
            <div className="about">
              <span className="position">Front-End Developer</span>
              <span className="desc">
                I am a front-end developer with more than 3 years of experience in HTML, CSS, and JavaScript. I am motivated, result-focused, and seeking opportunities in a successful team-oriented company for growth.
              </span>
            </div>
          </div>

          <div className="detailstwo">
            <div className="sectiontwo">
              <hr />
              <div className="section__title">Experience</div>
              <hr />
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left2">
                    <div className="name">KlowdBox</div>
                    <div className="addr">San Francisco, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right2">
                    <div className="name">Front-end Developer</div>
                    <div className="desc">Developed various projects and collaborated with teams to achieve goals.</div>
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="left2">
                    <div className="name">Akount</div>
                    <div className="addr">Santa Monica, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right2">
                    <div className="name">Front-end Developer</div>
                    <div className="desc">Worked on XYZ and achieved significant milestones.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sectiontwo">
              <hr />
              <div className="section__title">Education</div>
              <hr />
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left2">
                    <div className="name">Sample Institute of Technology</div>
                    <div className="addr">San Francisco, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right2">
                    <div className="name">Bachelor's in Computer Science</div>
                    <div className="desc">Focused on web development and software engineering.</div>
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="left2">
                    <div className="name">Akount</div>
                    <div className="addr">Santa Monica, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right2">
                    <div className="name">Bachelor's in Information Technology</div>
                    <div className="desc">Studied advanced programming and computer networks.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sectiontwo">
              <hr />
              <div className="section__title">Projects</div>
              <hr />
              <div className="section__list">
                <div className="section__list-item">
                  <div className="name">Project Name 1</div>
                  <div className="text">
                    Developed a responsive web application using React and integrated with backend services.
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="name">Project Name 2</div>
                  <div className="text">
                    Created a RESTful API with Node.js and MongoDB for managing user data securely.
                  </div>
                </div>
              </div>
            </div>

            <div className="sectiontwo">
              <hr />
              <div className="section__title">Skills</div>
              <hr />
              <div className="skills">
                <div className="skills__item">
                  <div className="left2">
                    <div className="name">JavaScript</div>
                  </div>
                  <div className="right2">
                    <input id="ck1" type="checkbox" defaultChecked />
                    <label htmlFor="ck1"></label>
                    <input id="ck2" type="checkbox" defaultChecked />
                    <label htmlFor="ck2"></label>
                    <input id="ck3" type="checkbox" />
                    <label htmlFor="ck3"></label>
                    <input id="ck4" type="checkbox" />
                    <label htmlFor="ck4"></label>
                    <input id="ck5" type="checkbox" />
                    <label htmlFor="ck5"></label>
                  </div>
                </div>
                <div className="skills__item">
                  <div className="left2">
                    <div className="name">CSS</div>
                  </div>
                  <div className="right2">
                    <input id="ck6" type="checkbox" defaultChecked />
                    <label htmlFor="ck6"></label>
                    <input id="ck7" type="checkbox" defaultChecked />
                    <label htmlFor="ck7"></label>
                    <input id="ck8" type="checkbox" />
                    <label htmlFor="ck8"></label>
                    <input id="ck9" type="checkbox" />
                    <label htmlFor="ck9"></label>
                    <input id="ck10" type="checkbox" />
                    <label htmlFor="ck10"></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="sectiontwo">
              <hr />
              <div className="section__title">Interests</div>
              <hr />
              <div className="section__list">
                <div className="section__list-item">
                  Football, programming, reading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
