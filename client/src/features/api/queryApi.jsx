import { baseApi } from "./baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJson: builder.query({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetJsonQuery } = queryApi;
