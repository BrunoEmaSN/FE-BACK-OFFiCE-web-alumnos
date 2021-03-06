import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { config } from './config';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["M", "T", "W", "T", "F", "S", "S"];
const datasets = { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] };

const { data, options } = config(labels, datasets);

export const BarChart = () => {
    return (
        <Box
            component="span"
            sx={{ mx: '2px', transform: 'scale(0.8)' }}
        >
            <Card sx={{
                backgroundColor: '#006766',
            }}>
                <CardContent>
                    <Bar width={800} height={300} options={options} data={data} />
                </CardContent>
            </Card>
        </Box>
    )
}

