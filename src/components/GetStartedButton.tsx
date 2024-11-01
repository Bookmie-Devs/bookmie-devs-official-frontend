import { Link } from "react-router-dom";

function GetStartedButton() {
  return (
    <Link
      to={"signup"}
      className="
      bg-green-400 text-xl text-center text-black
      shadow-md rounded-md px-16 py-5"
    >
      Get Started
    </Link>
  );
}

export default GetStartedButton;
