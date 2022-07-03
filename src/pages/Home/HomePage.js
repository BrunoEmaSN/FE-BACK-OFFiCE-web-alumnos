import { Box } from '@mui/material';
import React from 'react';
import { HomeImg } from './components/HomeImg';
import Home2 from '../../assets/Img/Home2.png'

export const HomePage = () => {
    return (
        <Box>
            <HomeImg
                title="Web Alumnos"
                subtitle="Back Office"
                description="Es el proyecto final de la carrera Analista de Sistemas de la Escuela Normal Superior Nº 10"
                link="#"
                linkText="Leer mas..."
                image={Home2}
                imageText="home2"
            />
        </Box>
    )
}
