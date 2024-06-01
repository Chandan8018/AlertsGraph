import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { data } from "../data/data";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdArrowRightAlt } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);
  const parseData = () => {
    const timestamps = data
      .filter((item, index) => index < 10)
      .map((item) => new Date(item.timestamp).toLocaleTimeString());
    const sourcePorts = data
      .filter((item, index) => index < 10)
      .map((item) => item.src_port);
    const categories = data
      .filter((item, index) => item.alert && index < 10)
      .map((item) => item.alert.category);
    const uniqueCategories = [...new Set(categories)];
    const categoryCounts = uniqueCategories.map(
      (category) => categories.filter((cat) => cat === category).length
    );
    const eventType = data.map((item) => item.event_type);
    const uniqueEvents = [...new Set(eventType)];
    const eventCounts = uniqueEvents.map(
      (event) => eventType.filter((cat) => cat === event).length
    );
    return {
      timestamps,
      uniqueCategories,
      categoryCounts,
      uniqueEvents,
      eventCounts,
      sourcePorts,
    };
  };

  const {
    timestamps,
    uniqueCategories,
    categoryCounts,
    uniqueEvents,
    eventCounts,
    sourcePorts,
  } = parseData();

  const barData = {
    labels: uniqueCategories,
    datasets: [
      {
        label: "# Alert Categories",
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
    <div className='px-10 mb-40'>
      <h2 className='text-center text-2xl font-bold mb-10 mt-3'>
        Network Alert and Event Graphs
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-20'>
        <div className='mb-7 h-80 flex flex-col items-center'>
          <Bar data={barData} options={commonOptions} />
          <div className='flex justify-center items-center mb-1 text-xl font-bold text-center'>
            <h3 className='text-blue-600'>Categories</h3>
            <MdArrowRightAlt className='h-10 w-10 mt-2 text-blue-600' />
          </div>
          <Button
            className='bg-gradient-to-r from-[#9C7945] via-[#F4EBA3] to-[#9C7945] text-black'
            size={"sm"}
            onClick={() => navigate("/bardata")}
          >
            View Details
          </Button>
        </div>
        <div className='mb-7 h-80 flex flex-col items-center'>
          <Line data={lineData} options={commonOptions} />
          <div className='flex justify-center items-center text-xl font-bold text-center'>
            <h3 className='text-blue-600'>Time Stamp</h3>
            <MdArrowRightAlt className='h-10 w-10 mt-2 text-blue-600' />
          </div>
          <Button
            className='bg-gradient-to-r from-[#9C7945] via-[#F4EBA3] to-[#9C7945] text-black mt-5'
            size={"sm"}
            onClick={() => navigate("/linedata")}
          >
            View Details
          </Button>
        </div>
      </div>
      <div className='mb-7 mt-32 h-80 flex flex-col items-center'>
        <Pie data={pieData} options={commonOptions} />
        <div className='flex justify-center items-center text-xl font-bold text-center'>
          <h3 className='text-blue-600'>Events Type Distribution</h3>
          <MdArrowRightAlt className='h-10 w-10 mt-2 text-blue-600' />
        </div>
        <Button
          className='bg-gradient-to-r from-[#9C7945] via-[#F4EBA3] to-[#9C7945] text-black'
          size={"sm"}
          onClick={() => navigate("/piedata")}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
