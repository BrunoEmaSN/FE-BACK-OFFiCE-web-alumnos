import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import { BarChart } from '../../components/Chart/BarChart/BarChart';
import { LinearChart } from '../../components/Chart/LinearChart/LinearChart';
import { CardGeneric } from '../../components/Card/Card';

export const AlumnosPage = () => {
    return (
        <Box>
            <Box sx={{ marginBottom: 5 }}>
                <Carousel>
                    <Box sx={{ display: 'inline-block' }}>
                        <BarChart />
                    </Box>
                    <Box sx={{ display: 'inline-block' }}>
                        <LinearChart />
                    </Box>
                </Carousel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
                <CardGeneric backgroundColor="#006766">
                    <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
                        Alumnos inscriptos
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ color: '#fff' }}>
                        133
                    </Typography>
                </CardGeneric>

                <CardGeneric backgroundColor="#006766">
                    <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
                        Regulares
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ color: '#fff' }}>
                        54
                    </Typography>
                </CardGeneric>

                <CardGeneric backgroundColor="#006766">
                    <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
                        Alumnos de baja
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ color: '#fff' }}>
                        12
                    </Typography>
                </CardGeneric>
            </Box>
        </Box>
    )
}
