import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story-area">
      <div className="our-story-area-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={5} className="d-flex align-items-center justify-center">
              <div className="our-story-title">
                <h2>Our Story</h2>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="our-story-details">
                <p>Melissa Bentivoglio and Lee Belzberg have paired together their extensive backgrounds of elite fitness instruction and entrepreneurship to bring you Frame—a groundbreaking approach to pilates disrupting the traditional at-home <br /> fitness market. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurStory;