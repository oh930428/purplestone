import styled from 'styled-components';
import { useRef, useState } from 'react';
import { CoffeeOption } from 'types/createMyCard.type';
import ProcessCard from 'components/Card/CardProcess';
import circle from '../../../../assets/Images/bg-circle.png';
import circleActive from '../../../../assets/Images/bg-circle-active.png';

interface Props {
  option: CoffeeOption;
}

const Category = ({ option }: Props) => {
  const optionRef = useRef<HTMLElement>(null);
  const [isPopupCard, setIsPupupCard] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  /**
   * 커피 옵션을 선택하면, 선택한 옵션의 UI만 변경한다.
   * @param {any} e 현재 클릭한 노드
   */
  const onClickActive = (e: any) => {
    const target = e.currentTarget || e.currentTarget.parentNode;
    const optionItem = document.querySelectorAll('.option-box');
    const newOptionItem = Array.from(optionItem);

    for (let item of newOptionItem) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    }
    target.classList.add('active');
    setIsPupupCard(prev => !prev);
  };

  return (
    <Container
      ref={optionRef}
      className="option-box"
      data-type={`${option.name}`}
      onClick={onClickActive}
      circle={circle}
      circleActive={circleActive}
    >
      {selected ? (
        <img
          className="option-image"
          src={require(`../../../../assets/Icons/${selected}`)}
          alt={option.name}
        />
      ) : (
        <img
          className="option-image"
          src={require(`../../../../assets/Icons/${option.thumbnail}`)}
          alt={option.name}
        />
      )}

      {isPopupCard && (
        <ProcessCardContainer className="process-card-container">
          <ProcessCard option={option} setSelected={setSelected} />
        </ProcessCardContainer>
      )}
    </Container>
  );
};

export default Category;

const Container = styled.article<{
  circle: string;
  circleActive: string;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  cursor: pointer;
  background-image: url(${circle});
  background-size: cover;
  background-repeat: no-repeat;

  .option-image {
    width: 9rem;
    height: 9rem;
    object-fit: contain;
  }

  &.active {
    background-image: url(${circleActive});

    .process-card-container {
      display: block;
    }
  }
`;

const ProcessCardContainer = styled.ul`
  position: absolute;
  top: 14.5rem;
  width: 45rem;
  z-index: 100;
  display: none;
`;
