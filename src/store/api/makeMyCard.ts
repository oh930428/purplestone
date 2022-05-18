import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MakeMyCardProps } from './../../types/makeMyCard.types';

export const makeMyCardApi = createApi({
  reducerPath: 'makeMyCardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['MakeMyCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<MakeMyCardProps, void>({
      query: () => '/mycard',
      providesTags: ['MakeMyCard'],
    }),
  }),
});

export const { useFetchMyCardQuery } = makeMyCardApi;
