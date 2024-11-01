// import React from "react";

import { FaCloud, FaMobile, FaReact, FaServer } from "react-icons/fa";
import TechStack from "./TechStack";

function OurTechStack() {
  return (
    <div className="px-10 bg-slate-800 dark:bg-slate-100 outline outline-yellow-400 shadow-md shadow-yellow-500">
      <div className="px-3 py-7 flex justify-evenly space-y-7 sm:space-y-0 flex-col sm:flex-row  m-2 rounded-lg">
        <TechStack icon={<FaReact size={30} />} name="Frontend Devs" />
        <TechStack icon={<FaServer size={30} />} name="Backend Devs" />
        <TechStack icon={<FaCloud size={30} />} name="Aws Cloud Enginers" />
        <TechStack icon={<FaMobile size={30} />} name="Mobile Devs" />
      </div>
    </div>
  );
}

export default OurTechStack;
