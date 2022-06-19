import styled from 'styled-components';
import ConfettiComponents from './Confetti';
import SkeletonProfileCard from '../../../../components/Skeleton/SkeletonProfileCard';

import { maxWidth } from 'styles/mixin';
import { desktopMain } from 'styles/mixin';
import { Header, CardProfile } from 'components';
import { useFetchCreatorsQuery } from 'store/api/creators';
import { Profile } from '../../../../types/profile.type';

const Creators = () => {
  const { data, isSuccess, isLoading } = useFetchCreatorsQuery();

  return (
    <Container>
      <ConfettiComponents />
      <div className="wrapper">
        {isSuccess ? (
          <>
            <Header
              title={data.title}
              subTitle={data.subTitle}
              font={desktopMain.font}
              subFont={desktopMain.subFont}
            />
            <div className="profile-box">
              {data.profiles.map((profile: Profile, index: number) => (
                <CardProfile
                  key={index}
                  userName={profile.userName}
                  descrition={profile.descrition}
                  thumbnail={profile.thumbnail}
                  background={profile.background}
                  iconSocial={profile.iconSocial}
                />
              ))}
            </div>
          </>
        ) : (
          <SkeletonProfileCard />
        )}
        {isLoading && <SkeletonProfileCard />}
      </div>
    </Container>
  );
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
