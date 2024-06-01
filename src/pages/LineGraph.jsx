import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { data } from "../data/data";
import { useSelector } from "react-redux";
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
const LineGraph = () => {
  const { theme } = useSelector((state) => state.theme);
  const parseData = () => {
    const timestamps = data.map((item) =>
      new Date(item.timestamp).toLocaleTimeString()
    );
    const sourcePorts = data.map((item) => item.src_port);
    return { timestamps, sourcePorts };
  };

  const { timestamps, sourcePorts } = parseData();

  const lineData = {
    labels: timestamps,
    datasets: [
      {
        label: "# Alerts Over Time between Source Ports on (2019-01-02)",
        data: sourcePorts,
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
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
      <div className='flex justify-center items-center'>
        <div className='flex flex-col-reverse items-center ml-10 text-blue-600 text-xl font-bold'>
          <span>S</span>
          <span>O</span>
          <span>U</span>
          <span>R</span>
          <span>R</span>
          <span>R</span>
          <span>C</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>S</span>
          <span>&nbsp;</span>
          <FaArrowUpLong className='h-7 w-7' />
        </div>
        <div className='min-h-screen mx-10 mt-10 w-full'>
          <Line data={lineData} options={commonOptions} />
        </div>
      </div>
      <div className='flex justify-center items-center text-xl font-bold text-center'>
        <h3 className='text-blue-600 tracking-widest'>TIME STAMP</h3>
        <MdArrowRightAlt className='h-10 w-10 mt-1 text-blue-600' />
      </div>
    </>
  );
};

export default LineGraph;
