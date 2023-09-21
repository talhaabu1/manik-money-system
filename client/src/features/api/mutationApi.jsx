import { baseApi } from "./baseApi";

const mutationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //? Add Tractor Data ⤵
    addTractor: builder.mutation({
      query: (data) => ({
        url: "/tractor",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tractor"],
    }),
    //? Add Tractor Data ⤴
    //? Delete Tractor Data ⤵
    deleteTractor: builder.mutation({
      query: (id) => ({
        url: `/tractor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tractor"],
    }),
    //? Delete Tractor Data ⤴
    //? Delete Update Data ⤵
    updateTractor: builder.mutation({
      query: ({ id, allData }) => ({
        url: `/tractor/${id}`,
        method: "PUT",
        body: allData,
      }),
      invalidatesTags: ["Tractor"],
    }),
    //? Delete Update Data ⤴
  }),
});

export const {
  useAddTractorMutation,
  useDeleteTractorMutation,
  useUpdateTractorMutation,
} = mutationApi;
