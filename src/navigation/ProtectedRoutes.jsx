import React from 'react'
import { GetTokenFromLocalStorage } from '../utils/helper'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const token = GetTokenFromLocalStorage()

    return (
        <>
            {token ?  <Outlet/> : <Navigate to="/admin" />}
        </>
    )
}

export default ProtectedRoutes