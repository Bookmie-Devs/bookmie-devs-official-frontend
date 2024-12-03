import React from "react";
import { Link } from "react-router-dom";

// Step 2: Use the interface in the component
function CustomButton({ name, to, icon }) {
  return (
    <Link
      to={to}
      className="flex outline items-center space-x-8 justify-center
        outline-2 
        dark:outline-white
        dark:text-white
        outline-blue-950
        text-slate-800
        text-xl
        text-center
        shadow-md rounded-md px-16 py-5"
    >
      {name}
      {icon && icon}
    </Link>
  );
}

export default CustomButton;
