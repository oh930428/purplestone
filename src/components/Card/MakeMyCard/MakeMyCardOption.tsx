import styled from 'styled-components';
import { fonts, colors } from 'styles';
import { MyCardTypeProps } from '../../../types/myCard.types';
interface Props {
  option: MyCardTypeProps;
}

const MakeMyCardOption = ({ option }: Props) => {
  return (
    <Container className={`type-box ${option.type}`}>
      <span className="name">{option.name}</span>
      <p className="description">{option.description}</p>
      <ImageContainer className={`${option.type}-image`}>
        <img
          src={require(`../../../assets/Icons/${option.image}`)}
          alt={option.type}
        />
      </ImageContainer>
    </Container>
  );
};

export default MakeMyCardOption;

const Container = styled.article`
  position: absolute;

  &.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 41%;
    top: -15%;

    .name {
      margin-right: 1rem;
    }
  }

  &.beans {
    right: 9%;
    top: 30%;
    width: 15rem;
  }

  &.coffeeType {
    bottom: -20%;
    right: 20%;
    width: 15rem;
  }

  &.bottle {
    bottom: -20%;
    left: 20%;
    width: 15rem;
    text-align: right;
  }

  &.temperature {
    left: 9%;
    top: 30%;
    width: 15rem;
    text-align: right;
  }

  .name {
    ${fonts.Headline4}
    color: #614E32;
    word-break: keep-all;
  }

  .description {
    ${fonts.MediumCaption};
    color: ${colors.Gray_02};
    word-break: keep-all;
  }
`;

const ImageContainer = styled.figure`
  position: absolute;
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.coffeeType-image {
    width: 10rem;
    height: 10rem;
    top: -400%;
    left: -75%;
    z-index: 100;
  }

  &.brand-image {
    left: 3rem;
    top: 10.5rem;
  }

  &.beans-image {
    right: 238px;
    top: 0px;
  }

  &.temperature-image {
    top: -100%;
    right: -30%;
  }

  &.bottle-image {
    transform: translate(200%, -200%);
  }
`;
