import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <div className="footer__col1__title">
            <h1>Thebe Setshedi</h1>
            <PText>
              I am a web designer and developer from Johannesburg,South Africa.
              I create professional websites. I love art and always try to show
              unique views to the audience through my designs
            </PText>
          </div>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Nav"
            links={[
              { title: 'Home', path: '/', type: 'Link' },
              { title: 'About', path: '/about', type: 'Link' },
              { title: 'Projects', path: '/project', type: 'Link' },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact info"
            links={[
              {
                title: '+27 78 141 4736',
                path: 'tel:+27 78 141 4736',
              },
              {
                title: 'setshedi.thebe@gmail.com',
                path: 'mailto:setshedi.thebe@gmail.com',
              },
              {
                title: 'Fourways',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4 ">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'instagram',
                path: 'www.google.com',
              },
              {
                title: 'LinkedIn',
                path: 'www.linkedin.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText> © Thebe Setshedi</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
