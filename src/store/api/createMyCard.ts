import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MyCardProps } from '../../types/myCard.types';

export const createMyCardApi = createApi({
  reducerPath: 'myCardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['myCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<MyCardProps, void>({
      query: () => '/mycard',
      providesTags: ['myCard'],
    }),
  }),
});

export const { useFetchMyCardQuery } = createMyCardApi;
