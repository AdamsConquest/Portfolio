"use client";
import Image from "next/image";
import LightRays from './components/background/LightRays';
import Name from './components/header/name';
import AboutMe from './components/aboutMe/aboutme';


export default function Home() {
  return (
    <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
        <Name/>
        <AboutMe/>
        
    </div>
  );
}
