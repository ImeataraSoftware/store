import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = `http://localhost:3001/auth` || `http://localhost:3001/auth`;

export const Auth = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `logup`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = Auth;
