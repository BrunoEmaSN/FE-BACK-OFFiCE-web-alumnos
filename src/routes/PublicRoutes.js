import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = ({
    auth
}) => {
    return !auth ? <Outlet /> : <Navigate to ="/" />
}
