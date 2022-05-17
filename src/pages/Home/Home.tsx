import { ProfileCard } from 'components';
import styled from 'styled-components';
import { HeaderSection, Creators } from './components';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <Creators />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
