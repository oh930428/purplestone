import styled from 'styled-components';
import { Header, ProfileCard } from 'components';
import { maxWidth } from 'styles/mixin';
import { useFetchCreatorsQuery } from 'store/api/creators';
import { ProfileCardProps } from '../../../../types/profileCard.type';

const Creators = () => {
  const { data, error, isLoading, isSuccess } = useFetchCreatorsQuery();

  console.log(data);
  return (
    <Container>
      {isSuccess && <Header title={data.title} subTitle={data.subTitle} />}

      {isSuccess && (
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
      )}

      {isLoading && <div>로딩중..</div>}

      {error && <div>데이터를 불러오지 못했습니다.</div>}
    </Container>
  );
};

export default Creators;

const Container = styled.section`
  ${maxWidth}
  padding: 100px 20px;

  .profile-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
