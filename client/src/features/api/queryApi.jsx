import { baseApi } from "./baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //? all tractores get ⤵
    allTractor: builder.query({
      query: () => "/tractor",
      providesTags: ["Tractor"],
    }),
    //? all tractores get ⤴

    //? Traractor Get By Id ⤵
    tractorGetById: builder.query({
      query: (id) => `/tractor/${id}`,
      providesTags: ["Tractor"],
    }),
    //? Traractor Get By Id ⤴
  }),
});

export const { useAllTractorQuery, useTractorGetByIdQuery } = queryApi;
