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
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registrationApi;
