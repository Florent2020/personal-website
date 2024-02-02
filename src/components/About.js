import React, { useState } from "react";
// import AboutInfo from './AboutInfo';
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import AboutBanner from "../images/aboutBanner.jpg";
import { Container, Row, Col } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Myself from "../images/myself.jpg";
import html from "../images/logos/html.png";
import css from "../images/logos/css3.png";
import js from "../images/logos/js.png";
import sass from "../images/logos/sass.png";
import react from "../images/logos/react.png";
import vsc from "../images/logos/vs code.png";
import xd from "../images/logos/adobe XD.png";
import bootstrap from "../images/logos/bootstrap.png";
import github from "../images/logos/github.png";
import wp from "../images/logos/wp.png";

function About() {
  const [isAboutInfoOpen, setIsAboutInfoOpen] = useState(false);

  const toggleAboutInfo = () => {
    if (isAboutInfoOpen) {
      setIsAboutInfoOpen(false);
      return;
    }
    setIsAboutInfoOpen(true);
  };

  return (
    <Wrapper id="about">
      <h2 className="subheading">about.</h2>
      <p className="info">
        I'm a front-end developer. I have a burning desire to excel and
        constantly improve in my work.{" "}
        <span className="nav-toggle" onClick={toggleAboutInfo}>
          Learn more
        </span>{" "}
        about my journey!
      </p>
      {isAboutInfoOpen && (
        <div
          className={`${isAboutInfoOpen ? "sidebar show-sidebar" : "sidebar"}`}
        >
          <h2>Resume</h2>
          <button className="nav-toggle" onClick={toggleAboutInfo}>
            <FaTimes />
          </button>
          {/* Bio */}
          <div className="bio">
            <Container>
              <Row>
                <Col xs={12} md={3}>
                  <img src={Myself} alt="Florent" />
                </Col>
                <Col xs={12} md={4}>
                  <p>Name: Florent</p>
                  <p>Surname: Hajdari</p>
                  <p>Born: 1984</p>
                  <p>Languages: English, Albanian, Norwegian</p>
                </Col>
                <Col xs={12} md={5}>
                  <p>Phone: +47 930 77 286</p>
                  <p>E-mail: florent.hajdari@hotmail.com</p>
                  <p>Website: https://florent-hajdari.vercel.app/</p>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Logos */}
          <div className="logos">
            <Container>
              <Row>
                <Col xs={4} md={1}>
                  <img src={html} alt="html" />
                </Col>
                <Col xs={4} md={1}>
                  <img src={css} alt="css" />
                </Col>
                <Col xs={4} md={1} className="js">
                  <img src={js} alt="js" />
                </Col>
                <Col xs={4} md={1} className="sass">
                  <img src={sass} alt="sass" />
                </Col>
                <Col xs={4} md={1} className="react">
                  <img src={react} alt="react" />
                </Col>
                <Col xs={4} md={1} className="vsc">
                  <img src={vsc} alt="vsc" />
                </Col>
                <Col xs={4} md={1} className="xd">
                  <img src={xd} alt="xd" />
                </Col>
                <Col xs={4} md={1} className="bootstrap">
                  <img src={bootstrap} alt="bootstrap" />
                </Col>
                <Col xs={4} md={1} className="github">
                  <img src={github} alt="github" />
                </Col>
                <Col xs={4} md={1} className="wp">
                  <img src={wp} alt="wp" />
                </Col>
              </Row>
            </Container>
          </div>

          {/* Skills */}
          <div className="skills">
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <h2>Skills</h2>
                  <Row className="row-skills">
                    <Col xs={12} md={6}>
                      <p>HTML5</p>
                      <p>CSS3</p>
                      <p>SASS</p>
                      <p>JavaScript</p>
                      <p>React</p>
                      <p>Bootstrap / React Bootstrap</p>
                      <p>Material UI</p>
                      <p>WordPress & Elementor</p>
                    </Col>
                    <Col xs={12} md={6}>
                      <p>Adobe XD</p>
                      <p>Photoshop</p>
                      <p>Illustrator</p>
                      <p>Strapi</p>
                      <p>Tailwind</p>
                      <p>Bulma</p>
                      <p>Team player</p>
                      <p>Googling</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <h2>Focused on</h2>
                  <Row>
                    <Col>
                      <p>UI/UX Design</p>
                      <p>HTML5/CSS3/SASS/Styled Components/React</p>
                      <p>Web Design</p>
                      <p>Wireframing/Prototype</p>
                      <p>WordPress & Elementor</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Line */}
          <hr />

          {/* Education */}
          <div className="education">
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <h2>Education</h2>
                  <Row>
                    <Col xs={12} md={9}>
                      <h6>
                        Studied at Noroff - School of technology and digital
                        media
                      </h6>
                      <p>Location: Oslo, Norway</p>
                      <p>Front-end Development</p>
                    </Col>
                    <Col xs={12} md={3}>
                      <h6>2019 - 2021</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={9}>
                      <h6>
                        Diploma in Faculty of Civil Engineering and Architecture
                      </h6>
                      <p>Location: Pristina, Kosovo</p>
                      <p>Bachelor of Civil Enginneering</p>
                    </Col>
                    <Col xs={12} md={3}>
                      <h6>2003 - 2011</h6>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <h2>Interested in</h2>
                  <Row>
                    <Col>
                      <p>Sport</p>
                      <p>Travelling</p>
                      <p>Driving</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Line */}
          <hr />

          {/* Experience */}
          <div className="experience">
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <h2>Experience</h2>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>G. T. Nordics AS</h6>
                      <p>Location: Notodden, Norway</p>
                      {/* <p>Position: Front-end Development</p> */}
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>Mars 2023 - Present</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>Wera AS</h6>
                      <p>Location: Porsgrunn, Norway</p>
                      <p>Position: Front-end Development</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>August 2022 - Mars 2023</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>Freelancer</h6>
                      <p>Location: Notodden, Norway</p>
                      <p>Position: Front-end Development</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>December 2020 - Ausust 2022</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>Municipality of Mitrovica</h6>
                      <p>Location: Mitrovica, Kosovo </p>
                      <p>Position: Civil engineer</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>June 2013 - February 2018</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>Info & Telecommunication</h6>
                      <p>Location: Pristina, Kosovo </p>
                      <p>Position: Front-end Development</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>November 2016 - January 2017</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>MAK Building</h6>
                      <p>Location: Vushtrri, Kosovo </p>
                      <p>Position: Civil engineer</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>November 2011 - December 2012</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6>LIN Project</h6>
                      <p>Location: Mitrovica, Kosovo </p>
                      <p>Position: Civil engineer</p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h6>September 2006 - February 2007</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}

      <img src={AboutBanner} alt="AboutBanner" />
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
  padding: 50px 0;

  .info {
    color: #fff;
    padding-bottom: 50px;
    max-width: 870px;
    font-size: 25px;
    margin: 0 auto;
    line-height: 1.1;
  }

  span {
    border: none;
    background: transparent;
    font-size: 25px;
    font-family: "Gotu", sans-serif !important;
    text-decoration: underline;
    cursor: pointer;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background: linear-gradient(#17373b, #20555b);
    transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transform: translateX(-100%);
    z-index: -1;

    h2 {
      color: #f8dd4e;
      text-align: left;
      padding: 25px;
    }
  }
  .show-sidebar {
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 70%;
    // height: 100%;
    /* background: red; */
    transition: all 2s;
    -moz-transition: all 2s;
    -webkit-transition: all 2s;
    -o-transition: all 2s;
    transform: translateX(0);
    z-index: 999;
    overflow-y: scroll;
    padding-bottom: 25px;

    button {
      background: transparent;
      border: none;
      color: #f8dd4e;
      font-size: 30px;
      position: absolute;
      right: 25px;
      top: 25px;
      cursor: pointer;
    }
  }

  .bio {
    text-align: left;
    color: #fff;
    font-size: 13px;
    padding: 0 25px;

    .row {
      align-items: center;
    }

    img {
      height: 140px;
      width: 140px;
      border-radius: 50%;
    }

    p {
      font-size: 0.9rem !important;
      margin-bottom: 0.4rem;
    }
  }

  .logos {
    margin: 50px 0;
    background: #e3efeb;
    padding: 10px 0;

    .row {
      justify-content: space-around;
      align-items: center;
      display: flex;
    }

    img {
      height: 70px;
    }

    .js {
      img {
        height: 55px;
      }
    }

    .sass {
      //   align-items: center;
      //   display: flex;

      img {
        height: 45px;
        width: 105%;
      }
    }

    .react {
      img {
        height: 45px;
        width: 93%;
      }
    }

    .vsc {
      width: 5%;
      img {
        height: 45px;
        width: 81%;
      }
    }

    .xd {
      img {
        height: 55px;
      }
    }

    .bootstrap {
      img {
        height: 50px;
      }
    }

    .github {
      img {
        height: 90px;
      }
    }

    .wp {
      width: 6%;
      img {
        height: 90px;
      }
    }
  }

  //   Skills
  .skills {
    text-align: left;
    color: #fff;
    font-size: 13px;
    padding: 0 10px;

    .row {
      display: flex !important;
      justify-content: space-between;
    }

    .col-md-8 {
      width: 100%;
      margin-right: 200px;
    }

    .col-md-4 {
      width: 50%;
    }

    h2 {
      padding-left: 0;
    }

    p {
      margin-bottom: 0.2rem;
    }
  }

  hr {
    background-color: #fff !important;
    height: 1px !important;
    margin: 40px 25px 20px !important;
  }

  // Education
  .education {
    text-align: left;
    color: #fff;
    font-size: 13px;
    padding: 0 10px;

    .row {
      display: flex !important;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    .row:last-of-type {
      margin-bottom: 0;
    }

    .col-md-9 {
      width: 100%;
      margin-right: 200px;
    }

    .col-md-3 {
      width: 50%;
    }
    .col-md-4 {
      width: 27%;
    }

    h2 {
      padding-left: 0;
    }

    h6 {
      font-size: 1rem !important;
      margin-bottom: 0.2rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  // Experience
  .experience {
    text-align: left;
    color: #fff;
    font-size: 13px;
    padding: 0 10px;

    h2 {
      padding-left: 0;
    }

    h6 {
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }

    p {
      margin-bottom: 0;
    }

    .row {
      display: flex !important;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .row:last-of-type {
      margin-bottom: 0;
    }

    .col-md-8 {
      width: 100%;
      margin-right: 450px;
    }

    .col-md-4 {
      width: 140%;
      text-align: right;
    }
  }

  img {
    height: 350px;
    width: 100%;
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
  }

  //   Media Query

  @media screen and (max-width: 768px) {
    text-align: left;

    .bio {
      padding: 0 10px;

      .col-md-4 {
        padding-bottom: 0px;
        padding-top: 20px;
      }
    }

    .info {
      padding: 0 20px 50px;
    }

    .logos {
      display: none;
    }

    .skills {
      .row {
        display: block !important;
      }
    }

    .education {
      .row {
        display: block !important;
      }

      .col-md-4 {
        width: 100%;
      }
    }

    .experience {
      .col-md-4 {
        text-align: left;
      }

      .row {
        margin-bottom: 40px;
      }
    }

    img {
      height: auto;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0;

    .sidebar {
      width: 100%;
    }

    hr {
      display: none;
    }
  }
`;
