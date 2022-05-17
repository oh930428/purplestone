import styled from 'styled-components';

import { fonts, colors } from 'styles';
import { maxWidth } from 'styles/mixin';

import background from '../../../../assets/Images/bg-section.jpg';
import Card from '../../../../assets/Images/card-image.png';

const HeaderSection = () => {
  return (
    <Container>
      <div className="wrapper">
        <Title>
          <h1>
            <span>My Cup </span>
            <br />
            <span>of Coffee💕</span>
          </h1>
          <p>내가 좋아하는 커피 취향 카드 만들기</p>
        </Title>
        <CardImage>
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
    padding: 200px 20px;
  }
`;

const Title = styled.div`
  flex: 1;
  padding-top: 10px;

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
`;
