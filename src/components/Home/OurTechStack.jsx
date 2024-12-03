import { FaCloud, FaMobile, FaReact, FaSearch, FaServer } from "react-icons/fa";
import TechStack from "./TechStack";
import techBgImg from "../../assets/bg.svg";

function OurTechStack() {
  return (
    <div
      style={{ backgroundImage: `url(${techBgImg})` }}
      className="px-10 py-2 dark:bg-slate-800 bg-slate-100 outline outline-yellow-400 shadow-md shadow-yellow-500"
    >
      <div className="px-1 py-7 flex justify-evenly space-y-7 sm:space-y-0 sm:space-x-3 flex-col sm:flex-row  m-2 rounded-lg">
        <TechStack icon={<FaReact size={30} />} name="Frontend Devs" />
        <TechStack icon={<FaServer size={30} />} name="Backend Devs" />
        <TechStack icon={<FaCloud size={30} />} name="Aws Cloud Enginers" />
        <TechStack icon={<FaMobile size={30} />} name="Mobile Devs" />
        <TechStack icon={<FaSearch size={30} />} name="Research . . ." />
      </div>
    </div>
  );
}

export default OurTechStack;
