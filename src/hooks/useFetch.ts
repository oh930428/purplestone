import { userCardProps } from './../types/userCardSmall';
import { useState, useEffect, useCallback } from 'react';
import { getUserCard } from 'store/api/userCardListPageParam';

const useFetch = (page: number) => {
  const [cards, setCards] = useState<userCardProps[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

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
