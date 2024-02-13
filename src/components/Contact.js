import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { FaPhoneAlt, FaEnvelope, FaGlobeEurope } from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .sendForm(
        "service_gt4de4j",
        "template_xoov5ia",
        form.current,
        "eYboczHSuA6J2Md1t"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
          // alert("Your email is sent successfully!");
          // <Alert variant="success">Your message was successful!</Alert>;
          e.target.reset();
          setSubmitted(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Wrapper id="contact">
      <h2 className="subheading">contact.</h2>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={5}>
            <h4>Let's get in touch!</h4>
            <p>I'm open for any suggestion or just to have a chat!</p>
            <div className="phone">
              <span>
                <FaPhoneAlt />
                Phone: + 47 930 77 286
              </span>
            </div>
            <div className="email">
              <span>
                <FaEnvelope />
                Email: florent.hajdari@hotmail.com
              </span>
            </div>
            <div className="website">
              <span>
                <FaGlobeEurope />
                Website: https://florent-hajdari.vercel.app/
              </span>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <form ref={form} onSubmit={sendEmail}>
              <h4>Contact me!</h4>
              {submitted && (
                <Alert variant="success">Your message was successful!</Alert>
              )}
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="from_phone"
                placeholder="Phone"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
              />
              <input type="submit" value="Send Message" />
            </form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  padding: 50px 0;

  .row {
    max-width: 1140px;
    display: flex;
    margin: 0 auto;
    background: #fff;
    text-align: left;
  }

  h4 {
    font-size: 1.8rem;
  }

  .col-md-5 {
    background-color: #20555b;
    padding: 80px 50px;
    color: #fff;
    width: 50%;
  }

  .col-md-7 {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .row {
      display: block;
    }

    .col-md-5 {
      width: 100%;
      padding: 40px 20px;
    }

    .col-md-7 {
      padding: 40px 20px;
    }
  }

  .col-md-5.col-12 {
    p {
      margin: 15px 0 50px;
      line-height: 1.3;
    }
    span {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      svg {
        border: 1px solid #fff;
        border-radius: 50%;
        margin-right: 15px;
        padding: 10px;
        font-size: 40px;
      }
    }
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    padding: 80px;

    .alert-success {
      width: 100%;
    }

    input {
      width: 100%;
      height: 45px;
      padding: 7px;
      outline: none;
      border-radius: 0;
      border: 1px solid #20555b;
      margin-top: 1rem;

      &:focus {
        border: 1px solid #000;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 0;
      border: 1px solid #20555b;
      margin-top: 1rem;

      &:focus {
        border: 1px solid #000;
      }
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background-color: #20555b;
      color: #fff;
      border: none;
      width: fit-content;
      padding: 5px 15px;

      :hover {
        background-color: #296f77;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    form {
      padding: 40px 0;

      input[type="submit"] {
        width: 100%;
      }
    }
  }
`;
