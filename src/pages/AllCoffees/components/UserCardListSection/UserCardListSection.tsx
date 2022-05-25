import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { Header, UserCardSmall } from 'components';
import { useFetchUserCardListQuery } from 'store/api/userCardList';

const UserCardListSection = () => {
  const { data, isSuccess, isLoading } = useFetchUserCardListQuery();

  if (isSuccess) {
    return (
      <Container>
        <Header
          title={"Other's Coffee."}
          subTitle={'다른 사람들은 어떤 취향을 가지고 있을까요?'}
          textAlign={'start'}
        />
        <CardListContainer>
          {data.map((card: any, index: number) => (
            <UserCardSmall key={index} card={card} />
          ))}
        </CardListContainer>
      </Container>
    );
  } else if (isLoading) {
    return <div>로딩중..</div>;
  } else {
    return <div>not found</div>;
  }
};

export default UserCardListSection;

const Container = styled.div`
  ${maxWidth}
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 4rem;
  padding: 6rem 0;
`;
