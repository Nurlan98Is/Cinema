import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be-cinemate.onrender.com' }),
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: '/users/me',
        credentials: 'include',
      }),
    }),
    getUserById: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}`,
        credentials: 'include',
      }),
    }),
    sentToBefriendsReq: builder.mutation({
      query: (body) => ({
        url: '/users/friends/sendRequest',
        method: 'POST',
        body: { friendId: body.id },
        credentials: 'include',
      }),
    }),
    addToBeFriend: builder.mutation({
      query: (body) => ({
        url: '/users/friends/addUser',
        method: 'POST',

        body: { friendId: body.id },
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useGetUserByIdQuery,
  useAddToBeFriendMutation,
  useSentToBefriendsReqMutation,
} = usersApi;
