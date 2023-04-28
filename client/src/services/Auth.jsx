import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = `http://localhost:3001/` || `http://localhost:3001/`;

export const Auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
