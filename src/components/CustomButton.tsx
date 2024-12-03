import React from "react";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  name: string;
  to: string;
  icon?: any;
}

// Step 2: Use the interface in the component
function CustomButton({
  name,
  to,
  icon,
}: CustomButtonProps): React.JSX.Element {
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
