import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo/frame.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-area-wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} md={3}>
              <div className="contact-info">
                <h4>Contact</h4>
                <p>info@framefitness.com</p>
                <p>Frame Innovative Technologies Corp. <br />
                  265 S. Western Avenue <br />
                  P.O. Box #741940 <br />
                  Los Angeles, CA 90004-9998</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="brand-logo">
                <img src={logo} alt="brand logo" />
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="company-policy">
                <p>Terms and Conditions</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="social-links">
                <div className="icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;