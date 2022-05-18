import styled from 'styled-components';
import circle from '../../assets/Images/bg-circle.png';
import circleActive from '../../assets/Images/bg-circle-active.png';
import { useState } from 'react';
import { CoffeeOptionProps } from 'types/myCard.types';

interface Props {
  option: CoffeeOptionProps;
}

const CoffeeOption = ({ option }: Props) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const onClickToggle = () => setIsOn(!isOn);

  return (
    <Container
      className={option.name}
      circle={circle}
      circleActive={circleActive}
      isOn={isOn}
      onClick={onClickToggle}
    >
      <img
        src={require(`../../assets/Icons/${option.image}`)}
        alt={option.name}
      />
    </Container>
  );
};

export default CoffeeOption;

const Container = styled.article<{
  circle: string;
  circleActive: string;
  isOn: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  cursor: pointer;

  background-image: ${props =>
    props.isOn ? `url(${props.circleActive})` : `url(${props.circle})`};

  img {
    width: 9rem;
    height: 9rem;
    object-fit: contain;
  }
`;
