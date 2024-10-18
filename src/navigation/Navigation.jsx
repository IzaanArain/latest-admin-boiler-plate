import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import SigninForm from '../components/auth/SigninForm'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardPage from '../pages/DashboardPage'
import NotFound from '../pages/NotFound'
import UserPage from '../pages/UserPage'
import ChangePasswordPage from '../pages/ChangePasswordPage'
import ContentManagementPage from '../pages/ContentManagementPage'
import PublicRoutes from '../navigation/PublicRoutes'
import ProtectedRoutes from '../navigation/ProtectedRoutes'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route element={<PublicRoutes />}>
                    <Route path="/admin" element={<AuthLayout children={<SigninForm />} />} />
                </Route>

                {/* PROTECTED ROUTES */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/admin/dashboard" element={<DashboardLayout children={<DashboardPage />} />} />
                    <Route path="/admin/user" element={<DashboardLayout children={<UserPage />} />} />
                    <Route path="/admin/change-password" element={<DashboardLayout children={<ChangePasswordPage />} />} />
                    <Route path="/admin/page/:slug" element={<DashboardLayout children={<ContentManagementPage />} />} />
                </Route>


                {/* KEEP IT AT THE END */}
                <Route path="/admin/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation