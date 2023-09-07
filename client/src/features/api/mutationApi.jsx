import { baseApi } from "./baseApi";

const mutationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTractor: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddTractorMutation } = mutationApi;
