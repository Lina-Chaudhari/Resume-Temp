import React, { useState, useRef } from 'react';
import './tempfour.css'; 
import pic from "../TemoFour/profile.png";
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



const Tempfour = () => {
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
    const element = document.querySelector('.resmue-containerfour');
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
    <>
    <StyledButton onClick={downloadPDF}>
        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Download
      </StyledButton>
      <StyledButtonNext>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} />
        Back
      </StyledButtonNext>
    <div className="resmue-containerfour">
     <div style={{ display: "flex" }}>
     <aside>
      <section className="text-center" style={{ padding: 0 }}>
      <img className='porfile-pic'
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
        <h2 style={{ marginBottom: 5 }} contentEditable="true">Md Aqil</h2>
        <small className="text-muted " contentEditable="true">UI / UX DESIGNER/DEVELOPER</small>
        <p className="text-muted">
          <small contentEditable="true">
            <b>Phone:</b> +91 7210562014
          </small>
        </p>
        <p className="text-muted">
          <small contentEditable="true">
            <b>Email:</b> aqilali381@gmail.com
          </small>
        </p>
      </section>
      <section>
        <h3 className="line-titles center">About Me</h3>
        <p className="read" contentEditable="true">
          Computers have been my passion from ever. I could spend hours learning
          about coding and designing. However, this passion got wings when I
          grabbed a job as a UI/UX designer and developer. Though money cannot
          be totally ignored, even if it wasn’t there, I couldn’t be separated
          from designing and coding. I think I can totally relate to how
        </p>
      </section>
      <section>
        <h3 className="line-titles center">Skills</h3>
        <ul className="skill-list" contentEditable="true">
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
        </ul>
      </section>
      <section >
        <h3 className="line-titles center">Education</h3>
        <p className="read" contentEditable="true">
          R. B. Jalan College, Mithila University Darbhanga, Bihar Bachelor of
          Arts Pursuing B.A. at Mithila University.
        </p>
      </section>
    </aside>
    <main>
      <section>
        <h3 className="line-titles">Objective</h3>
        <article className="flex-group">
          <div className="full" contentEditable="true">
            <p className="read">
              I want to execute my ideas through my designing skills for benefit
              of my company. I have intuitive knowledge of designing which will
              help me to grow my career with my company.
            </p>
          </div>
        </article>
      </section>
      <section>
        <h3 className="line-titles">
          Experience <small className="text-muted"></small>
        </h3>
        <article className="flex-group">
          <div className="short" contentEditable="true">
            <h4>Edunuts.com</h4>
            <hr />
            <small>Date : 1-1 -2015 to 4-11-2017</small>
            <p />
          </div>
          <div className="full">
            <a href="http://edunuts.com">Lead UI/UX Developer</a>
            <p className="read" contentEditable="true">
              I had done UI Development and UI Designing in the whole website. I
              had used Html5, Css3, Jquery, Javascript, Animate.css,
              Bootstrap.css, Green shock animation to develop the website
              dynamically and make it most user-friendly. I had given it
              graphics from Adobe Photoshop and Illustrator. I had made my best
              efforts to make it better than something most better.
            </p>
          </div>
        </article>
        <article className="flex-group">
          <div className="short " contentEditable="true">
            <h4>bigly.io</h4>
            <hr />
            <small>Date : November-2017 - Currently</small>
            <p />
          </div>
          <div className="full">
            <a href="http://bigly.io">Lead UI/UX Developer </a>
            <p className="read" contentEditable="true">
              I had worked on two websites, E-Commerce Seller Service Provider
              &amp; Dropshipping. I had used same skills here to develop the
              whole business of team Bigly.
            </p>
          </div>
        </article>
      </section>
      <section>
        <h3 className="line-titles">Project Completed</h3>
        <article className="flex-group" contentEditable="true">
          <div className="short" contentEditable="true">
            <h4>
              <a href="">Edunuts.com</a>
            </h4>
            <p>UI/Design &amp; Developer</p>
          </div>
          <div className="full">
            <p className="read" contentEditable="true">
              Edunuts is a mission to empower students, in making the best
              career decisions based on correct information and insights from
              data.
            </p>
            <hr />
          </div>
        </article>
        
        <article className="flex-group">
          <div className="short" contentEditable="true">
            <h4>
              <a href="http://www.edunuts.com/academy/">Edunuts Academy</a>
            </h4>
            <p>UI/Design &amp; Developer</p>
          </div>
          <div className="full">
            <p className="read" contentEditable="true">
              Edunuts Academy is a subsidiary company of Edunuts.com. I had done
              all the previous work here too by using Html5, Css3, Jquery,
              Javascript, Animate.css, Bootstrap.css
            </p>
            <hr />
          </div>
        </article>
        
        <article className="flex-group">
          <div className="short" contentEditable="true">
            <h4>
              <a href="http://www.dmadelhi.com/">DMA Delhi</a>
            </h4>
            <p>UI/Design &amp; Developer</p>
          </div>
          <div className="full">
            <p className="read" contentEditable="true">
              dmadelhi.com is a subsidiary company of Edunuts.com. I had done
              all the previous work here too by using Html5, Css3, Jquery,
              Javascript, Animate.css, Bootstrap.css &amp; Parallax. Js.
            </p>
            <hr />
          </div>
        </article>
        <article className="flex-group">
          <div className="short" contentEditable="true">
            <h4>
              <a href="http://finishit.in">Finishit.in</a>
            </h4>
            <p>UI/Design &amp; Developer</p>
          </div>
          <div className="full">
            <p className="read" contentEditable="true">
              When you don't know how to get things done,come to us Finish-It
              get things done for you,over a call or chat. It does a great job
              by making your life easier
            </p>
            <hr />
          </div>
        </article>
      </section>
    </main>
  </div>
</div>

    </>
    
);
};

export default Tempfour;