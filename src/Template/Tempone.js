import React from 'react';
import "./tempone.css";
import html2pdf from 'html2pdf.js';
import profileImage from '../Template/profile.png';
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


class TempOne extends React.Component {
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
    const element = document.querySelector('.containerone');
    const opt = {
      margin: 10, 
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
      <div className="containerone" >
        <div className="headerone">
        <div className='img-areaone'>
              <img
                src={selectedImage}
                alt="Description of the image"
                onClick={this.handleImageClick}
                style={{ cursor: 'pointer' }}
              />
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={this.handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          <h1 contentEditable="true">Jason Holder</h1>
          <h3 contentEditable="true">Accountant</h3>
        </div>

        <div className="mainone">
          <div className="leftone">
            <h2 className='h2'>Personal Information</h2>
            <p contentEditable="true"><strong>Name:</strong> Jason Holder</p>
            <p contentEditable="true"><strong>Age:</strong> 30</p>
            <p contentEditable="true"><strong>Email:</strong> jholder@email.com</p>
            <p contentEditable="true"><strong>Phone:</strong> 000 000 0000</p>
            <h2 className='h2'>Skills</h2>
            <ul contentEditable="true">
              <li>Businees Acumen</li>
              <li>Auditing</li>
              <li>Accounting Principles</li>
              <li>Tax Planning</li>
              <li>Financial Analysis</li>
            </ul>
            <h2 className='h2'>Education</h2>
            <h3 contentEditable="true">Bachelor of Business Administration in Accounting</h3>
            <p contentEditable="true">University of XYZ, 2014-2018</p>
            <h3 contentEditable="true">M.Sc in Administration in Accounting</h3>
            <p contentEditable="true">University of XYZ, 2019-2020</p>
          </div>

          <div className="rightone">
            <h2 className='h2'>Work Experience</h2>
            <h3 contentEditable="true">Yost, Reichert and Ebert</h3>
            <p contentEditable="true"><strong>Position:</strong>Accountant</p>
            <p contentEditable="true"><strong>Duration:</strong> 2018-2022</p>
            <ul contentEditable="true">
              <li>Managed full cycle accounting processes for a portfolio of clients, ensuring accuracy and timeliness of financial reporting.</li>
              <li>Developed and maintained effective accounting policies and procedures.</li>
              <li>Assisted in the preparation of financial statements and budgets.</li>
            </ul>
            <h3 contentEditable="true">Kub, Kozey and Ankunding</h3>
            <p contentEditable="true"><strong>Position:</strong> Accountant</p>
            <p contentEditable="true"><strong>Duration:</strong> 2016-2018</p>
            <ul contentEditable="true">
              <li>Reconciled bank accounts and general ledger accounts on a monthly basis.</li>
              <li>Reviewed and monitored billing activities to ensure accuracy and timeliness.</li>
              <li>Developed and maintained internal controls to ensure the accuracy and reliability of financial data.</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default TempOne;
