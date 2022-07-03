import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { config } from './config';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 50, 100, 40, 30],
            backgroundColor: '#48817E',
        },
    ],
};

const datasets = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
};

const options = config(labels, datasets);

export const PieChart = () => {
    return (
        <Box
            component="span"
            sx={{ flex: 1, display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            <Card sx={{
                backgroundColor: '#202940',
                flex: 1,
            }}>
                <CardContent>
                    <Pie  width={1000} height={700} options={options} data={data} />
                </CardContent>
            </Card>
        </Box>
    );
}
