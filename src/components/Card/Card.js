import React from 'react';
import { Card, CardContent } from '@mui/material';

export const CardGeneric = ({ children, backgroundColor }) => {
    return (
        <Card sx={{ width: 275, backgroundColor }}>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    )
}
