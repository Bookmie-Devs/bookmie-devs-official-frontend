import { Link } from "react-router-dom";
import Logo from "./Logo";
import { VscThreeBars } from "react-icons/vsc";

function NavBar() {
  return (
    <nav className="dark:bg-slate-800 bg-slate-100 flex justify-between shadow-2xl items-center shadow-emerald-200 px-3 sm:px-9 py-5">
      <Logo />
      <button className="sm:hidden text-white">
        <VscThreeBars size={30} />
      </button>
      <div className="space-x-4 hidden sm:inline">
        <Link to={"login"} className="text-xl text-black dark:text-white">
          Log in
        </Link>
        <Link
          to={"signup"}
          className="text-lg bg-green-400  px-6 py-3 hover:animate-bounce text-center rounded-md text-black"
        >
          Get Started
        </Link>
        <Link
          className="text-lg px-6 py-3 rounded-md outline outline-2 outline-slate-900 dark:outline-neutral-100 text-slate-900 dark:text-white"
          to={""}
        >
          Github
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
