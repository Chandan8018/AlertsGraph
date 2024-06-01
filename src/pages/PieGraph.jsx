import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { data } from "../data/data";
import { useSelector } from "react-redux";
import { MdArrowRightAlt } from "react-icons/md";

const PieGraph = () => {
  const { theme } = useSelector((state) => state.theme);
  const parseData = () => {
    const eventType = data.map((item) => item.event_type);
    const uniqueEvents = [...new Set(eventType)];
    const eventCounts = uniqueEvents.map(
      (event) => eventType.filter((cat) => cat === event).length
    );
    return { uniqueEvents, eventCounts };
  };

  const { uniqueEvents, eventCounts } = parseData();

  const pieData = {
    labels: uniqueEvents,
    datasets: [
      {
        label: "Event Distribution",
        data: eventCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
        <Pie data={pieData} options={commonOptions} />
      </div>
      <div className='flex justify-center items-center mb-5 text-xl font-bold text-center'>
        <h3>Events</h3>
        <MdArrowRightAlt className='h-10 w-10 mt-2' />
      </div>
    </>
  );
};

export default PieGraph;
