import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './services/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
})

setupListeners(store.dispatch)

