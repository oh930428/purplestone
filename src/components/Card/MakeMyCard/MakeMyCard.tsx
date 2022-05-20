import styled from 'styled-components';

import CardImage from '../../../assets/Images/bg-card.png';
import DigramImage from '../../../assets/Images/bg-digram.png';

import { colors, fonts } from 'styles';
import { useSelector } from 'react-redux';
import { CoffeeOptionType } from 'components';
import { RootState } from '../../../store/index';
import { useState, useRef, useEffect } from 'react';
import { useFetchMyCardQuery } from 'store/api/myCard';

const MakeMyCard = () => {
  const [content, setContent] = useState<string>('');
  const [width, setWidth] = useState<number>(0);
  const span = useRef<HTMLSpanElement>(null);

  const selectedOption = useSelector<RootState>(state => state.myCardReducer);

  const { data, isLoading, isError, isSuccess } = useFetchMyCardQuery();

  useEffect(() => {
    if (!content) {
      setContent('이름을 입력하세요');
    }

    span.current && setWidth(span.current.offsetWidth);
  }, [content]);

  const changeHandler = (e: { currentTarget: HTMLInputElement }) => {
    setContent(e.currentTarget.value);
  };

  if (isSuccess) {
    return (
      <Container Card={CardImage}>
        <Header width={width}>
          <span className="hide" ref={span}>
            {content}
          </span>
          <input
            type="text"
            placeholder={content}
            autoFocus
            onChange={changeHandler}
          />
        </Header>

        <Digram Digram={DigramImage}></Digram>

        {data.coffeeOption.map((option, index) => (
          <CoffeeOptionType
            key={index}
            option={option}
            selectedOption={selectedOption}
          />
        ))}
      </Container>
    );
  }

  if (isLoading) {
    return (
      <div>
        <div>로딩중..</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div>데이터를 불러오지 못했음</div>
      </div>
    );
  } else {
    return (
      <div>
        <div>NotFound</div>
      </div>
    );
  }
};

export default MakeMyCard;

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
    color: ${colors.Primary_01};
    ${fonts.Hero3}
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
