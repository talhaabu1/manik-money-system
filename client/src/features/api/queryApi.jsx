import { baseApi } from "./baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getJson: build.query({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetJsonQuery } = queryApi;
