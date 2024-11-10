import React from "react";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  name: string;
  to: string;
}

// Step 2: Use the interface in the component
function CustomButton({ name, to }: CustomButtonProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className="
        outline
        outline-2 
        outline-blue-950
        text-slate-800
        text-xl
        text-center
        shadow-md rounded-md px-16 py-5"
    >
      {name}
    </Link>
  );
}

export default CustomButton;
