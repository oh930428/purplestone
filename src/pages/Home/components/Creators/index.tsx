import styled from 'styled-components';
import ConfettiComponents from './Confetti';
import ProfileCardSkeleton from '../../../../components/Skeleton/ProfileCardSkeleton';

import { maxWidth } from 'styles/mixin';
import { desktopMain } from 'styles/mixin';
import { Header, ProfileCard } from 'components';
import { useFetchCreatorsQuery } from 'store/api/creators';
import { CardProfile } from '../../../../types/cardProfile.type';

const Creators = () => {
  const { data, isSuccess, isLoading } = useFetchCreatorsQuery();

  if (isSuccess) {
    return (
      <Container>
        <ConfettiComponents />
        <div className="wrapper">
          <Header
            title={data.title}
            subTitle={data.subTitle}
            font={desktopMain.font}
            subFont={desktopMain.subFont}
          />
          <div className="profile-box">
            {data.profiles.map((profile: CardProfile, index: number) => (
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
