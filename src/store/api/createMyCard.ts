import { CreateMyCard } from '../../types/createMyCard.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createMyCardApi = createApi({
  reducerPath: 'createMyCardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://purplestone.herokuapp.com/api',
  }),
  tagTypes: ['MyCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<CreateMyCard, void>({
      query: () => '/create-card',
      providesTags: ['MyCard'],
    }),
  }),
});

export const { useFetchMyCardQuery } = createMyCardApi;
