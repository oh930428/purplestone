import styled from 'styled-components';
import UserCardOption from './UserCardOption';
import CardImage from '../../../assets/Images/bg-card.png';
import DigramImage from '../../../assets/Images/bg-digram.png';

import { colors, fonts } from 'styles';
import { useState, useRef, useEffect, useCallback } from 'react';

interface Props {
  userMyCard: any;
  userName: string;
  setUserName: (value: string) => void;
}

const CardUser = ({ userMyCard, userName, setUserName }: Props) => {
  const [width, setWidth] = useState<number>(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!userName) {
      setUserName('이름을 입력하세요');
    }
    textRef.current && setWidth(textRef.current.offsetWidth);
  }, [setUserName, userName]);

  const changeHandler = useCallback(
    (e: { currentTarget: HTMLInputElement }) => {
      setUserName(e.currentTarget.value);
    },
    [setUserName]
  );

  if (userMyCard) {
    return (
      <Container Card={CardImage}>
        <Header width={width}>
          <span ref={textRef} className="hide">
            {userName}
          </span>
          <input
            maxLength={7}
            type="text"
            placeholder={userName}
            autoFocus
            onChange={changeHandler}
          />
        </Header>

        <Digram Digram={DigramImage}>
          <div className="card-option">
            {Object.keys(userMyCard).map((key, index) => (
              <UserCardOption key={index} option={userMyCard[key]} />
            ))}
          </div>
        </Digram>
      </Container>
    );
  } else {
    return <div>로딩</div>;
  }
};

export default CardUser;

const Container = styled.div<{ Card: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72rem;
  height: 55rem;
  background-image: ${props => `url(${props.Card})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = styled.header<{ width: number }>`
  .hide {
    ${fonts.Hero3}
    position: absolute;
    opacity: 0;
    z-index: -100;
  }

  input {
    width: ${props => props.width}px;
    max-width: 46rem;
    margin-top: 5.5rem;
    ${fonts.Hero3}
    color: ${colors.Primary_01};
    background: linear-gradient(to top, #f5f2c2 50%, transparent 50%);
    border: 0;

    ::placeholder {
      color: ${colors.Primary_01};
      opacity: 0.9;
    }
  }
`;

const Digram = styled.figure<{ Digram: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 54%;
  width: 100%;
  height: 24rem;
  transform: translateY(-50%);
  background-image: ${props => `url(${props.Digram})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
