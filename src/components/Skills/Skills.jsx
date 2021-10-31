import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { skillsData } from '../../mock/data';
import Title from '../Title/Title';

const Skills = () => {
  const computingSkills = skillsData[0];
  const languageSkills = skillsData[1];
  const softSkills = skillsData[2];

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
          <div className="grid">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__skills computing">
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <h3>Computing 🧑🏻‍💻</h3>
                  {computingSkills.map((skill) => (
                    <div key={skill.id} className="skills-wrapper__skills-item">
                      <h4 className="skills-wrapper__skills-item__text">{skill.name}</h4>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </Fade>
              </div>
            </Fade>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__skills languages">
                <h3>Languages 🌎</h3>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  {languageSkills.map((skill) => (
                    <div key={skill.id} className="skills-wrapper__skills-item">
                      <h4 className="skills-wrapper__skills-item__text">{skill.name}</h4>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </Fade>
              </div>
            </Fade>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__skills soft-skills">
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <h3>Soft Skills 🙌</h3>
                  {softSkills.map((skill) => (
                    <div key={skill.id} className="skills-wrapper__skills-item">
                      <h4 className="skills-wrapper__skills-item__text">{skill.name}</h4>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
