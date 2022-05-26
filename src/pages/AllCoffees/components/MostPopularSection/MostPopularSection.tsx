import styled from 'styled-components';

import { Header } from 'components';
import { maxWidth } from 'styles/mixin';
import { useFetchMostPopularQuery } from 'store/api/mostPopular';
import { DoughnutSection } from './DoughnutSection';

const MostPopularSection = () => {
  const { data } = useFetchMostPopularQuery();
  console.log(data);
  return (
    <Container>
      <div className="wrapper">
        <Header
          title="The Most Popular."
          subTitle="어떤 원산지별 원두 및 어떤 커피 브랜드별 취향을 가지고 있을까요?"
          textAlign="flex-start"
        />
        <div className="main">
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
    ${maxWidth}
    display: flex;
    flex-flow: column;
    gap: 2rem;
    padding: 15rem 2rem 25rem;

    .main {
      display: flex;
      justify-content: space-around;
      gap: 3rem;
    }
  }
`;
