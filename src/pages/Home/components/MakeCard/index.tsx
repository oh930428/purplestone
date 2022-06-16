import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import background from '../../../../assets/Images/bg-section.jpg';

import { Header } from 'components';
import DrawSvg from './DrawSvg';
import { ResponsiveByDeivceProps } from 'types/responsiveByDevice.type';

const CreateMyCard = ({
  maxWidth,
  margin,
  font,
  subFont,
}: ResponsiveByDeivceProps) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 540px) and (max-width: 1179px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 539px)' });

  const processCardItems = [
    { img: require('../../../../assets/Images/process-card1.png') },
    { img: require('../../../../assets/Images/process-card2.png') },
    { img: require('../../../../assets/Images/process-card3.png') },
    { img: require('../../../../assets/Images/process-card4.png') },
    { img: require('../../../../assets/Images/process-card5.png') },
  ];

  return (
    <Container>
      <div className="wrapper" style={{ maxWidth: maxWidth, margin: margin }}>
        <div className="header">
          <Header
            title="Make a Card."
            subTitle="나의 커피 취향 카드를 만드는 방법은?"
            font={font}
            subFont={subFont}
          />
        </div>
        <div
          className={
            isMobile ? 'main-isMoblie' : isTablet ? 'main-isTablet' : 'main'
          }
        >
          <DrawSvg />
          <Items isDesktop={isDesktop}>
            <Item
              isMobile={isMobile}
              isTablet={isTablet}
              isDesktop={isDesktop}
            />
            {processCardItems.map(item => (
              <Item
                isMobile={isMobile}
                isTablet={isTablet}
                isDesktop={isDesktop}
              >
                <img src={item.img} alt="" />
              </Item>
            ))}
            <Item isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
              <img
                src={require('../../../../assets/Images/coffee-card-image1.png')}
                alt=""
              />
            </Item>
          </Items>
        </div>
      </div>
    </Container>
  );
};

export default CreateMyCard;

const Container = styled.section`
  background: url(${background});

  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 15rem 2rem 25rem;

    .main {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .main-isMoblie,
    .main-isTablet {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
`;

const Items = styled.ul<{ isDesktop: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: ${props => (props.isDesktop ? '8rem' : '0rem')};
`;

const Item = styled.li<{
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}>`
  display: flex;

  ${props =>
    props.isDesktop &&
    css`
      width: 90%;
      &:nth-child(odd) {
        justify-content: flex-start;
        img {
          width: 50rem;
          height: 35rem;
          border-radius: 2rem;
        }
      }

      &:nth-child(even) {
        justify-content: flex-end;
        img {
          width: 50rem;
          height: 35rem;
          border-radius: 2rem;
        }
      }

      &:nth-child(6) {
        justify-content: flex-end;
        height: 33rem;
        img {
          width: 50rem;
          height: 26rem;
          border-radius: 2rem;
        }
      }

      &:nth-child(7) {
        justify-content: center;
        img {
          width: 50rem;
          height: 38rem;
          border-radius: 2rem;
        }
      }
    `}

  ${props =>
    props.isTablet &&
    css`
      width: 100%;
      justify-content: flex-end;
      padding-bottom: 8rem;

      img {
        width: 100%;
        border-radius: 2rem;
      }

      &:nth-child(1) {
        padding-bottom: 0;
      }

      &:nth-child(6) {
        padding-bottom: 4rem;
        img {
          width: 100%;
          border-radius: 2rem;
        }
      }

      &:nth-child(7) {
        padding-top: 6rem;
        img {
          width: 100%;
          border-radius: 2rem;
        }
      }
    `}

    ${props =>
    props.isMobile &&
    css`
      width: 100%;
      justify-content: flex-end;
      padding-bottom: 8rem;

      img {
        width: 100%;
        border-radius: 2rem;
      }

      &:nth-child(1) {
        padding-bottom: 0;
      }

      &:nth-child(6) {
        padding-bottom: 10rem;
        img {
          width: 100%;
          border-radius: 2rem;
        }
      }

      &:nth-child(7) {
        img {
          width: 100%;
          border-radius: 2rem;
        }
      }
    `}
`;
