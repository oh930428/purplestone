import { ProfileCard } from 'components';
import styled from 'styled-components';
import { HeaderSection, Creators, OthersCoffee } from './components';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <OthersCoffee />
      <Creators />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
