import React from "react";

function TechStack(props) {
  return (
    <div
      className="
      animate-pulse
      flex py-5 px-9 outline 
      bg-blue-100 hover:outline-8 
      outline-emerald-400 rounded-lg 
      space-y-1
      items-center flex-col"
    >
      {props.icon}
      <p className="text-lg">{props.name}</p>
    </div>
  );
}

export default TechStack;
