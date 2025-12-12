import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://be-cinemate.onrender.com',
    credentials: 'include',
  }),
  tagTypes: ['Login'],
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Login'],
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;
