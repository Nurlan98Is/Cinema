import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  nickName: string;
}

interface RegisterResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be-cinemate.onrender.com' }),
  tagTypes: ['Registration'],
  endpoints: (build) => ({
    registerUser: build.mutation<RegisterRequest, RegisterResponse>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Registration'],
    }),
  }),
});

export const { useRegisterUserMutation } = registrationApi;
