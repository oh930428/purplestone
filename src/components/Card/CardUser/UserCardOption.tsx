import styled from 'styled-components';
import { fonts, colors } from 'styles';
import { CoffeeType } from '../../../types/createMyCard.type';
interface Props {
  option: CoffeeType;
}

const UserCardOption = ({ option }: Props) => {
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

export default UserCardOption;

const Container = styled.article`
  position: absolute;

  &.bottle {
    left: 39.5%;
    top: -20%;
    width: 15rem;
    text-align: center;

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

  &.brand {
    bottom: -5rem;
    left: 21rem;
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
    object-fit: contain;
  }

  &.bottle-image {
    width: 11rem;
    height: 11rem;
    top: 315%;
    left: 15%;
    z-index: 100;
  }

  &.beans-image {
    top: -5rem;
  }

  &.coffeeType-image {
    left: 10rem;
    top: -0.5rem;
  }

  &.brand-image {
    left: -6rem;
    top: -0.5rem;
  }

  &.temperature-image {
    top: -100%;
    right: -30%;
  }
`;
