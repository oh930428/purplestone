import styled from 'styled-components';
import { MostPopularSection, UserCardListSection } from './components';

const AllCoffees = () => {
  return (
    <Container>
      <MostPopularSection />
      <UserCardListSection />
    </Container>
  );
};

export default AllCoffees;

const Container = styled.div`
  min-height: 100vh;
  padding: 20rem 0;
`;
