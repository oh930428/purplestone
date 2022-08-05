import styled from 'styled-components';
import { useState, useRef } from 'react';
import { CoffeeOption } from 'types/createMyCard.type';

import CardProcess from '../CardProcess';
import circle from '../../../../assets/Images/bg-circle.png';
import circleActive from '../../../../assets/Images/bg-circle-active.png';

interface Props {
  option: CoffeeOption;
}

const Category = ({ option }: Props) => {
  const popupRef = useRef<HTMLUListElement>(null);
  const [isPopupCard, setIsPupupCard] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  /**
   * Category 선택시, 선택한 카테고리 아이템의 UI가 변경된다. (active)
   * @param {any} e 현재 클릭한 노드
   */
  const handleActive = (e: any) => {
    const target = e.currentTarget || e.currentTarget.parentNode;
    const categoryItem = document.querySelectorAll('.category-item');
    const newCategoryItem = Array.from(categoryItem);

    for (let item of newCategoryItem) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        setIsPupupCard(false);
      }
    }
    target.classList.toggle('active');
    setIsPupupCard(true);
  };

  return (
    <Container
      className="category-item"
      onClick={handleActive}
      circle={circle}
      circleActive={circleActive}
    >
      {selected ? (
        <img
          className="category-image"
          src={require(`../../../../assets/Icons/${selected}`)}
          alt={option.name}
        />
      ) : (
        <img
          className="category-image"
          src={require(`../../../../assets/Icons/${option.thumbnail}`)}
          alt={option.name}
        />
      )}

      {isPopupCard && (
        <ProcessCardContainer ref={popupRef} className="process-card-container">
          <CardProcess option={option} setSelected={setSelected} />
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

  .category-image {
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
