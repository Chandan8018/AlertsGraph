import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { data } from "../data/data";
import { useSelector } from "react-redux";
import { MdArrowRightAlt } from "react-icons/md";

const BarGraph = () => {
  const { theme } = useSelector((state) => state.theme);
  const parseData = () => {
    const categories = data
      .filter((item) => item.alert)
      .map((item) => item.alert.category);
    const uniqueCategories = [...new Set(categories)];
    const categoryCounts = uniqueCategories.map(
      (category) => categories.filter((cat) => cat === category).length
    );
    return { uniqueCategories, categoryCounts };
  };

  const { uniqueCategories, categoryCounts } = parseData();

  const barData = {
    labels: uniqueCategories,
    datasets: [
      {
        label: "Alert Categories",
        data: categoryCounts,
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: "rgba(175, 145, 129, 1)",
        borderWidth: 2,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: theme === "light" ? "black" : "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === "light" ? "black" : "white",
        },
        grid: {
          color:
            theme === "light"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        ticks: {
          color: theme === "light" ? "black" : "white",
        },
        grid: {
          color:
            theme === "light"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  return (
    <>
      <div className='min-h-screen m-10'>
        <Bar data={barData} options={commonOptions} />
      </div>
      <div className='flex justify-center items-center mb-5 text-xl font-bold text-center'>
        <h3>Categories</h3>
        <MdArrowRightAlt className='h-10 w-10 mt-2' />
      </div>
    </>
  );
};

export default BarGraph;
