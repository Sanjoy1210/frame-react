import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo/frame.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="menu-item">The Reformer</Nav.Link>
            <Nav.Link href="#link" className="menu-item">Workouts</Nav.Link>
            <Nav.Link href="#link" className="menu-item">About</Nav.Link>
            <Nav.Link href="#link" className="menu-item nav-icons">
              <i className="far fa-user-circle"></i>
            </Nav.Link>
            <Nav.Link href="#link" className=" menu-item nav-icons">
              <i className="fas fa-shopping-bag"><sup className="p-2">2</sup></i>
            </Nav.Link>
            <Nav.Link href="#link" className="shop-now-btn">shop now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;