import styled from 'styled-components';

import Skeleton from './Skeleton';
const SkeletonHeader = () => {
  return (
    <Container>
      <div className="header">
        <div className="title">
          <Skeleton style={{ width: 282, height: 80 }} animated />
        </div>
        <div className="subtitle">
          <Skeleton style={{ width: 614, height: 28 }} animated />
        </div>
      </div>
    </Container>
  );
};

export default SkeletonHeader;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding-bottom: 6rem;

  .header {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.7rem;
  }
`;
