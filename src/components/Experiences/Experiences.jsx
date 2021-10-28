import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experiences">
      <Container>
        <Title title="Experiences" />
        <div className="experiences-wrapper">
          {experiences.map((experience) => (
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
              key={experience.id}
            >
              <div className="experiences-wrapper__item">
                <div className="experiences-wrapper__item-container">
                  <div className="experiences-wrapper__item-title">
                    <h3>Lorem Ipsum</h3>
                    {/* <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4> */}
                  </div>
                  <div className="experiences-wrapper__item-description">
                    {/* <p>{experience.description}</p> */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus tincidunt
                      magna et commodo. Suspendisse vestibulum suscipit sem a varius. Praesent
                      convallis justo eget mi imperdiet ultricies. Nullam et est condimentum,
                      malesuada mauris ut, euismod tellus. Maecenas vel ligula viverra, egestas
                      lectus eget, facilisis nisi. Cras feugiat tellus in vulputate auctor. Morbi
                      viverra nisl a magna malesuada, porta pharetra metus pharetra. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
                      sed felis et turpis porttitor mollis at id odio.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
