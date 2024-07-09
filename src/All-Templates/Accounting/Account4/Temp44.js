import React from 'react';
import "./temp44.css";
import html2pdf from 'html2pdf.js';
import profileImage from "../../Images/profile.png";
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

const ProfileImage = styled.img`
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  color: var(--icon-color, #000); /* Default icon color */
  font-size: var(--icon-size, 20px); /* Default icon size */
`;

class Temp44 extends React.Component {
  state = {
    selectedImage: profileImage
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
    const element = document.querySelector('.AppContainer44');
    const opt = {
      margin: 5,
      filename: 'Account-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    const { selectedImage } = this.state;
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
        <div className="AppContainer44">
          <div className="LeftColumn44">
            <div className="ProfileContainer44">
              <ProfileImage
                src={selectedImage}
                className="ProfileImage44"
                alt="Profile"
                onClick={this.handleImageClick}
              />
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={this.handleImageChange}
                style={{ display: 'none' }}
              />
              <h1 className="Name44" contentEditable="true">Isabel Schumacher</h1>
              <h2 className="Position44" contentEditable="true">Certified Public Accountant</h2>
            </div>
            <div className="ContactContainer44">
              <div className="ContactItem44">
                <div className="Icon44">✉️</div>
                <div className="ContactText44" contentEditable="true">hello@reallygreatsite.com</div>
              </div>
              <div className="ContactItem44">
                <div className="Icon44">☎️</div>
                <div className="ContactText44" contentEditable="true">+123-456-7890</div>
              </div>
              <div className="ContactItem44">
                <div className="Icon44">📍</div>
                <div className="ContactText44" contentEditable="true">123 Anywhere St, Any City</div>
              </div>
            </div>
            <div className="EducationContainer44">
              <h3 className="EducationTitle44">🎓 Education</h3>
              <div className="EducationItem44" contentEditable="true">
                <h4>Borealise Business School</h4>
                <p>Bachelor of Business Management - Completed in 2018</p>
              </div>
              <div className="EducationItem44" contentEditable="true">
                <h4>Lorana Business School</h4>
                <p>Certificate in Digital Marketing - Completed in 2014</p>
              </div>
            </div>
            <div className="SkillContainer44" contentEditable="true">
              <h3 className="SkillTitle44">🛠️ Skill</h3>
              <div className="SkillItem44">▼ Management Skills</div>
              <div className="SkillItem44">▼ Digital Marketing</div>
              <div className="SkillItem44">▼ Public Speaking</div>
              <div className="SkillItem44">▼ Communication Skills</div>
              <div className="SkillItem44">▼ Negotiation</div>
            </div>
            <div className="AwardsContainer44">
              <h3 className="AwardsTitle44">🏆 Awards</h3>
              <div className="AwardsItem44" contentEditable="true">
                <p>Top 1 in Group Company The Best Employee of the Year</p>
                <p>Top 3 in Company The Best Employee of the Year</p>
              </div>
            </div>
          </div>
          <div className="RightColumn44">
            <div className="SummaryContainer44">
              <h3 className="SummaryTitle44">👤 Profile</h3>
              <p className="SummaryText44" contentEditable="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at tortor. Donec hendrerit libero eget est tempus, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi et mattis malesuada, neque nulla volutpat dolor.
              </p>
            </div>
            <div className="ExperienceContainer44">
              <h3 className="ExperienceTitle44">💼 Work Experience</h3>
              <div className="ExperienceItem44" contentEditable="true">
                <h4>Junior Business Consultant</h4>
                <p>Company Name | Jan 2022 - Present</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at tortor.</p>
              </div>
              <div className="ExperienceItem44" contentEditable="true">
                <h4>Business Consultant</h4>
                <p>Company Name | 2017 - 2019</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at tortor.</p>
              </div>
              <div className="ExperienceItem44" contentEditable="true">
                <h4>Business Consultant</h4>
                <p>Company Name | 2015 - 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at tortor.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp44;
