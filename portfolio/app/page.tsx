"use client";
import { ParticlesDemo as Background } from './components/background/background';
import Name from './components/header/name';
import AboutMe from './components/aboutMe/aboutme';
import Skills from './components/skills/skills';
import Navigation from './components/nav/nav';
import { AnimatedTabsDemo } from './components/projects/projectDisplay';
import ContactMe from './components/contactMe/contactMe';


export default function Home() {
  return (
    
    <div className="portfolio-wrapper">
      <Background />
      <Navigation />
      
      <section id="home" className="section-container section-home">
        <Name />
      </section>
      
      <section id="about" className="section-container">
        <AboutMe />
      </section>
      
      <section id="projects" className="section-container section-projects">
        <AnimatedTabsDemo />
      </section>
      
      <section id="skills" className="section-container section-skills">
        <Skills />
      </section>

      <section id="contact" className="section-container">
        <ContactMe />
      </section>
    </div>
  );
}
