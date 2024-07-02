import React from 'react';
import "../Teacher2/resumewrapper.css";

const ResumeRight = () => {
  return (
    <div className="resume_righttech">
     <div className="resume_item resume_namerole">
        <div className="name"  contentEditable="true">Rosie Jackson</div>
        <div className="role"  contentEditable="true">School Teacher</div>
      </div>
      <div className="resume_item resume_education">
        <div className="resume_title">Education</div>
        <div className="resume_info">
          <div className="resume_data"  contentEditable="true">
            <div className="year" contentEditable="true">2010 - 2013</div>
            <div className="content"  contentEditable="true">
              <p  contentEditable="true">Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="resume_data" contentEditable="true">
            <div className="year" contentEditable="true">2013 - 2015</div>
            <div className="content"  contentEditable="true">
              <p  contentEditable="true">Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resume_experience">
        <div className="resume_title">Experience</div>
        <div className="resume_info">
          <div className="resume_data"  contentEditable="true">
            <div className="year" contentEditable="true">2000 - 2010</div>
            <div className="content"  contentEditable="true">
              <p  contentEditable="true">Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="resume_data"  contentEditable="true">
            <div className="year" contentEditable="true">2010 - 2013</div>
            <div className="content"  contentEditable="true">
              <p  contentEditable="true">Title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resmue_interests">
        <div className="resume_title">Interests</div>
        <div className="resume_info">
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-volleyball-ball" />
            </div>
            <div className="int_data"  contentEditable="true">Volleyball</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-book-open" />
            </div>
            <div className="int_data"  contentEditable="true">Reading</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-film" />
            </div>
            <div className="int_data" contentEditable="true">Movies</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-biking" />
            </div>
            <div className="int_data" contentEditable="true">Riding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRight;
