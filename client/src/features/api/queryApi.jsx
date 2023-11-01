import { baseApi } from "./baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //? all tractores get ⤵
    // allTractor: builder.query({
    //   query: (page) => `/tractor?page=${page}`,
    //   providesTags: ["Tractor"],
    // }),
    //? all tractores get ⤴

    //? Traractor Get By Id ⤵
    tractorGetById: builder.query({
      query: (id) => `/tractor/${id}`,
      providesTags: ["Tractor"],
    }),
    //? Traractor Get By Id ⤴

    //? Traractor Get Total Details  ⤵
    tractorGetTotalDetails: builder.query({
      query: () => `/tractor/total/details`,
      providesTags: ["Tractor"],
    }),
    //? Traractor Get Total Details  ⤴
  }),
});

export const {
  useAllTractorQuery,
  useTractorGetByIdQuery,
  useTractorGetTotalDetailsQuery,
} = queryApi;
