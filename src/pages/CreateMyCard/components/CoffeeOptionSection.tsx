import styled from 'styled-components';
import { ChooseCoffeeOption } from 'components';
import { useFetchMyCardQuery } from 'store/api/createMyCard';
import { ChooseCoffeeOptionProps } from 'types/myCard.types';

const CoffeeOptionSection = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();

  if (isSuccess) {
    return (
      <Container>
        {data.chooseCoffeeOption.map(
          (option: ChooseCoffeeOptionProps, index: number) => (
            <ChooseCoffeeOption key={index} option={option} />
          )
        )}
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
