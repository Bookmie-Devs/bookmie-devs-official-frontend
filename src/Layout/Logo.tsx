import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className="dark:text-white text-black font-extrabold flex items-center space-x-2"
    >
      <img width={90} src="logo.svg" />
      <p className="text-3xl">Bookmie Devs</p>
    </Link>
  );
}

export default Logo;
