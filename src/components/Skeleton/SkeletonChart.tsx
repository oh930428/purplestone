import styled from 'styled-components';

import Skeleton from './Skeleton';
import SkeletonHeader from './SkeletonHeader';

const SkeletonChart = () => {
  return (
    <Container>
      <SkeletonHeader />
      <div className="chart-section">
        <Skeleton style={{ width: 570, height: 351 }} animated />
        <Skeleton style={{ width: 570, height: 351 }} animated />
      </div>
    </Container>
  );
};

export default SkeletonChart;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;

  .chart-section {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
`;
