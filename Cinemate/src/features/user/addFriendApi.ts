import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addFrinedsApi = createApi({
  reducerPath: 'addFriend',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be-cinemate.onrender.com' }),
  endpoints: (builder) => ({
    sentToBefriendsReq: builder.mutation({
      query: (body) => ({
        url: '/users/friends/sendRequest',
        method: 'POST',
        body,
      }),
    }),
  }),
});
