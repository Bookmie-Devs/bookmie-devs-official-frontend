import React from "react";
import { Link } from "react-router-dom";

function CustomButton(): React.JSX.Element {
  return (
    <>
      <Link
        to={"questions"}
        className="
        outline
        outline-2 
        dark:outline-slate-100
        outline-slate-800
        text-slate-800
        text-xl dark:text-white
        shadow-md rounded-md px-16 py-5"
      >
      Projects
      </Link>
    </>
  );
}

export default CustomButton;
