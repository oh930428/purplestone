import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userCardListApi = createApi({
  reducerPath: 'userCardListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['CardList'],
  endpoints: builder => ({
    fetchUserCardList: builder.query<any, void>({
      query: () => '/userCardSmallList',
      providesTags: ['CardList'],
    }),
    addUserCardList: builder.mutation<{}, any>({
      query: ({ id, ...rest }) => ({
        url: '/userCardSmallList',
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['CardList'],
    }),
  }),
});

export const { useFetchUserCardListQuery, useAddUserCardListMutation } =
  userCardListApi;
