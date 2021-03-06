import { fonts } from 'styles';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import DigramImage from '../../../assets/Images/bg-digram-small.png';
import { userCardSmallType } from '../../../types/cardUserSmall.type';

interface Props {
  option: userCardSmallType;
}

const UserOptionSmall = ({ option }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 539px)' });

  return (
    <Container>
      <Digram bgDigram={DigramImage} isMobile={isMobile}>
        <div className="thumbnail">
          <img
            src={require(`../../../assets/Icons/${option.bottle.image}`)}
            alt="다이어그램 이미지"
          />
        </div>
        <ul>
          {Object.keys(option).map((key, index) => (
            <li className={option[key].type} key={index}>
              <span>{option[key].name}</span>
            </li>
          ))}
        </ul>
      </Digram>
    </Container>
  );
};

export default UserOptionSmall;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Digram = styled.figure<{ bgDigram: string; isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 17rem;
  background-image: ${props => `url(${props.bgDigram})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  .thumbnail {
    display: inline-flex;
    width: 9rem;
    height: 10rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul {
    position: absolute;
    width: 100%;
    height: 100%;

    ${props =>
      props.isMobile &&
      css`
        width: 80%;
      `}

    li {
      ${fonts.BoldBody1}
      position: absolute;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
      width: 12rem;
      padding: 0.2rem 1rem;
      font-size: 1.4rem;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      text-align: center;
      word-break: keep-all;

      &.brand {
        left: 31%;
        top: -19%;

        ${props =>
          props.isMobile &&
          css`
            left: 35%;
          `}
      }
      &.beans {
        right: -5%;
        top: 25%;
      }
      &.bottle {
        right: 5%;
        bottom: -16%;
      }
      &.coffeeType {
        left: 5%;
        bottom: -16%;
      }
      &.temperature {
        left: -5%;
        top: 25%;
      }
    }
  }
`;
