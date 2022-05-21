import { ProfileCard } from 'components';
import styled from 'styled-components';
import { HeaderSection, Creators, OthersCoffee, MakeCard } from './components';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <OthersCoffee />
      <MakeCard />
      <Creators />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
