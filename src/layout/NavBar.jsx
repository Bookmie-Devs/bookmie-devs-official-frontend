import { Link } from "react-router-dom";
import Logo from "./Logo";
import { VscThreeBars } from "react-icons/vsc";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";

function NavBar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  return (
    <nav className=" bg-white dark:bg-slate-800 flex justify-between bg-cover items-center px-3 sm:px-9 py-5">
      <Logo />
      <button className="sm:hidden dark:text-white text-white">
        <VscThreeBars size={30} />
      </button>
      <div className="  hidden sm:flex sm:items-center">
        <Link
          to={"contact"}
          className="text-lg hover:animate-bounce dark:text-white text-blue-950"
        >
          Contact
        </Link>
        <Link
          to={"about"}
          className="text-lg px-6 py-3 hover:animate-bounce text-center rounded-md text-blue-950 dark:text-white"
        >
          About
        </Link>
        <button
          className="text-lg px-6 py-3 rounded-md dark:text-white text-slate-900"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode && <IoSunnySharp size={20} />}
          {!isDarkMode && <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
