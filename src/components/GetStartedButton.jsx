import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

function AboutButton() {
  return (
    <Link
      to={"/about"}
      className="flex items-center justify-center
      bg-blue-950 text-xl text-center text-white
      shadow-md rounded-md px-16 py-5"
    >
      About
      <FcAbout className="ml-1" />
    </Link>
  );
}

export default AboutButton;
