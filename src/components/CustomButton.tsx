import React from "react";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  name: string;
}

// Step 2: Use the interface in the component
function CustomButton({ name }: CustomButtonProps): React.JSX.Element {
  return (
    <Link
      to="questions"
      className="
        outline
        outline-2 
        dark:outline-slate-100
        outline-slate-800
        text-slate-800
        text-xl dark:text-white
        shadow-md rounded-md px-16 py-5"
    >
      {name}
    </Link>
  );
}

export default CustomButton;
