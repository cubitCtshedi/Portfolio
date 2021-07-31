import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.8rem;
    font-family: 'Montserrat Semibold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'This is the Title',
  desc = 'This is the Desc',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}

        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStyles>
  );
}
