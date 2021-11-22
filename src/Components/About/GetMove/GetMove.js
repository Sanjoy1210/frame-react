import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './GetMove.css';

const GetMove = () => {
  return (
    <div className="get-move-area">
      <div className="get-move-wrapper">
        <Container>
          <div className="get-move">
            <h1>Get Moving</h1>
            <Button className="shop-now-btn">Shop now</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GetMove;