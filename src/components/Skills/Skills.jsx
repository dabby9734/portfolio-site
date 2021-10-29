import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <div className="skills-wrapper__title">
              <Title title="My Skills" />
            </div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="skills-wrapper__skills">
              {skills.map((skill) => (
                <div key={skill.id} className="skills-wrapper__skills-item">
                  <h3 className="skills-wrapper__skills-item__text">{skill.name}</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
