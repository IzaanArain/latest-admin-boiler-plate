import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  DoughnutController,
  PieController,
} from "chart.js";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  DoughnutController,
  PieController,
  Title,
  Tooltip,
  Legend
);

const ThemeChart = ({ type, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const chart = {
    line: <Line options={options} data={data} />,
    bar: <Bar options={options} data={data} />,
    doughnut: <Doughnut options={options} data={data} />,
    pie: <Pie options={options} data={data} />,
  };

  return (
    <div className="theme-chart">
      <div className="wrapper">{chart[type]}</div>
    </div>
  );
};

export default ThemeChart;
