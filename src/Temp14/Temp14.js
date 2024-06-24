import React from 'react';
import "./temp14.css";
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import profileImage from '../Temp12/profile.png';
import ColorItem from "../Temp10/color-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft ,faGraduationCap, faCode, faBriefcase , faEnvelope, faMapMarkerAlt, faPhoneAlt,faAlignLeft, faStar} from '@fortawesome/free-solid-svg-icons';

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

class Temp14 extends React.Component {
  state = {
    selectedImage: profileImage,
    hrtagColor: '#fff',
    colors: ['#333', '#154360', '#D68910', '#641E16 ', '#5B2C6F', '#0E6655']
  };

  setTheme = (color) => {
    this.setState({ hrtagColor: color });
  };

  handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.setState({ selectedImage: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  downloadPDF = () => {
    const element = document.querySelector('.cv-base');
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
    const { selectedImage, hrtagColor, colors } = this.state;
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


        <div className="cv-base">
  <div className="front">
    <header>
      <div className="head-top" />
      <div className="head-right" />
      <div className="head-bottom">
        <div className="margin">
          <div className="image-left" onClick={this.handleImageClick}/>
          <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={this.handleImageChange}
          style={{ display: 'none' }}
        /> 
          <div className="words-right">
            <h3 title="" contentEditable="true">Your name</h3>
            <p  contentEditable="true">Architectural Designer | Commercial Projects</p>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div className="margin">
        <aside>
          <div id="aside01" className="aside-parts">
            <h3>about me</h3>
              <p  contentEditable="true">
                  With over 6 years of experience as an Architectural Designer,
                  I specialize in commercial projects with a strong emphasis on
                  sustainable design. I've successfully designed over 20
                  commercial spaces, incorporating the latest trends and green
                  building practices.
                </p>
              
          </div>
          <div id="aside02" className="aside-parts">
            <h3>education</h3>
            <ul >
              <li id="education01">
                <h3  contentEditable="true">2016</h3>
                <p  contentEditable="true">Master's in Architecture</p>
                <p  contentEditable="true">
                  This text is a text that is of no use and is used in the
                  filling of blanks Do not tire yourself in the readers in this
                  text is useless, did you understand or not?
                </p>
              </li>
              <li id="education02">
                <h3  contentEditable="true">2016</h3>
                <p  contentEditable="true">Bachelor's in Architecture</p>
                <p  contentEditable="true">
                  This text is a text that is of no use and is used in the
                  filling of blanks Do not tire yourself in the readers in this
                  text is useless, did you understand or not? 
                </p>
              </li>
            </ul>
          </div>
        </aside>
        <article>
          <div id="article01" className="article-parts">
            <h3>skills</h3>
            <div className="groups">
              <div id="line01" className="lines">
                <ul>
                  <li>
                    
                    <div className="words">
                      <p  contentEditable="true">  <FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />Commercial</p>
                    </div>
                  </li>
                  <li>
                    
                    <div className="words">
                      <p  contentEditable="true"><FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />3D Modeling</p>
                    </div>
                  </li>
                  <li>
                    
                    <div className="words">
                      <p  contentEditable="true"><FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />AutoCAD</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="line02" className="lines">
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li >
                    <div className="words">
                      <p  contentEditable="true"><FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />Project Management</p>
                    </div>
                  </li>
                  <li>
                    <div className="words">
                      <p  contentEditable="true"><FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />Space Planning</p>
                    </div>
                  </li>
                  <li>
                    <div className="words">
                      <p  contentEditable="true"><FontAwesomeIcon icon={faStar} style={{marginRight:"2px",fontSize: '14px', color: '#ff4359' }} />Client Relations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="article02" className="article-parts">
            <h3>work experience</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li id="experience01">
                <h3  contentEditable="true">2016</h3>
                <h3  contentEditable="true">Architectural Designer</h3>
                <p  contentEditable="true">Urban Designs Inc.</p>
                <p  contentEditable="true">
                  Focused on designing commercial spaces with an emphasis on
                  sustainability and functionality.Led the design of a 50,000 sq
                  ft office space, incorporating open layouts and collaborative
                  spaces.Utilized 3D modeling to provide clients with virtual
                  walkthroughs of proposed designs, enhancing client
                  satisfaction.
                </p>
              </li>
              <li id="experience02">
                <h3  contentEditable="true">2016</h3>
                <h3  contentEditable="true">Junior Architect</h3>
                <p  contentEditable="true">DesignScape Architects</p>
                <p  contentEditable="true">
                  Assisted senior architects in the design and planning of
                  commercial and residential projects. Participated in client
                  meetings to understand requirements and provide design
                  inputs.Collaborated with the construction team to oversee the
                  implementation of design on-site.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
    <div className="loop" />
    <footer>
      <div className="foot-back" />
      <div className="foot-front" />
      <div className="foot-words">
        <h3>contact me</h3>
        <ul>
          <li id="contact01">
            <div className="words">
              <p  contentEditable="true" title=""> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '4px', fontSize: '14px', color: 'white' }} />Your Location</p>
            </div>
          </li>
          <li id="contact02">
            <div className="words">
              <p contentEditable="true" maxLength={10}> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '4px', fontSize: '14px', color: 'white' }} />mike@yahoo.com</p>
            </div>
          </li>
          <li id="contact03">
            <div className="words">
              <p  contentEditable="true"> <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '4px', fontSize: '14px', color: 'white' }} />000000000</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</div>



      </>
    );
  }
}

export default Temp14;
