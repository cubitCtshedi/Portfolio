import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .section-title {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <SectionTitle heading="Services" subheading="What I do" />

      <div className="container">
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Design"
            desc="I focus on the three pillars: Content Structure, design patterns, and thoughtful interaction."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Front-End"
            desc="Product Innovation? Let’s code it."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="UI/UX DESIGN"
            desc="seamless design, seamless experience."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
