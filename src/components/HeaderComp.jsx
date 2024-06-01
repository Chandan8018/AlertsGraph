import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useLocation } from "react-router-dom";

export default function HeaderComp() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar fluid rounded>
      <NavbarBrand href='#'>
        <img
          src='https://jonmgomes.com/wp-content/uploads/2020/05/Comp_1.gif'
          className='md:ml-7 mr-1 h-6 sm:h-9 rounded-sm'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Graph
        </span>
      </NavbarBrand>
      <div className='flex gap-5 md:order-2'>
        <Button
          className='w-10 h-10 md:mr-10'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <FaSun className='w-5 h-5' />
          ) : (
            <FaMoon className='w-5 h-5' />
          )}
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href='/' active={path === "/"}>
          Home
        </NavbarLink>
        <NavbarLink href='/dashboard' active={path === "/dashboard"}>
          Dashboard
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
