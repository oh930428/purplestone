import styled, { css } from 'styled-components';
import UserCardSmallOption from './UserOptionSmall';
import CardImage from '../../../assets/Images/bg-card-small.png';
import IconsCoffeeOption from 'components/Icon/IconsCoffeeOption';

import { colors } from 'styles';
import { useMediaQuery } from 'react-responsive';
import { userCardSmall } from '../../../types/cardUserSmall.type';

interface UserCardSmallProps {
  card: userCardSmall;
  reference?: any;
}

const CardUserSmall = ({ card, reference }: UserCardSmallProps) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 960px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 540px) and (max-width: 959px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container
      bgCard={CardImage}
      ref={reference}
      isDesktop={isDesktop}
      isTablet={isTablet}
      isMobile={isMobile}
    >
      <Card>
        <div className="header">
          <div className="header-title">
            <span>{card.userName}</span>님의 &nbsp;
            <span>커피 취향</span>
          </div>
          <div className="header-section">
            {Object.keys(card.userCardSmallType).map((key, index) => (
              <IconsCoffeeOption
                key={index}
                option={card.userCardSmallType[key]}
              />
            ))}
          </div>
        </div>
        <UserCardSmallOption option={card.userCardSmallType} />
      </Card>
    </Container>
  );
};

export default CardUserSmall;

const Container = styled.div<{
  bgCard: string;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}>`
  width: 100%;
  min-width: 20rem;
  height: 46rem;
  background-image: ${props => `url(${props.bgCard})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 3rem 2.5rem;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

  ${props =>
    props.isMobile &&
    css`
      width: 75%;
    `}

  ${props =>
    props.isTablet &&
    css`
      width: calc(100% / 2 - (3rem));
    `}

  ${props =>
    props.isDesktop &&
    css`
      min-width: 30rem;
      width: calc(100% / 3 - (3rem));
    `}
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 7rem;

  .header {
    display: flex;
    flex-flow: column;
    gap: 2rem;

    .header-title {
      text-align: center;
      letter-spacing: -0.01em;
      line-height: 32px;
      color: #614e32;
      font-family: 'Noto Sans';
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 25px;

      span {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${colors.Gray_01};
        background: linear-gradient(to top, #f5f2c1 50%, transparent 50%);
      }
    }

    .header-section {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-columns: minmax(48px, auto);
      grid-gap: 5px;
    }
  }
`;
