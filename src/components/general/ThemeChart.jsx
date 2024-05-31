import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ThemeChart = ({ type, data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }

    const chart = {
        line: <Line options={options} data={data} />,
    }

    return (
        <div className='theme-chart'>
            <div className="wrapper">
                {chart[type]}
            </div>
        </div>
    )
}

export default ThemeChart