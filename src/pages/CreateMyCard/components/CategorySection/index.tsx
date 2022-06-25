import styled from 'styled-components';
import Category from './Category';
import { ChooseOption } from 'types/createMyCard.type';
import { useFetchMyCardQuery } from 'store/api/createMyCard';

const CategorySection = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();

  if (isSuccess) {
    return (
      <Container>
        {data.chooseCoffeeOption.map((option: ChooseOption, index: number) => (
          <Category key={index} option={option} />
        ))}
      </Container>
    );
  } else if (isLoading) {
    return <div>로딩중</div>;
  } else {
    return <div>no found</div>;
  }
};

export default CategorySection;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
`;
