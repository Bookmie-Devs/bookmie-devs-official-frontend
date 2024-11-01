import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Logo() {
  return (
    <Link
      to={"/"}
      className="dark:text-white text-black font-extrabold flex items-center space-x-2"
    >
      <img width={40} src={logo} />
      <p className="text-3xl">Bookmie Devs</p>
    </Link>
  );
}

export default Logo;
