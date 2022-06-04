import styled from 'styled-components';
import { CookiePopup } from 'components';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HeaderSection, Creators, OthersCoffee, MakeCard } from './components';
import { desktopMain, mobileMain, tabletMain } from 'styles/mixin';

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

  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 540px) and (max-width: 1179px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 539px)' });

  return (
    <Container>
      <HeaderSection />

      {isDesktop && (
        <>
          <OthersCoffee
            maxWidth={tabletMain.maxWidth}
            margin={tabletMain.margin}
            font={tabletMain.font}
            subFont={tabletMain.subFont}
          />
          <MakeCard
            maxWidth={desktopMain.maxWidth}
            margin={desktopMain.margin}
            font={desktopMain.font}
            subFont={desktopMain.subFont}
          />
        </>
      )}
      {isTablet && (
        <>
          <OthersCoffee
            maxWidth={tabletMain.maxWidth}
            margin={tabletMain.margin}
            font={tabletMain.font}
            subFont={tabletMain.subFont}
          />
          <MakeCard
            maxWidth={tabletMain.maxWidth}
            margin={tabletMain.margin}
            font={tabletMain.font}
            subFont={tabletMain.subFont}
          />
        </>
      )}
      {isMobile && (
        <>
          <OthersCoffee
            maxWidth={mobileMain.maxWidth}
            margin={mobileMain.margin}
            font={mobileMain.font}
            subFont={mobileMain.subFont}
          />
          <MakeCard
            maxWidth={mobileMain.maxWidth}
            margin={mobileMain.margin}
            font={mobileMain.font}
            subFont={mobileMain.subFont}
          />
        </>
      )}

      {isDesktop && <Creators />}
      {isTablet && <Creators />}
      {isMobile && <Creators />}

      {isPop ? <CookiePopup getIsPop={getIsPop} /> : ''}
    </Container>
  );
};

export default Home;

const Container = styled.div``;
