import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <div>
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <div className='text-center p-10 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
          <h1 className='text-4xl font-bold mb-4 text-gray-800 dark:text-white'>
            Welcome to Network Alert Dashboard
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Monitor and analyze network alerts efficiently with our intuitive
            dashboard.
          </p>
          <button
            onClick={() => dispatch(toggleTheme())}
            className='mb-6 px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <br />
          <Link
            to='/dashboard'
            className='px-6 py-3 text-lg font-medium leading-6 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
