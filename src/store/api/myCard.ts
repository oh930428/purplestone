import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MyCardProps, MyCardTypeProps } from '../../types/myCard.types';

export const myCardApi = createApi({
  reducerPath: 'myCardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['myCard'],
  endpoints: builder => ({
    fetchMyCard: builder.query<MyCardProps, void>({
      query: () => '/mycard',
      providesTags: ['myCard'],
    }),
    addMyCard: builder.mutation<{}, MyCardTypeProps>({
      query: option => ({
        url: '/mycard',
        method: 'POST',
        body: option,
      }),
      invalidatesTags: ['myCard'],
    }),
  }),
});

export const { useFetchMyCardQuery, useAddMyCardMutation } = myCardApi;
