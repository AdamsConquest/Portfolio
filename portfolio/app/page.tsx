"use client";
import { ParticlesDemo as Background } from './components/background/background';
import Name from './components/header/name';
import AboutMe from './components/aboutMe/aboutme';
import Skills from './components/skills/skills';
import Navigation from './components/nav/nav';
import { AnimatedTabsDemo } from './components/projects/projectDisplay';


export default function Home() {
  return (
    
    <div>
      <Background />
      <Navigation />
      
      <section id="home" style={{ height: '100vh', position: 'relative' }}>
        <Name />
      </section>
      
      <section id="about" style={{ height: '100vh', position: 'relative' }}>
        <AboutMe />
      </section>
      
      <section id="projects" style={{ height: '100vh', position: 'relative' }}>
        <AnimatedTabsDemo />
      </section>
      
      <section id="skills" style={{ height: '100vh', position: 'relative' }}>
        <Skills />
      </section>
    </div>
  );
}
