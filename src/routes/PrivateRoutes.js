import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LayoutPage } from '../pages/LayoutPage';

export const PrivateRoutes = ({
    auth
}) => {
    return (
        auth ? (
            <LayoutPage>
                <Outlet />
            </LayoutPage>
        ) : <Navigate to ="/login" />
    )
}
