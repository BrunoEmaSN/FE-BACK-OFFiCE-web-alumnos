import React from 'react';
import { Box } from '@mui/system';
import { Header } from '../components/Header/Header';

export const LayoutPage = ({ children }) => {
    
    return (
        <Box
            sx={{
                display: 'flex',
                bgcolor: '#fff',
                width: '100vw',
                height: '100vh'
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { md: '100%', lg: `calc(100% - ${240}px)` },
                }}
            >
                { children }
            </Box>
        </Box>
    )
}