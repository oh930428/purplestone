import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { Header, UserCardSmall } from 'components';
import { useGetUserCardMutation } from 'store/api/userCardList';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

// TODO: 기능만 구현, 내일 코드 리팩토링
const UserCardListSection = () => {
  const [getUserCard] = useGetUserCardMutation();

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['card'],
    ({ pageParam = 1 }) => getUserCard(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage; // 다음 페이지로
      },
    }
  );

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    isIntersecting && fetchNextPage();
  };

  const { setTarget } = useIntersectionObserver({
    onIntersect,
    enabled: !!hasNextPage,
  });

  return (
    <Container>
      <Header
        title={"Other's Coffee."}
        subTitle={'다른 사람들은 어떤 취향을 가지고 있을까요?'}
        textAlign={'start'}
      />

      <CardListContainer>
        {data?.pages.map((cards: any) => {
          return cards.data.map((card, index) => (
            <UserCardSmall key={index} card={card} />
          ));
        })}
      </CardListContainer>

      <div ref={setTarget}>{isFetchingNextPage ? 'Loading more...' : ''}</div>
    </Container>
  );
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
