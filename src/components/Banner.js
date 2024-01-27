import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";

function Banner() {
  return (
    <Wrapper>
      <div className="background">
        <div className="test">
          <img src={Logo} alt="logo" className="logo" />
          <div className="menu">
            {/* <NavLink to="projects" id='projects'>projects.</NavLink>
                        <NavLink to="about">about.</NavLink>
                        <NavLink to="contact">contact.</NavLink> */}
            <a href="#projects">projects.</a>
            <a href="#about">about.</a>
            <a href="#contact">contact.</a>
          </div>
        </div>
        <div className="ground"></div>
      </div>
      <div className="container">
        <div className="left-section">
          <svg
            className="svgimg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="51.5 -15.288 385 505.565"
          >
            <g className="bench-legs">
              <path
                d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111
                    v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z"
              />
            </g>
            <g className="top-bench">
              <path
                d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
                    c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583
                    c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723
                    c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028
                    c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"
              />
            </g>
            <g className="bottom-bench">
              <path
                d="M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86
                    c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z"
              />
              <path d="M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z" />
            </g>
            <g id="lamp">
              <path
                className="lamp-details"
                d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917
                    c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z"
              />
              <path
                className="lamp-accent"
                d="M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861
                    c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z"
              />

              <circle
                className="lamp-light"
                cx="119.676"
                cy="44.22"
                r="40.51"
              />
              <path
                className="lamp-details"
                d="M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889
                    S149.306,67.362,149.306,71.528z"
              />
              <radialGradient
                className="light-gradient"
                id="SVGID_1_"
                cx="119.676"
                cy="44.22"
                r="65"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFFFFF", stopOpacity: "1" }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#EDEDED", stopOpacity: "0.5" }}
                >
                  <animate
                    attributeName="stop-opacity"
                    values="0.0; 0.5; 0.0"
                    dur="5000ms"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "#EDEDED", stopOpacity: "0" }}
                />
              </radialGradient>
              <circle
                className="lamp-light__glow"
                fill="url(#SVGID_1_)"
                cx="119.676"
                cy="44.22"
                r="65"
              />
              <path
                className="lamp-bottom"
                d="M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869
                    c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z"
              />
            </g>
          </svg>
        </div>
        <div className="right-section">
          <div className="inner-content">
            <h1 className="heading">Front-end Development!</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.section`
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background: linear-gradient(#0c0e10, #20555b);
  }

  .logo {
    position: relative;
    width: 100px;
    cursor: pointer;
    z-index: 99;
  }

  .menu {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 99;

    a {
      color: #fff;
    }

    a:hover {
      color: #344960;
    }
  }

  .ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25vh;
    background: #0c0e10;
  }

  .container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding-bottom: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .left-section,
  .right-section {
    position: relative;
    /*text-align: center !important;*/
  }

  .left-section {
    width: 50%;
  }

  .inner-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .heading {
    color: #fff;
    text-align: center;
    max-width: 480px;
    font-size: 3.2em;
    line-height: 1.15em;
    padding: 0 1rem;
    margin: 0 auto;
  }

  /* Right side*/

  .right-section {
    width: 50%;
  }

  .svgimg {
    position: absolute;
    bottom: 0;
    padding-top: 23vh;
    padding-left: 1vh;
    max-width: 100%;
    max-height: 100%;
  }

  .svgimg .bench-legs {
    fill: #0c0e10;
  }

  .svgimg .top-bench,
  .svgimg .bottom-bench {
    stroke: #0c0e10;
    stroke-width: 1px;
    fill: #5b3e2b;
  }

  .svgimg .bottom-bench path:nth-child(1) {
    fill: darken(#5b3e2b, 7%);
  }

  .svgimg .lamp-details {
    fill: #202425;
  }

  .svgimg .lamp-accent {
    fill: lighten(#202425, 5%);
  }

  .svgimg .lamp-bottom {
    fill: linear-gradient(#202425, #0c0e10);
  }

  .svgimg .lamp-light {
    fill: #efefef;
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 1rem #fefefe;
    }

    50% {
      text-shadow: 0 0 1.85rem #ededed;
    }

    100% {
      text-shadow: 0 0 1rem #fefefe;
    }
  }

  @media screen and (max-width: 770px) {
    .menu {
      padding: 0 20px;
    }

    .ground {
      height: 0vh;
    }

    .container {
      flex-direction: column;
      padding-bottom: 0vh;
      width: 100%;
    }

    .left-section {
      width: 100%;
      height: 70%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .inner-content {
      position: relative;
      padding: 1rem 0;
    }

    .heading {
      font-size: 2.3em;
      line-height: 1.15;
      max-width: 300px;
      padding-top: 60px;
    }

    .right-section {
      width: 100%;
      height: 60%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .svgimg {
      max-height: 70%;
      left: 15%;
      padding: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .heading {
      font-size: 1.5em;
    }
  }
`;
