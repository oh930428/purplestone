import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createMyCard } from '../../types/createMyCard';

export const createMyCardApi = createApi({
  reducerPath: 'createMyCardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['MyCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<createMyCard, void>({
      query: () => '/createMyCard',
      providesTags: ['MyCard'],
    }),
  }),
});

export const { useFetchMyCardQuery } = createMyCardApi;
