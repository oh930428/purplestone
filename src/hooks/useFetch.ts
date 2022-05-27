import { userCardProps } from './../types/userCardSmall';
import { useState, useEffect, useCallback } from 'react';
import { getUserCard } from 'store/api/userCardListPageParam';

const useFetch = (page: number) => {
  const [cards, setCards] = useState<userCardProps[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  /*
  처음 로직 : list 요소의 가장 아래에 빈 div을 생성하고, ref을 달아준다. 이 ref를 통해서 교차시점을 확인할 수 있다.
  지금 로직 : list의 마지막 요소에만 선택적으로 ref를 달아주고, ref가 있을 때, 새롭게 데이터를 fetch한다.
  */

  const sendQuery = useCallback(async (page: number) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const res = await getUserCard(page);
      setCards((prev: any) => [...prev, ...res.data]);
      setHasMore(res.data.length > 0);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    sendQuery(page);
  }, [sendQuery, page]);

  return { cards, isLoading, isError, hasMore };
};

export default useFetch;
