import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext);
  const placeholderImg =
    'data:image/jpeg;base64,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';

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

          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="experiences-wrapper__experiences">
              {experiences.map((experience) => (
                <div className="experiences-wrapper__experiences__item">
                  <div className="experiences-wrapper__experiences__item-title">
                    <h3>THIS SECTION IS WORK IN PROGRESS</h3>
                    {/* <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4> */}
                  </div>
                  <div className="experiences-wrapper__experiences__item__info-wrapper">
                    <div className="experiences-wrapper__experiences__item__info-wrapper-description">
                      <p>{experience.description}</p>
                    </div>
                    <div className="experiences-wrapper__experiences__item__info-wrapper-img">
                      <img src={placeholderImg} alt="experience" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          {/* {experiences.map((item) => {
            return (
              <Row key={item.id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{'Project Title'}</h3>
                      <div>
                        <p>
                          {
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'
                          }
                        </p>
                        <p className="mb-4">{''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={'#'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg
                              alt="placeholder img"
                              filename="data:image/jpeg;base64,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"
                            />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })} */}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
