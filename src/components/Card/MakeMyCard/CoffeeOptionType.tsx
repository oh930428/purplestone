import styled from 'styled-components';
import { useRef } from 'react';
import { fonts } from 'styles';

const CoffeeOptionType = ({ option, selectedOption }) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const { name, description, image } = option.types[0];

  return (
    <Container
      ref={optionRef}
      className={`type-box ${option.name}`}
      data-type={`${option.name}`}
    >
      {selectedOption.type === optionRef.current?.dataset.type ? (
        <>
          <span className="name">{selectedOption.name}</span>
          <p className="description ">{selectedOption.description}</p>
          <figure className="image-container">
            <img
              src={require(`../../../assets/Icons/${selectedOption.image}`)}
              alt={selectedOption.name}
            />
          </figure>
        </>
      ) : (
        <>
          <span className="name">{name}</span>
          <p className="description ">{description}</p>
          <figure className="image-container">
            <img src={require(`../../../assets/Icons/${image}`)} alt={name} />
          </figure>
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
    top: 10.2rem;
    left: 22.9rem;

    .name {
      margin-right: 1rem;
    }

    .description {
      position: relative;
      top: 0.1rem;
    }
  }

  &.temperature {
    top: 17.7rem;
    left: 3.7rem;
    width: 13.1rem;
    text-align: right;
  }

  &.beans {
    top: 172px;
    right: 36px;
    width: 133px;
    text-align: left;
  }

  &.coffeeType {
    bottom: 4.1rem;
    left: 14.1rem;
    width: 12.1rem;
  }

  &.bottle {
    bottom: 5.4rem;
    right: 11.3rem;
    width: 11.4rem;
  }

  .name {
    ${fonts.Headline4}
    color: #614E32;
  }

  .description {
    ${fonts.MediumCaption}
  }

  .image-container {
    width: 9rem;
    height: 9rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
