import { baseApi } from "./baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTractor: builder.query({
      query: () => "/tractor",
      providesTags: ["Tractor"],
    }),
  }),
});

export const { useAllTractorQuery } = queryApi;
