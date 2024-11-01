import React from "react";
import { FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function CodeButton() {
  return (
    <Link
      className="bg-green-400 p-3 flex items-center justify-center w-1/3 rounded-md"
      to={"/ide"}
    >
      Code
      <FaFileCode size={16} />
    </Link>
  );
}

export default CodeButton;
