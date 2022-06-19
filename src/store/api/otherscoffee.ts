import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OthersCoffeeProps } from '../../types/othersCoffee.type';

export const otherscoffeeApi = createApi({
  reducerPath: 'otherscoffeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://purplestone.herokuapp.com/api',
  }),
  tagTypes: ['OthersCoffee'],
  endpoints: builder => ({
    fetchOthersCoffee: builder.query<OthersCoffeeProps, void>({
      query: () => '/OthersCoffee',
      providesTags: ['OthersCoffee'],
    }),
  }),
});

export const { useFetchOthersCoffeeQuery } = otherscoffeeApi;
