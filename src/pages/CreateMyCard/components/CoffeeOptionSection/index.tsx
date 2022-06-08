import styled from 'styled-components';
import CoffeeOption from './CoffeeOption';
import { ChooseOption } from 'types/createMyCard.type';
import { useFetchMyCardQuery } from 'store/api/createMyCard';

const CoffeeOptionSection = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();

  if (isSuccess) {
    return (
      <Container>
        {data.chooseCoffeeOption.map((option: ChooseOption, index: number) => (
          <CoffeeOption key={index} option={option} />
        ))}
      </Container>
    );
  } else if (isLoading) {
    return <div>로딩중</div>;
  } else {
    return <div>no found</div>;
  }
};

export default CoffeeOptionSection;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
`;
