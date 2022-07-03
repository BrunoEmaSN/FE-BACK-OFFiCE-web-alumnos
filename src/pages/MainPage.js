import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from '../routes/AppRoutes';
import { theme } from '../theme/theme';

export const MainPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    )
}
