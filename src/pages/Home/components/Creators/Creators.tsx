import styled from 'styled-components';

import { Header, ProfileCard } from 'components';
import { maxWidth } from 'styles/mixin';
import { useFetchCreatorsQuery } from 'store/api/creators';
import { ProfileCardProps } from '../../../../types/profileCard.type';
import ConfettiComponents from './Confetti';
import ProfileCardSkeleton from '../../../../components/Skeleton/ProfileCardSkeleton';

const Creators = () => {
  const { data, isSuccess, isLoading } = useFetchCreatorsQuery();

  if (isSuccess) {
    return (
      <Container>
        <ConfettiComponents />
        <div className="wrapper">
          <Header title={data.title} subTitle={data.subTitle} />
          <div className="profile-box">
            {data.profiles.map((profile: ProfileCardProps, index: number) => (
              <ProfileCard
                key={index}
                userName={profile.userName}
                descrition={profile.descrition}
                thumbnail={profile.thumbnail}
                background={profile.background}
                iconSocial={profile.iconSocial}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  } else if (isLoading) {
    return <ProfileCardSkeleton />;
  } else {
    return <div>not found</div>;
  }
};

export default Creators;

const Container = styled.section`
  position: relative;
  padding: 100px 20px;
  overflow: hidden;

  .wrapper {
    ${maxWidth}
  }

  .profile-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
