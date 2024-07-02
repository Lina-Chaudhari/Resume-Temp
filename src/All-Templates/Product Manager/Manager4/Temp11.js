import React from 'react';
import "./temp11.css";
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import ColorItem from "../../color-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faGraduationCap, faCode, faBriefcase , faEnvelope, faMapMarkerAlt, faPhoneAlt,faAlignLeft} from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

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

class Temp11 extends React.Component {
  state = {
    hrtagColor: '#00324A',
    colors: ['#333', '#154360', '#D68910', '#641E16 ', '#5B2C6F', '#0E6655']
  };

  setTheme = (color) => {
    this.setState({ hrtagColor: color });
  };

  downloadPDF = () => {
    const element = document.querySelector('.main-content11'); 
    const opt = {
      margin: 10, 
      filename: 'Production-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { hrtagColor, colors } = this.state;
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

        <h1 className='heading1'>Select Color:</h1>
        <div className='color-switcher'>
          <div className='color-list'>
            {colors.map((color, idx) =>
              <ColorItem key={idx} setColor={this.setTheme} color={color} />
            )}
          </div>
        </div>

            <main className="main-content11">
            <section className="left-section11">
                <div className="left-content11">
                    <h2 className="name11" contentEditable="true">John Doe</h2>
                    <p className="career11" contentEditable="true">Product Manager</p>
                    <hr style={{backgroundColor:"black", padding:"2px"}}></hr>

                <div className="contact-info11">
                    <h3 className="main-title11">Contact Info</h3>
                        <p contentEditable="true" > <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '5px', fontSize: '15px', color: 'black' }} />07661892982</p>
                        <p contentEditable="true"> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px', fontSize: '15px', color: 'black' }} />john.doe@example.com</p>
                        <p contentEditable="true"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px', fontSize: '15px', color: 'black' }} /> 37 Pramount St, London</p>
                    
                </div>
                </div>
                <div className="skills-section11">
                    <h3 className="main-title11"> <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', color: 'black' }} />Skills</h3>
                    <ul>
                <li contentEditable="true"><strong>Product Vision and Strategy:</strong> Ability to define clear product vision and strategy.</li>
                <li contentEditable="true"><strong>Product Lifecycle Management:</strong> Proficiency in managing the entire product lifecycle.</li>
                <li contentEditable="true"><strong>Market Research and Analysis:</strong> Skills in conducting market research and analyzing data.</li>
                <li contentEditable="true"><strong>User Experience (UX) and Design:</strong> Familiarity with UX/UI design principles.</li>
                <li contentEditable="true"><strong>Cross-functional Collaboration:</strong> Ability to collaborate effectively with cross-functional teams.</li>
                <li contentEditable="true"><strong>Technical Acumen:</strong> Understanding of technical concepts and requirements.</li>
            </ul>
                </div>
            </section>
            <section className="right-section11" style={{ backgroundColor: hrtagColor }}>
                <div className="right-main-content11">
                <section className="about sect11">
                    <h2 className="right-title11"><FontAwesomeIcon icon={faAlignLeft} style={{ marginRight: '10px', color: 'white' }} />About Me</h2>
                    <p className="para11" contentEditable="true">
                        Innovative product manager with a proven track record of successfully
                        leading cross-functional teams in the conception, development, and launch
                        of high-impact products. Experienced in agile methodologies, market
                        analysis, and user-centered design principles. Strong communicator and
                        strategic thinker dedicated to delivering products that meet both customer
                        needs and business objectives. Seeking to leverage my skills in a dynamic
                        organization poised for growth and innovation.
                    </p>
                </section>
                <hr style={{backgroundColor:"white", padding:"2px",marginTop:"5px"}}></hr>
                <section className="experince sect11">
                    <h2 className="right-title11"> <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px', color: 'white' }} />Professional Experience</h2>
                    <div className="timeline11">
                    <div className="left-tl-content11">
                        <h5 className="tl-title11" contentEditable="true">ABC Corporation</h5>
                        <p className="para11" contentEditable="true">2017 - 2019</p>
                    </div>
                    <div className="right-tl-content11">
                        <div className="tl-content11">
                        <h5 className="tl-title-2" contentEditable="true">Senior Product Manager</h5>
                        <p className="para11" contentEditable="true">
                        Led cross-functional teams in the development and launch of multiple
                        products, resulting in a 30% increase in revenue.<br></br>
                        Defined product roadmap and strategy based on market analysis and user
                        feedback.
                        </p>
                        </div>
                    </div>
                    </div>
                    <hr style={{backgroundColor:"white", padding:"2px",marginTop:"5px"}}></hr>
                </section>
                <section className="education sect11">
                    <h2 className="right-title11"><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '10px', color: 'white' }} />education</h2>
                    <div className="timeline11">
                    <div className="left-tl-content11">
                        <h5 className="tl-title11" contentEditable="true">University of Example</h5>
                        <p className="para11" contentEditable="true">2015 - 2016</p>
                    </div>
                    <div className="right-tl-content11">
                        <div className="tl-content11">
                        <h5 className="tl-title-2" contentEditable="true">Bachelor of Science in Business Administration</h5>
                        <p className="para11" contentEditable="true">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias cupiditate vitae voluptatem deleniti, laboriosam odio
                            nobis quae fugit facilis quo.
                        </p>
                        </div>
                    </div>
                    </div> <hr style={{backgroundColor:"white", padding:"2px",marginTop:"5px"}}></hr>
                </section>
                </div>
            </section>
            </main>
      </>
    );
  }
}

export default Temp11;
