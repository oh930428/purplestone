import styled, { css } from 'styled-components';
import useFetch from 'hooks/useFetch';

import { maxWidth } from 'styles/mixin';
import { useMediaQuery } from 'react-responsive';
import { userCardProps } from 'types/userCardSmall';
import { useState, useRef, useCallback } from 'react';
import { Header, Loader, UserCardSmall } from 'components';
import { desktopMain } from 'styles/mixin';

const UserCardListSection = () => {
  const observer = useRef<IntersectionObserver>();
  const [page, setPage] = useState<number>(1);
  const { isLoading, isError, cards, hasMore } = useFetch(page);
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const lastItemRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <Container isDesktop={isDesktop}>
      <Header
        title={"Other's Coffee."}
        subTitle={'다른 사람들은 어떤 취향을 가지고 있을까요?'}
        font={desktopMain.font}
        subFont={desktopMain.subFont}
      />

      <CardListContainer>
        {cards?.map((card: userCardProps, index: number) =>
          index + 1 === cards.length ? ( // index + 1 번이 페이지의 마지막 item
            <UserCardSmall key={index} card={card} reference={lastItemRef} />
          ) : (
            <UserCardSmall key={index} card={card} />
          )
        )}

        {isLoading && <Loader />}
        {isError && <div>not found</div>}
      </CardListContainer>
    </Container>
  );
};

export default UserCardListSection;

const Container = styled.div<{ isDesktop: boolean }>`
  width: 100%;
  padding: 0 2rem;

  ${props =>
    props.isDesktop &&
    css`
      ${maxWidth}
    `}
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 4rem;
  padding: 6rem 0;
`;
