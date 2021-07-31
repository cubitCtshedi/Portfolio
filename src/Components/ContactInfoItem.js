import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStylees = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    width: 50px;
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'this is an info',
}) {
  return (
    <ItemStylees>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStylees>
  );
}
