import styled from 'styled-components';

import Skeleton from './Skeleton';
import SkeletonHeader from './SkeletonHeader';

const SkeletonProfileCard = () => {
  return (
    <Container>
      <SkeletonHeader />
      <div className="profile-cards">
        <Skeleton
          style={{ width: 338, height: 426, borderRadius: 20 }}
          animated
        />
        <Skeleton
          style={{ width: 338, height: 426, borderRadius: 20 }}
          animated
        />
        <Skeleton
          style={{ width: 338, height: 426, borderRadius: 20 }}
          animated
        />
      </div>
    </Container>
  );
};

export default SkeletonProfileCard;

const Container = styled.div`
  display: flex;
  flex-flow: column;

  .profile-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
