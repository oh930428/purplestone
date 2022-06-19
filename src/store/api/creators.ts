import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreatorsPorps } from '../../types/creators.types';

export const creatorsApi = createApi({
  reducerPath: 'creatorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://purplestone.herokuapp.com' }),
  tagTypes: ['Creators'],
  endpoints: builder => ({
    fetchCreators: builder.query<CreatorsPorps, void>({
      query: () => '/creators',
      providesTags: ['Creators'],
    }),
  }),
});

export const { useFetchCreatorsQuery } = creatorsApi;
