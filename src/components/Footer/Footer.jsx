import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { footerData } from '../../mock/data';

const Footer = () => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;
  // const { isEnabled } = githubButtons;
  // console.log(footerData.networks);
  const { networks } = footerData;
  // console.log(networks);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              console.log(network);
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || '/'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} dabby - Source code on{' '}
          <a
            href="https://github.com/dabby9734/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
