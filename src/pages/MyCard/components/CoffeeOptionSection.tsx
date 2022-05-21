import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { CoffeeOption } from 'components';
import { CoffeeOptionProps, MyCardProps } from 'types/myCard.types';
import { RootState } from '../../../store/index';

interface Props {
  data: MyCardProps;
  cardOptionUpdate: any;
}

const CoffeeOptionSection = ({ data, cardOptionUpdate }: Props) => {
  const selectedOption = useSelector<RootState>(state => state.myCardReducer);

  return (
    <Container>
      {data &&
        data.coffeeOption.map((option: CoffeeOptionProps, index: number) => (
          <CoffeeOption
            key={index}
            option={option}
            selectedOption={selectedOption}
            cardOptionUpdate={cardOptionUpdate}
          />
        ))}
    </Container>
  );
};

export default CoffeeOptionSection;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
`;
