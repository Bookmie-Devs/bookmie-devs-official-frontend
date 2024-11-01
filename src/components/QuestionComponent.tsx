import React from "react";
import CodeButton from "./CodeButton";

function QuestionComponent() {
  return (
    <div className="flex rounded-md bg-slate-200 flex-col justify-center px-7 py-4">
      <p className="text-slate-800 bg-slate-300 rounded-md font-mono mb-3 text-lg p-3 whitespace-pre-wrap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellat
        sint nulla, at veritatis vitae iusto consectetur, nesciunt cumque eos
        dolores magni iste accusantium, culpa maxime perspiciatis animi ipsa
        provident?
      </p>
      <div className="pl-2 flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <p className="text-lg font-bold text-center font-mono">Language:</p>
          <p className="outline outline-slate-800 outline-2 px-3 rounded-md">
            {"C++"}
          </p>
        </div>
        <CodeButton />
      </div>
    </div>
  );
}

export default QuestionComponent;
