import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import logo from '../../images/navbar-logo-30x30.png';

const NavigationBar = () => {
  return (
    <div>
      <Fade top>
        <Navbar expand="sm" className="footer-scroll-up-target navbar-custom">
          <Container>
            <Navbar.Brand>
              <img alt="" src={logo} className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog-homepage">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <div className="theme-toggler-wrapper">
                      <label htmlFor="checkbox" className="theme-toggler-icons">
                        <input
                          type="checkbox"
                          id="checkbox"
                          onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                          checked={theme === 'dark'}
                        />
                        <span className="theme-icon-sun">☀️</span>
                        <span className="theme-icon-moon">🌙</span>
                      </label>
                    </div>
                  )}
                </ThemeToggler>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fade>
    </div>
  );
};

export default NavigationBar;
