import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import NavigationBar from './NavigationBar/NavigationBar';
import Skills from './Skills/Skills';
import Experiences from './Experiences/Experiences';
import Achievements from './Achievements/Achievements';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  skillsData,
  experienceData,
  achievementsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSkills([...skillsData]);
    setExperiences([...experienceData]);
    setAchievements([...achievementsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, skills, experiences, achievements, contact, footer }}
    >
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Achievements />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
