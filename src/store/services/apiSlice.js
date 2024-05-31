import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../../utils/app-constants"
import { EmptyLocalStorage, GetTokenFromLocalStorage } from "../../utils/helper"

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'same-origin',
    prepareHeaders: async (headers) => {
        headers.set('authorization', `Bearer ${GetTokenFromLocalStorage()}`)
        headers.set('Accept', '*/*')
        return headers
    },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        EmptyLocalStorage()
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
