import styled from 'styled-components';
import background from '../../assets/Images/bg-section.jpg';

import { CoffeeOption, Header } from 'components';
import { useFetchMyCardQuery } from 'store/api/myCard';
import { maxWidth } from 'styles/mixin';

const MakeMyCard = () => {
  const { data, error, isLoading, isSuccess } = useFetchMyCardQuery();

  return (
    <Container>
      <Wrpper>
        {isSuccess && <Header title={data.title} subTitle={data.subTitle} />}

        <CoffeeOptionContainer>
          {data &&
            data.coffeeOption.map((option, index) => (
              <CoffeeOption key={index} option={option} />
            ))}
        </CoffeeOptionContainer>
      </Wrpper>
    </Container>
  );
};

export default MakeMyCard;

const Container = styled.div`
  width: 100%;
  padding: 21rem 0;
  background-image: url(${background});
`;

const Wrpper = styled.div`
  ${maxWidth}
`;

const CoffeeOptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.5rem;
`;
