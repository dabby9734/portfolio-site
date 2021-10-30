import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import logo from '../../images/favicon.png';

const NavigationBar = () => {
  return (
    <div>
      <Fade top>
        <Navbar expand="lg" className="footer-scroll-up-target navbar-custom">
          <Container>
            <Navbar.Brand>
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog-homepage">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fade>
    </div>
  );
};

export default NavigationBar;
