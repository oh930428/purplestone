import styled from 'styled-components';

import { Header } from 'components';
import { useFetchMostPopularQuery } from 'store/api/mostPopular';
import { DoughnutSection } from './DoughnutSection';
import { ResponsiveByDeivceProps } from 'types/responsiveByDevice.type';

const MostPopularSection = ({
  maxWidth,
  margin,
  flexWrap,
  font,
  subFont,
}: ResponsiveByDeivceProps) => {
  const { data } = useFetchMostPopularQuery();

  return (
    <Container>
      <div
        className="wrapper"
        style={{
          maxWidth: maxWidth,
          margin: margin,
        }}
      >
        <Header
          title="The Most Popular."
          subTitle="원산지별 원두 및 커피 브랜드별 취향을 가지고 있을까요?"
          font={font}
          subFont={subFont}
        />
        <div className="main" style={{ flexWrap: flexWrap }}>
          {data?.map(item => (
            <div className="main-section">
              <DoughnutSection
                key={item.id}
                id={item.id}
                labels={item.labels}
                datasets={item.datasets}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MostPopularSection;

const Container = styled.section`
  .wrapper {
    display: flex;
    flex-flow: column;
    gap: 2rem;
    padding: 15rem 2rem 25rem;

    .main {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      .main-section {
        width: 100vw;
        padding: 2rem;
      }
    }
  }
`;
