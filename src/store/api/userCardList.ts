import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userCardListApi = createApi({
  reducerPath: 'userCardListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://purplestone.herokuapp.com/api',
  }),
  tagTypes: ['Cards'],
  endpoints: builder => ({
    fetchUserCardList: builder.query<any, void>({
      query: () => '/cards',
      providesTags: ['Cards'],
    }),
    addUserCardList: builder.mutation<{}, any>({
      query: ({ id, ...rest }) => ({
        url: '/cards',
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
});

export const { useFetchUserCardListQuery, useAddUserCardListMutation } =
  userCardListApi;
