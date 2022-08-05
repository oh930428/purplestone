import styled from 'styled-components';
import Category from './Category';
import { CoffeeOption } from 'types/createMyCard.type';
import { useFetchMyCardQuery } from 'store/api/createMyCard';

const CategorySection = () => {
  const { data } = useFetchMyCardQuery();

  return (
    <Container>
      {data?.coffeeOptions.map((option: CoffeeOption, index: number) => (
        <Category key={index} option={option} />
      ))}
    </Container>
  );
};

export default CategorySection;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
`;
