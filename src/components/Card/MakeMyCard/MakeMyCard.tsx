import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { colors, fonts } from 'styles';
import Card from '../../../assets/Images/bg-card.png';
import Digram from '../../../assets/Images/bg-digram.png';
// import { MakeMyCardProps } from '../../../types/makeMyCard.type';

const MakeMyCard = ({
  bgCard,
  bgDigram,
  brand,
  temperature,
  beans,
  coffee,
  bottle,
}: any) => {
  const [content, setContent] = useState<string>('');
  const [width, setWidth] = useState<number>(0);
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!content) {
      setContent('이름을 입력하세요');
    }

    span.current && setWidth(span.current.offsetWidth);
  }, [content]);

  const changeHandler = (e: { currentTarget: HTMLInputElement }) => {
    setContent(e.currentTarget.value);
  };

  return (
    <Container Card={Card}>
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

      <Dirgram Digram={Digram}>
        {/* <img
          className="digram-thumbnail"
          src={bottle.thumbnail}
          alt={bottle.name}
        /> */}
      </Dirgram>

      <div className="barnd col">
        <div className="name">dddd</div>
        <p className="description">dddd</p>
      </div>

      <div className="beans col">
        <div className="name">dddd</div>
        <p className="description">dddd</p>
      </div>

      <div className="bottle col">
        <div className="name">dddd</div>
        <p className="description">dddd</p>
      </div>

      <div className="coffee col">
        <div className="name">test</div>
        <p className="description">test</p>
      </div>

      <div className="temperature col">
        <div className="name">test</div>
        <p className="description">test</p>
      </div>
    </Container>
  );
};

export default MakeMyCard;

const Container = styled.div<{ Card: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 423px;
  background-image: ${props => `url(${props.Card})`};
  background-repeat: no-repeat;
  background-size: cover;
  .col {
    position: absolute;
  }
  p {
    margin: 0;
  }
  .barnd {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 102px;
    left: 229px;
    .name {
      margin-right: 10px;
    }
    .description {
      position: relative;
      top: 1px;
    }
  }
  .temperature {
    top: 177px;
    left: 37px;
    width: 131px;
    text-align: right;
  }
  .beans {
    top: 172px;
    right: 36px;
    width: 133px;
    text-align: left;
  }
  .coffee {
    bottom: 41px;
    left: 141px;
    width: 121px;
  }
  .bottle {
    bottom: 54px;
    right: 113px;
    width: 114px;
  }
  .name {
    ${fonts.Headline4}
    color: #614E32;
  }
  .description {
    ${fonts.MediumCaption}
  }
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
    margin-top: 50px;
    color: ${colors.Primary_01};
    outline: 0;
    border: 0;
    background: 0;
    background: linear-gradient(to top, #f5f2c2 50%, transparent 50%);
    ${fonts.Hero3}
    ::placeholder {
      color: ${colors.Primary_01};
      opacity: 0.7;
    }
  }
`;

const Dirgram = styled.figure<{ Digram: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 190px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-image: ${props => `url(${props.Digram})`};
  background-size: contain;
  background-repeat: no-repeat;
  .digram-thumbnail {
    width: 90px;
    margin-top: 10px;
    object-fit: cover;
  }
`;
