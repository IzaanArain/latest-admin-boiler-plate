
import { apiUrls } from '../../utils/app-constants'
import { apiSlice } from '../services/apiSlice'

export const authApi = apiSlice
    .injectEndpoints({
        endpoints: builder => ({
            signin: builder.mutation({
                query(body) {
                    return {
                        url: `${apiUrls.signin}`,
                        method: 'POST',
                        body,
                    }
                },
            }),

            changePassword: builder.mutation({
                query(body) {
                    return {
                        url: `${apiUrls.changePassword}`,
                        method: 'POST',
                        body,
                    }
                },
            }),

            signout: builder.mutation({
                query(body) {
                    return {
                        url: `${apiUrls.signout}`,
                        method: 'POST',
                        body,
                    }
                },
            }),

        })
    })

export const {
    useSigninMutation,
    useChangePasswordMutation,
    useSignoutMutation
} = authApi
