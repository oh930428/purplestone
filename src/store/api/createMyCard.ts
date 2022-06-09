import { createMyCard } from '../../types/createMyCard.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createMyCardApi = createApi({
  reducerPath: 'createMyCardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['MyCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<createMyCard, void>({
      query: () => '/create-card',
      providesTags: ['MyCard'],
    }),
  }),
});

export const { useFetchMyCardQuery } = createMyCardApi;
