import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userCardListApi = createApi({
  reducerPath: 'userCardListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
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
