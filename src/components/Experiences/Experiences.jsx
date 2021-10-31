import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';

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
        <div className="experiences-wrapper">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <div className="experiences-wrapper__title">
              <Title title="Experiences" />
            </div>
          </Fade>
          <div className="experiences-wrapper__experiences">
            <Row lg="1">
              {experiences.map((experience) => (
                <Col key={experience.id}>
                  <Row md={10}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={600}
                      distance="30px"
                    >
                      <div className="experiences-wrapper__experiences-item">
                        <Col md={7}>
                          <div className="experiences-wrapper__experiences-item__text">
                            <Fade
                              left={isDesktop}
                              bottom={isMobile}
                              duration={1000}
                              delay={800}
                              distance="30px"
                            >
                              <div className="experiences-wrapper__experiences-item__text-title">
                                <h3>{experience.title}</h3>
                              </div>
                            </Fade>
                            <Fade
                              left={isDesktop}
                              bottom={isMobile}
                              duration={1000}
                              delay={700}
                              distance="30px"
                            >
                              <div className="experiences-wrapper__experiences-item__text-description">
                                <p>{experience.description}</p>
                              </div>
                            </Fade>
                          </div>
                        </Col>
                        <Col md={5}>
                          <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={700}
                            distance="30px"
                          >
                            <div className="experiences-wrapper__experiences-item__img">
                              {/* <img filename={experience.img} alt={"Image from this experience" || experience.imgDescription} /> */}
                              <ExperienceImg
                                alt={experience.imgDescription || 'Image from this experience'}
                                filename={experience.img}
                              />
                            </div>
                          </Fade>
                        </Col>
                      </div>
                    </Fade>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
