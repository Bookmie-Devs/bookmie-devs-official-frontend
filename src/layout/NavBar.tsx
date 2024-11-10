import { Link } from "react-router-dom";
import Logo from "./Logo";
import { VscThreeBars } from "react-icons/vsc";
import wave from "../assets/wave.svg";

function NavBar() {
  return (
    <nav className=" bg-white flex justify-between bg-cover items-center px-3 sm:px-9 py-5">
      <Logo />
      <button className="sm:hidden  text-white">
        <VscThreeBars size={30} />
      </button>
      <div className="space-x-4 hidden sm:inline">
        <Link to={"login"} className="text-xl text-bue-950">
          Contact
        </Link>
        <Link
          to={"signup"}
          className="text-lg bg-blue-950  px-6 py-3 hover:animate-bounce text-center rounded-md text-white"
        >
          Get Started
        </Link>
        <Link
          className="text-lg px-6 py-3 rounded-md outline outline-2 outline-slate-900 text-slate-900"
          to={""}
        >
          Github
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
