import styled from 'styled-components';
import { useRef } from 'react';
import { fonts, colors } from 'styles';
import { CoffeeOptionProps } from '../../../types/myCard.types';

interface Props {
  option: CoffeeOptionProps;
  selectedOption: any;
}

const CoffeeOptionType = ({ option, selectedOption }: Props) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const { name, description, image } = option.types[0];
  // console.log(`image ${selectedOption.image}`);
  // console.log(selectedOption)

  return (
    <Container
      ref={optionRef}
      className={`type-box ${option.name}`}
      data-type={`${option.name}`}
    >
      {selectedOption.type !== undefined &&
      selectedOption.type === optionRef.current?.dataset.type ? (
        <>
          <span className="name">{selectedOption.selected.name}</span>
          <p className="description ">{selectedOption.selected.description}</p>
          <ImageContainer className={`${option.name}-image`}>
            <img
              src={require(`../../../assets/Icons/${selectedOption.selected.image}`)}
              alt={selectedOption.selected.name}
            />
          </ImageContainer>
        </>
      ) : (
        <>
          <span className="name">{name}</span>
          <p className="description ">{description}</p>
          <ImageContainer className={`${option.name}-image`}>
            <img src={require(`../../../assets/Icons/${image}`)} alt={name} />
          </ImageContainer>
        </>
      )}
    </Container>
  );
};

export default CoffeeOptionType;

const Container = styled.div`
  position: absolute;

  &.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 14rem;
    left: 30.3rem;

    .name {
      margin-right: 1rem;
    }

    .description {
      position: relative;
      top: 0.1rem;
    }
  }

  &.beans {
    top: 25.2rem;
    right: 5.5rem;
    width: 15.5rem;
  }

  &.coffeeType {
    bottom: 8.4rem;
    left: 14.3rem;
    width: 15.5rem;
    text-align: right;
  }

  &.bottle {
    bottom: 8.4rem;
    right: 14.3rem;
    width: 15.5rem;
  }

  &.temperature {
    top: 25.2rem;
    left: 5.5rem;
    width: 15.5rem;
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
    top: -167px;
    left: 167px;
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
    top: 5rem;
    left: 24rem;
  }
`;
