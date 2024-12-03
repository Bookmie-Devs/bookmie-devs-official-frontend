import React from "react";

interface medalProp {
  name: string;
}

function Medal(props: medalProp): React.JSX.Element {
  return (
    <div
      className="flex py-10 px-60 outline 
    bg-blue-100 bg-opacity-30 hover:outline-8 
    outline-emerald-400 
    rounded-lg items-center flex-col"
    >
      <h2 className="text-2xl font-bold">2000+</h2>
      <p className="text-lg">{props.name}</p>
    </div>
  );
}

export default Medal;
