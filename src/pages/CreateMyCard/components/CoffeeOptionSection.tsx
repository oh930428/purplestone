import styled from 'styled-components';
import { CoffeeOption } from 'components';
import { CoffeeOptionProps, MyCardProps } from 'types/myCard.types';

interface Props {
  data: MyCardProps;
}

const CoffeeOptionSection = ({ data }: Props) => {
  return (
    <Container>
      {data &&
        data.coffeeOption.map((option: CoffeeOptionProps, index: number) => (
          <CoffeeOption key={index} option={option} />
        ))}
    </Container>
  );
};

export default CoffeeOptionSection;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
`;
