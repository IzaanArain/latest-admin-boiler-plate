import { createSlice } from '@reduxjs/toolkit'

export const offersSlice = createSlice({
    name: 'offers',
    initialState: {
        isLoading: false,
        selectedData: null,
        singleData: null,
        page: 1,
        perPage: 10,
        refetch: 1,
        paginatedData: {
            data: [],
            pagination: null
        },
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setSingleData: (state, action) => {
            state.singleData = action.payload
        },
        setPaginatedData: (state, action) => {
            state.paginatedData.data = action.payload.data
            state.paginatedData.pagination = action.payload.pagination
        },
        setPage: (state) => {
            state.page = state.page + 1
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload
        },
        setRefetch: (state) => {
            state.refetch = state.refetch + 1
        },
        setSelectedData: (state, action) => {
            // console.log("action.payload",action.payload);
            state.selectedData = action.payload
        }
    },
})

export const {
    setIsLoading,
    setSingleData,
    setPaginatedData,
    setPage,
    setPerPage,
    setRefetch,
    setSelectedData,

} = offersSlice.actions

export default offersSlice.reducer