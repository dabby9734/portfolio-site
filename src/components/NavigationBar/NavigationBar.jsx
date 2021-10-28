import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import logo from '../../images/dabby_teal_square.jpg';

const NavigationBar = () => {
  return (
    <div>
      <Fade top>
        <Navbar bg="light" expand="lg" className="footer-scroll-up-target">
          <Container>
            {/* <Navbar.Brand href="#home">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
          dabby
        </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog-homepage">Blog</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fade>
    </div>
  );
};

export default NavigationBar;
