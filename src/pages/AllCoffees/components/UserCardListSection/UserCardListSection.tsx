import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { Header, Loader, UserCardSmall } from 'components';
import { userCardProps } from 'types/userCardSmall';
import { getUserCard } from 'store/api/userCardListPageParam';
import { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_PAGES = 10;

const UserCardListSection = () => {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    fetchUserCard(page);
    setPage(page => page + 1);
  }, []);

  const lastItemRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          if (page < TOTAL_PAGES) {
            fetchUserCard(page);
            setPage(page => page + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const fetchUserCard = async (pageParam: number) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await getUserCard(pageParam) //
      .then(resp => {
        setItems([...items, ...resp.data]);
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Header
        title={"Other's Coffee."}
        subTitle={'다른 사람들은 어떤 취향을 가지고 있을까요?'}
      />

      <CardListContainer>
        {items?.map((item: userCardProps, index: number) =>
          index + 1 === items.length ? (
            <UserCardSmall key={index} card={item} reference={lastItemRef} />
          ) : (
            <UserCardSmall key={index} card={item} />
          )
        )}

        {isLoading && <Loader />}
      </CardListContainer>
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
