import { baseApi } from "./baseApi";

const mutationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTractor: builder.mutation({
      query: (data) => ({
        url: "/tractor",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tractor"],
    }),
  }),
});

export const { useAddTractorMutation } = mutationApi;
