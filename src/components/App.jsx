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
  experienceData,
  achievementsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  // reminder for future me:
  // check if {} or [] is needed for the state

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setExperiences([...experienceData]);
    setAchievements([...achievementsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, experiences, achievements, contact, footer }}
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
