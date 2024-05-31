import React from 'react'
import { GetTokenFromLocalStorage } from '../utils/helper'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
    const token = GetTokenFromLocalStorage()

    return (
        <>
            {token ? <Navigate to="/admin/dashboard" /> : <Outlet/>}
        </>
    )
}

export default PublicRoutes