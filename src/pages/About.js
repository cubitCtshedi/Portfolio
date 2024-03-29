import React from 'react';
import styled from 'styled-components';
import PText from '../Components/PText';
// import Button from '../Components/Button';
import AboutImg from '../assets/images/aboutME2.jpg';
import AboutInfoItem from '../Components/AboutInfoItem';
import ContactBanner from '../Components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Thebe Setshedi</span>
            </p>
            <h2 className="about__heading">A Web Designer and Developer</h2>
            <div className="about__info">
              <PText>
                As a rare hybrid of designer and developer, I understand the
                visual, experimental, and functional aspects of creating for the
                web. my mission is to bring more excellence, creativity and good
                ideas into the world through web design.
                <br />
                <br />
                Although I am familiar with using frameworks, my websites are
                mainly hand-coded with HTML5, CSS3, Bootstrap and JavaScript.
                <br />
                <br />
                With a heavy emphasis on "progressive optimization", I find
                innovative ways to push the boundaries of a website's front-end
                code without compromising browser support and performance.
              </PText>
            </div>
            {/* <Button btnText="Download Resume" btnLink="#" /> */}
          </div>
          <div className="right">
            <img src={AboutImg} alt="about" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">EDUCATION</h1>
            <AboutInfoItem title="Online" items={['Meta-FrontEnd Developer']} />

            <AboutInfoItem title="College" items={['IIE Rosebank College']} />

            <AboutInfoItem
              title="School"
              items={['Geelhout Park Secondary School']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">SKILL</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'Bootstrap', 'React', 'javascipt']}
            />
            <AboutInfoItem title="BackEnd" items={['C#', 'MySQL', 'API']} />
            <AboutInfoItem
              title="Design"
              items={['Creative Suite', 'Adobe XD', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="2021-Current"
              items={['Front End Developer at Contactable']}
            />
            <AboutInfoItem
              title="2020-2021"
              items={['Web designer and developer at DigitalMall']}
            />
            <AboutInfoItem
              title="2019-2020"
              items={['Support technician  at DigitalMall']}
            />
            <AboutInfoItem
              title="2017-2019"
              items={['Web and Graphic Designer at SchoolMedia']}
            />

            <AboutInfoItem title="2015-2017" items={['Freelancing']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
