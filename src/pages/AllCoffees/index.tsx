import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { desktopMain, mobileMain, tabletMain } from 'styles/mixin';
import { MostPopularSection, UserCardListSection } from './components';

const AllCoffees = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 540px) and (max-width: 1179px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 539px)' });

  return (
    <Container>
      {isDesktop && (
        <>
          <MostPopularSection
            maxWidth={desktopMain.maxWidth}
            margin={desktopMain.margin}
            font={desktopMain.font}
            subFont={desktopMain.subFont}
          />
          <UserCardListSection />
        </>
      )}
      {isTablet && (
        <>
          <MostPopularSection
            maxWidth={tabletMain.maxWidth}
            margin={tabletMain.margin}
            flexWrap={tabletMain.flexWrap}
            font={tabletMain.font}
            subFont={tabletMain.subFont}
          />
          <UserCardListSection />
        </>
      )}
      {isMobile && (
        <>
          <MostPopularSection
            maxWidth={mobileMain.maxWidth}
            margin={mobileMain.margin}
            flexWrap={mobileMain.flexWrap}
            font={mobileMain.font}
            subFont={mobileMain.subFont}
          />
          <UserCardListSection />
        </>
      )}
    </Container>
  );
};

export default AllCoffees;

const Container = styled.div`
  min-height: 100vh;
  padding: 20rem 0;
`;
