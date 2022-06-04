import styled from 'styled-components';
import { CookiePopup } from 'components';
import { useState, useEffect } from 'react';
import { HeaderSection, Creators, OthersCoffee, MakeCard } from './components';

const Home = () => {
  let [isPop, setIsPop] = useState(false);

  const getIsPop = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsPop(value);
  };

  useEffect(() => {
    const isCookie = document.cookie.indexOf('welcomePop=done');
    if (isCookie === -1) {
      getIsPop(true);
    } else {
      getIsPop(false);
    }
  }, []);

  return (
    <Container>
      <HeaderSection />
      <OthersCoffee />
      <MakeCard />
      <Creators />
      {isPop ? <CookiePopup getIsPop={getIsPop} /> : ''}
    </Container>
  );
};

export default Home;

const Container = styled.div``;
