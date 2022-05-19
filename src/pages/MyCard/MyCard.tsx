import styled from 'styled-components';
import background from '../../assets/Images/bg-section.jpg';

import { maxWidth } from 'styles/mixin';
import { Header, MakeMyCard } from 'components';
import { useFetchMyCardQuery } from 'store/api/myCard';
import { CoffeeOptionSection } from './components';

const MyCard = () => {
  const { data, error, isLoading, isSuccess } = useFetchMyCardQuery();

  return (
    <Container>
      {isSuccess && (
        <Wrpper>
          <Header title={data.title} subTitle={data.subTitle} />
          <Flex>
            <CoffeeOptionSection data={data} />
            <MakeMyCard />
          </Flex>
        </Wrpper>
      )}

      {isLoading && <div>로딩중..</div>}
      {error && <div>no data</div>}
    </Container>
  );
};

export default MyCard;

const Container = styled.div`
  width: 100%;
  padding: 21rem 0;
  background-image: url(${background});
`;

const Wrpper = styled.div`
  ${maxWidth}
`;

const Flex = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
