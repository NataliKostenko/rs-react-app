import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planet } from '../App.tsx';

export interface PlanetsResult {
  results: Planet[];
  next?: string;
}

interface GetPlanetsArgs {
  searchTerm: string;
  currentPage: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets' }),
  endpoints: (builder) => ({
    getPlanets: builder.query<PlanetsResult, GetPlanetsArgs>({
      query: (args) =>
        `/?format=json&search=${args.searchTerm}&page=${args.currentPage}`,
    }),
  }),
});
export const { useGetPlanetsQuery } = apiSlice;
