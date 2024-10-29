import { apiSlice } from "../services/apiSlice";
import { apiUrls } from '../../utils/app-constants'

const offersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOffersList: builder.query({
      query: () => ({
        url: `${apiUrls.getAllOffers}`, // Endpoint to get all offers
        method: "GET",
      }),
      providesTags: ["Offers"],
    }),
    createOffer: builder.mutation({
      query: (body) => ({
        url: `${apiUrls.offers}`, // Admin endpoint to create a new offer
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Offers"],
    }),
    updateOffer: builder.mutation({
      query: ({ id, body }) => ({
        url: `${apiUrls.offers}/${id}`, // Admin endpoint to update an offer by ID
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Offers"],
    }),
    deleteOffer: builder.mutation({
      query: (id) => ({
        url: `${apiUrls.offers}/${id}`, // Admin endpoint to delete an offer by ID
        method: "DELETE",
      }),
      invalidatesTags: ["Offers"],
    }),
  }),
});

export const {
  useGetOffersListQuery,
  useCreateOfferMutation,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
} = offersSlice;
