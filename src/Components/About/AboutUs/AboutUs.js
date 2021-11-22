import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUsImg from '../../../images/about-us/about-us.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-section-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div className="about-us-img w-100">
                <img src={aboutUsImg} alt="" />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="about-us-info">
                <div>
                  <h4 className="title">
                    Melissa Bentivoglio CEO & Co-Founder
                  </h4>
                  <p>
                    Melissa Bentivoglio is a classically trained ballet dancer and a renowned pilates and fitness instructor. Melissa credits her dedication to pilates as having changed her life after years of elite level performance. In 2018, she designed her own proprietary reformer for use in her own studio. By launching Frame, she hopes to make pilates more widely available and accessible, so that everyone has a chance to improve their quality of life.
                  </p>
                </div>
                <div>
                  <h4 className="title">
                    Lee Belzberg Co-Founder
                  </h4>
                  <p>

                    Following in the footsteps of his family, Lee Belzberg continues the Belzberg legacy with Frame. He seeks to combine his deep expertise of wealth management, real-estate banking, and private equity with his passion for health and wellness. Lee is excited to venture into new frontiers and take his strategic vision and entrepreneurial spirit to the digital-fitness startup space.

                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={12} md={4}>
              <div className="details">
                <h4 className="title">Mark Mastrov <br /> Investor, Board of Director</h4>
                <p>Mark Mastrov is an American businessman who was born in Oakland, CA. In addition to serving on the board and investing in Frame, he is the founder and former CEO of 24-Hour Fitness as well as many other fitness ventures worldwide. Mastrov is also a member of the Sacramento Kings ownership group.</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="offset-md-2">
              <div className="details">
                <h4 className="title">Michael Bruno <br /> Investor</h4>
                <p>
                  Michael Bruno is the owner and CEO of Core Health and Fitness. Core Health & Fitness is the world’s largest privately-held marketer and distributor of commercial fitness solutions to health clubs, community recreational centers, hotels, government, educational facilities and more.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;