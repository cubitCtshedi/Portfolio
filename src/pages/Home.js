import React from 'react';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import ProjectsSection from '../Components/ProjectsSection';
// import TestimonialsSection from '../Components/TestimonialsSection';
import ContactBanner from '../Components/ContactBanner';
import HeroSection from '../Components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
