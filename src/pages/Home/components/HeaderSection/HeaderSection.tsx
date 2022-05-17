import styled from 'styled-components';

import { Button } from 'components';
import { fonts, colors } from 'styles';
import { maxWidth } from 'styles/mixin';
import { useMouseEffect } from 'hooks/useMouseEffect';

import Card from '../../../../assets/Images/card-image.png';
import background from '../../../../assets/Images/bg-section.jpg';

const HeaderSection = () => {
  const ImageRef = useMouseEffect();

  return (
    <Container>
      <div className="wrapper">
        <LeftBox>
          <Title>
            <h1>
              <span>My Cup </span>
              <br />
              <span>of Coffee💕</span>
            </h1>
            <p>내가 좋아하는 커피 취향 카드 만들기</p>
          </Title>
          <Button theme="primary" label="취향 카드 만들기" size="large" />
        </LeftBox>

        <CardImage ref={ImageRef}>
          <img src={Card} alt="카드 완성 이미지" />
        </CardImage>
      </div>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.section`
  background-image: url(${background});

  .wrapper {
    ${maxWidth}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
    padding: 200px 20px;
    z-index: 100;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  z-index: 100;
`;

const Title = styled.div`
  padding: 10px 0 60px;

  h1 {
    ${fonts.Hero1};
    color: ${colors.Primary_01};

    span {
      background: linear-gradient(to top, #f5f2c2 35%, transparent 35%);
      line-height: 110px;
    }
  }

  p {
    padding-top: 12px;
    font-family: Noto Sans;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.01em;
    color: ${colors.Secondary_01};
  }
`;

const CardImage = styled.figure`
  flex: 1;
  width: 511px;
  cursor: pointer;

  img {
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: transform 0.5s ease-in-out;

    &:hover {
      transition: none;
      transform: perspective(1000px) rotateY(calc(var(--x) * 35deg))
        rotateX(calc(var(--y) * -35deg));
    }
  }
`;
