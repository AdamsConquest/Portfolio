"use client";
import Image from "next/image";
import Background from "./components/background/background";
import Name from './components/header/name';
import AboutMe from './components/aboutMe/aboutme';
import Projects from './components/projects/projects';
import Attributes from './components/Skills/skills';
import Navigation from './components/nav/nav';


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
        <Projects />
      </section>
      
      <section id="skills" style={{ height: '100vh', position: 'relative' }}>
        <Attributes />
      </section>
    </div>
  );
}
