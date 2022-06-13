import styled from 'styled-components';
import Skeleton from './Skeleton';

import SkeletonHeader from './SkeletonHeader';

const SkeletonCoffeeOption = () => {
  return (
    <Container>
      <SkeletonHeader />
      <div className="main">
        <div className="main-coffeeOption">
          <Skeleton
            style={{ width: 120, height: 120, borderRadius: 60 }}
            animated
          />
          <Skeleton
            style={{ width: 120, height: 120, borderRadius: 60 }}
            animated
          />
          <Skeleton
            style={{ width: 120, height: 120, borderRadius: 60 }}
            animated
          />
          <Skeleton
            style={{ width: 120, height: 120, borderRadius: 60 }}
            animated
          />
          <Skeleton
            style={{ width: 120, height: 120, borderRadius: 60 }}
            animated
          />
        </div>
        <div className="main-coffeeOptionCard">
          <Skeleton
            style={{ width: 720, height: 550, borderRadius: 30 }}
            animated
          />
        </div>
        <div className="main-button">
          <Skeleton
            style={{ width: 244, height: 85, borderRadius: 6 }}
            animated
          />
          <Skeleton
            style={{ width: 244, height: 85, borderRadius: 6 }}
            animated
          />
        </div>
      </div>
    </Container>
  );
};

export default SkeletonCoffeeOption;

const Container = styled.div`
  display: flex;
  flex-flow: column;

  .main {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 5rem;

    .main-coffeeOption {
      display: flex;
      gap: 2rem;
    }

    .main-button {
      display: flex;
      gap: 5rem;
    }
  }
`;
