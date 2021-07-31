import React from 'react';
import AboutSection from '../Components/AboutSection';
import HeroSection from '../Components/HeroSection';
import ServicesSection from '../Components/ServicesSection';
import ProjectSection from '../Components/ProjectSection';
import ContactBanner from '../Components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactBanner />
    </div>
  );
}
