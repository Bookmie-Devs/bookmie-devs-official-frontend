import React from "react";

interface statInfoProp {
  statName: string;
  icon: React.JSX.Element;
}

function Stats(props: statInfoProp): React.JSX.Element {
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
      <h2 className="text-2xl font-bold">2000+</h2>
      <p className="text-lg">{props.statName}</p>
    </div>
  );
}

export default Stats;
