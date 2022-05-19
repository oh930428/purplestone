import styled from 'styled-components';

import background from '../../../../assets/Images/bg-section.jpg';
import { maxWidth } from 'styles/mixin';

import { Header } from 'components';
import DrawSvg from './DrawSvg';

const MakeCard = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <Header
            title="Make a Card."
            subTitle="나의 커피 취향 카드를 만드는 방법은?"
          />
        </div>
        <div className="main">
          <DrawSvg />
          <Items>
            <Item></Item>
            <Item>
              <img
                src={require('../../../../assets/Images/process-card_01.png')}
                alt=""
              />
            </Item>
            <Item>
              <img
                src={require('../../../../assets/Images/process-card_02.png')}
                alt=""
              />
            </Item>
            <Item>
              <img
                src={require('../../../../assets/Images/process-card_03.png')}
                alt=""
              />
            </Item>
            <Item>
              <img
                src={require('../../../../assets/Images/process-card_04.png')}
                alt=""
              />
            </Item>
            <Item>
              <img
                src={require('../../../../assets/Images/process-card_05.png')}
                alt=""
              />
            </Item>
            <Item>
              <img
                src={require('../../../../assets/Images/coffee-card-image.png')}
                alt=""
              />
            </Item>
          </Items>
        </div>
      </div>
    </Container>
  );
};

export default MakeCard;

const Container = styled.section`
  background: url(${background});

  .wrapper {
    ${maxWidth}
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 150px 20px 250px;

    .main {
      width: 100%;
      height: 200vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
`;

const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  padding-top: 10rem;
`;

const Item = styled.li`
  width: 80%;
  height: 100%;
  display: flex;

  &:nth-child(odd) {
    justify-content: flex-start;
    img {
      width: 40rem;
      height: 30rem;
    }
  }
  &:nth-child(even) {
    justify-content: flex-end;
    img {
      width: 40rem;
      height: 30rem;
    }
  }

  &:nth-child(4) {
    justify-content: flex-end;
    margin-top: 4rem;

    img {
      width: 40rem;
      height: 25rem;
    }
  }

  &:nth-child(7) {
    justify-content: center;
    margin-top: 16rem;
    img {
      width: 40rem;
      height: 30rem;
    }
  }
`;
