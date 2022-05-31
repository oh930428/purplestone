import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChartProps } from 'types/doughnut.type';

export const mostPopularApi = createApi({
  reducerPath: 'mostPopularApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['MostPopular'],
  endpoints: builder => ({
    fetchMostPopular: builder.query<ChartProps[], void>({
      query: () => '/mostPopular',
      providesTags: ['MostPopular'],
    }),
  }),
});

export const { useFetchMostPopularQuery } = mostPopularApi;
