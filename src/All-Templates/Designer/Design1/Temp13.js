import React from 'react';
import "./temp13.css";
import html2pdf from 'html2pdf.js';
import styled from 'styled-components';
import profileImage from "../../Images/profile.png";
import ColorItem from "../../color-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin } from 'react-icons/fa';
import { faDownload, faArrowLeft , faEnvelope, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

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

class Temp13 extends React.Component {
  state = {
    selectedImage: profileImage,
    hrtagColor: '#d2d3d6',
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
    const element = document.querySelector('.paper13');
    const opt = {
      margin: 10, 
      filename: 'Design-Engineer-resume.pdf',
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

        <div className="paper13" style={{ backgroundColor: hrtagColor }}>
  <div className="paper2">
    <div className="contact12">
    </div>
    <div className="content13">
      <div className="left13">
        <h2 contentEditable="true" >Your Name</h2>
        <p  contentEditable="true"  style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>Design Engineer</p>
        <h3 style={{textAlign:"center"}}>PROFILE</h3>
        <p contentEditable="true" style={{ textAlign: "justify", color: "black" }}>
        Reliable and focused Architectural Engineer with a strong record of individual and
         corporate client satisfaction. Broad and deep expert knowledge of every aspect of
          building construction planning and execution. Adept at handling multiple projects
           simultaneously and bringing them to completion ahead of deadline and under budget..{" "}
        </p>
        <h3  style={{textAlign:"center"}}>CONTACT</h3>
        <h4> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px', fontSize: '14px', color: 'black' }} />Address</h4>
        <p  contentEditable="true" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <h4> <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '5px', fontSize: '14px', color: 'black' }} />Phone</h4>
        <p  contentEditable="true" >+62 000 000 000</p>
        <h4> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px', fontSize: '14px', color: 'black' }} />Email</h4>
        <p  contentEditable="true" >Youremail@mail.com</p>
        <h4>  <FaLinkedin style={{ marginRight: '5px', fontSize: '14px', color: 'black' }} />Website</h4>
        <p  contentEditable="true" >www.yourweb.com</p>
      </div>
      <div className="right13">
        <img 
                  src={selectedImage}
                  alt="Profile"
                  onClick={this.handleImageClick}
                  style={{ cursor: 'pointer',width:"150px",height:"150px",position:"relative",marginTop: "20px",paddingLeft: "15px",marginLeft:"25%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"}}
                />
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={this.handleImageChange}
                  style={{ display: 'none' }}
                />
        <h3 className="center" style={{ padding: "80px 0px 5px 65px" }} >
          EXPERIENCE
        </h3>
        <div className="year">
          <h4  contentEditable="true" >2011-2014</h4>
          <div className="info grey">
          <p  contentEditable="true" >Architectural Engineer<hr></hr>Performed field work inspections on a regular basis.<br></br>
            Analyzed field project documentation packages.<br></br>
            Designed and submitted monthly project status reports in real estate staff meetings.<br></br>
            .</p>
          </div>
        </div>
        <h3 className="center" style={{ padding: "80px 0px 5px 65px" }}>
        EDUCATION</h3>
        <div className="year">
        <h4>2011-2014</h4>
          <div className="info grey">
          < p  contentEditable="true" >Bachelor’s Degree – Architectural Engineering2006<hr></hr>University NameCity, State
            </p>
          </div>
        </div>

        <div className="skill">
          <h3 style={{ display: "inline-block" }}>SKILLS</h3>
          <div className="skillgroup">
            <div className="software">
              <div className="pie">
                <div className="cutpie1" />
              </div>
              <h4  contentEditable="true"  style={{ marginTop:" 20%",marginLeft:"20px"}}>Skilled in Revit</h4>
            </div>
            <div className="software">
              <div className="pie">
                <div className="cutpie1" />
                <div className="cutpie2s" />
              </div>
              <h4  contentEditable="true"  style={{ marginTop:" 20%",marginLeft:"20px"}}>3D-visualiza</h4>
            </div>
            <div className="software">
              <div className="pie">
                <div className="cutpie1" />
                <div className="cutpie2" />
              </div>
              <h4  contentEditable="true"  style={{ marginTop:" 20%",marginLeft:"20px"}}>Team Building</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="greybox" />
  </div>
</div>

      </>
    );
  }
}

export default Temp13;
