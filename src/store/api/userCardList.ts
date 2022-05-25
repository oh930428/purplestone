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
    getUserCard: builder.mutation<{}, any>({
      query: ({ pageNumber }) => ({
        url: `userCardSmallList?_page=${pageNumber}&_limit=3`,
        method: 'GET',
        body: pageNumber,
      }),
      invalidatesTags: ['CardList'],
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

export const {
  useFetchUserCardListQuery,
  useGetUserCardMutation,
  useAddUserCardListMutation,
} = userCardListApi;
export const { endpoints, reducerPath, reducer, middleware } = userCardListApi;
