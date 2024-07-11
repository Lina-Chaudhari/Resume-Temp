import React from "react";
import "./temp47.css";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faDownload,faArrowLeft,faEnvelope, faPhone, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


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

class Temp47 extends React.Component {
  downloadPDF = () => {
    const element = document.querySelector(".App47");
    const opt = {
      margin: 5,
      filename: "Marketing-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  render() {
    return (
      <>
        <StyledButton onClick={this.downloadPDF}>
          <FontAwesomeIcon
            icon={faDownload}
            style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
          />
          Download
        </StyledButton>
        <StyledButtonNext>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
          />
          Back
        </StyledButtonNext>

        <div className="App47">
        <header className="header47">
      <div className="header-left47">
        <h1 contentEditable="true">MARKETING</h1>
        <h2 contentEditable="true">by Resume Genius</h2>
      </div>
      <div className="header-right47">
        <p contentEditable="true">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon47" />
          4397 Aaron Smith Dr., Boston, MA 02137
        </p>
        <p contentEditable="true">
          <FontAwesomeIcon icon={faPhone} className="icon47" />
          (617) 555 5555
        </p>
        <p contentEditable="true">
          <FontAwesomeIcon icon={faEnvelope} className="icon47" />
          youremail@email.com
        </p>
        <p contentEditable="true">
          linkedin.com/in/firstname-lastname
        </p>
      </div>
    </header>
          <section className="summary47">
            <h4>SUMMARY</h4>
            <p contentEditable="true">
              An organized and creative professional with proven marketing
              skills and a desire to learn more. Possesses 6+ years of
              experience working for a diverse group of organizations and
              clients. Gained expertise in data analysis, publication marketing,
              and web-based advertising. Looking to utilize my existing skill
              set to increase company profitability at [Company Name].
            </p>
          </section>
          <div className="main-content47">
            <section className="experience47">
              <h4>PROFESSIONAL EXPERIENCE</h4>
              <div className="job47" contentEditable="true">
                <h5>CLAYDON HEELEY – Boston, MA</h5>
                <p>Business Consultant, September 20XX–present</p>
                <ul>
                  <li>
                    Assisted clients with business plan, purchase, branding,
                    advertising, remodeling, and marketing, increasing monthly
                    sales from $8,000 to $25,000 in 10 months
                  </li>
                  <li>
                    Increased followers on social media by 150% on average,
                    resulting in $47,000 in increased online sales through a
                    significant improvement in brand awareness
                  </li>
                  <li>
                    Initiated a series of marketing campaigns including email,
                    print, digital, outdoor, and social media
                  </li>
                  <li>
                    Crafted concept and content for journal ads, direct mail
                    campaigns, and blogs
                  </li>
                </ul>
              </div>
              <div className="job47" contentEditable="true">
                <h5>THE BOSTON HERALD – Boston, MA</h5>
                <p >Associate Publisher, June 20XX–September 20XX</p>
                <ul contentEditable="true">
                  <li>
                    Spearheaded the development of the first media kit
                    amalgamation for all company projects, increasing national
                    sales by 8%
                  </li>
                  <li>
                    Implemented efficiency and cost-saving programs that
                    reworked the editorial, production, and sales processes for
                    three magazines, increasing profitability by 10% on average
                  </li>
                  <li>
                    Kept abreast with the latest publication marketing
                    strategies and developed new social media campaigns to
                    increase brand influence
                  </li>
                  <li>
                    Discovered, negotiated, and secured new relationships with
                    local organizations, resulting in the launch of five new
                    publications whose profitability increased by between
                    10%–20% annually
                  </li>
                </ul>
              </div>
            </section>
            <div className="side-content47">
              <section className="education47">
                <h4>EDUCATION</h4>
                <p contentEditable="true">WATFORD ART SCHOOL – Chicago, IL</p>
                <p contentEditable="true">Bachelor of Arts in Art & Design, 20XX</p>
                <p contentEditable="true">Graduated magna cum laude</p>
              </section>
              <section className="skills47" >
                <h4>ADDITIONAL SKILLS</h4>
                <ul contentEditable="true">
                  <li>Adobe Creative Suite</li>
                  <li>Google Analytics</li>
                  <li>Webmaster Tools</li>
                  <li>Social Media Marketing</li>
                  <li>Stata/Atlas</li>
                  <li>Asana/Jira</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp47;
