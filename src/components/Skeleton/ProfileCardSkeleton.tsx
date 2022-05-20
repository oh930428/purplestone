import styled from 'styled-components';

import HeaderSkeleton from './HeaderSkeleton';
import Skeleton from './Skeleton';

const ProfileCardSkeleton = () => {
  return (
    <Container>
      <HeaderSkeleton />
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

export default ProfileCardSkeleton;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 60px;

  .header {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 7px;
  }
  .profile-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
