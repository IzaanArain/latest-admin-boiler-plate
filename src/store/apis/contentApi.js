
import { apiUrls } from '../../utils/app-constants'
import { apiSlice } from '../services/apiSlice'

export const contentApi = apiSlice
    .injectEndpoints({
        endpoints: builder => ({
            getPage: builder.query({
                query: (slug) => ({
                    url: `${apiUrls.getTcpp}`,
                    method: "GET",
                    params: {
                        type: slug?.split("-").join('_')
                    },
                }),
            }),

            updatePage: builder.mutation({
                query(body) {
                    return {
                        url: `${apiUrls.tcpp}`,
                        method: 'POST',
                        body,
                    }
                },
            }),

        })
    })

export const {
    useLazyGetPageQuery,
    useUpdatePageMutation
} = contentApi
