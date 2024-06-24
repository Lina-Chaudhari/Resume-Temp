import React, { useState, useRef } from 'react';
import "../Tempthree/resumewrapper.css";
import pic from "../Tempthree/pic.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ResumeLeft = () => {
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
  return (
    <div className="resume_lefttech">
     <div className="resume_image">
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
      <div className="resume_bottom">
        <div className="resume_item resume_namerole">
          <div className="name"  contentEditable="true">Rosie Jackson</div>
          <div className="role"  contentEditable="true">UI Designer</div>
        </div>
        <div className="resume_item resume_profile">
          <div className="resume_title">Profile</div>
          <div className="resume_info"  contentEditable="true">
          I am an English language teacher. I teach students from elementary school to high school. I also have experience working with children with special needs. I like to use interactive materials in my work to make learning interesting
          </div>
        </div>
        <div className="resume_item resume_address">
          <div className="resume_title">Address</div>
          <div className="resume_info"  contentEditable="true">
            18th home,
            <br />
            woods street,
            <br />
            New York City, United States
          </div>
        </div>
        <div className="resume_item resume_contact">
          <div className="resume_title">Contact</div>
          <div className="resume_info">
            <div className="resume_subtitle"  contentEditable="true"><FontAwesomeIcon icon={faPhone} style={{marginRight:"10px"}} />Phone</div>
            <div className="resume_subinfo"  contentEditable="true"> +62 000 222 333</div>
          </div>
          <div className="resume_info">
            <div className="resume_subtitle"  contentEditable="true">  <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"10px"}}/>Email</div>
            <div className="resume_subinfo"  contentEditable="true" >rosiejack@gmail.com</div>
          </div>
        </div>
        <div className="resume_item resume_skills"  contentEditable="true">
          <div className="resume_title">Skills</div>
          <div className="resume_info">
            <div className="skills_list"  contentEditable="true">
              <div className="skills_left">Teaching Planning</div>
              <div className="skills_bar"  contentEditable="true">
                <p>
                  <span style={{ width: "90%" }} />
                </p>
              </div>
            </div>
            <div className="skills_list"  contentEditable="true">
              <div className="skills_left">Learning Creativity</div>
              <div className="skills_bar"  contentEditable="true">
                <p>
                  <span style={{ width: "80%" }} />
                </p>
              </div>
            </div>
            <div className="skills_list"  contentEditable="true">
              <div className="skills_left">Classroom Conflict Resolution</div>
              <div className="skills_bar"  contentEditable="true">
                <p>
                  <span style={{ width: "50%" }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLeft;
