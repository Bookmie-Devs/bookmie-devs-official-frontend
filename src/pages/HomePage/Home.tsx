import { FaCode, FaGift, FaLaptopCode } from "react-icons/fa";
import GetStartedButton from "../../components/GetStartedButton";
import Stats from "../../components/Home/Stats";
import { AiOutlineSolution } from "react-icons/ai";
import CustomButton from "../../components/CustomButton";
import footerWave from "../../assets/footerWave.svg";
import devTeam from "../../assets/devTeam.svg";
import OurTechStack from "../../components/Home/OurTechStack";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Bookmie Devs- Home</title>
        <meta
          name="description"
          content="Get started building your dream projects with developers with a track record of devering the best softwares."
        />
      </Helmet>
      <div className="dark:bg-slate-800 bg-slate-100">
        <hr></hr>
        <div
          className="
        flex flex-col sm:flex-row justify-between 
        dark:bg-slate-800 bg-slate-100
        items-center px-1 sm:px-16 py-1"
        >
          <div className="px-3 py-20 sm:py-32 flex flex-col rounded-lg">
            <div className="mb-9">
              <p className="text-5xl text-center font-semibold dark:text-slate-100 mb-5 text-slate-800">
                Get Started with Bookmie
              </p>
              <p className="text-xl text-center text-slate-800 font-mono dark:text-slate-100 sm:text-start">
                Get started building your dream projects with developers with a
                track record of devering the best softwares
              </p>
            </div>

            <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
              <GetStartedButton />
              <CustomButton
                to="https://github.com/Bookmie-Devs"
                name="Open Source Projects"
              />
            </div>
          </div>
          <div className="px-2 mb-3 sm:mb-0 flex flex-col">
            <img className="animate-pulse" src={devTeam} />
          </div>
        </div>

        <div>
          <p className="text-center text-3xl text-white font-bold  mb-5">
            We Specailise in . . .
          </p>
          <OurTechStack />
        </div>

        <div className="px-6 sm:px-21 py-8 flex flex-col space-y-12 sm:flex-row items-center sm:space-y-3">
          <div className="p-2 flex w-full space-y-10 flex-col ">
            <div>
              <p className="text-5xl text-slate-100 font-bold">Why Bookmie?</p>
            </div>
            <div>
              <p className="text-slate-800 dark:text-white">
                <p>An online all in one platform that allows</p>
                <p>Teachers, developers, tutors to set coding exams</p>
                <p>
                  and student to take those exams and the system automatically
                </p>
                <p>marks and grade your result and subtmit it to the person</p>
                <p>who set up the exam in the first place</p>
              </p>
            </div>
            <div>
              <GetStartedButton />
            </div>
          </div>

          <div>
            <img src="learning.svg" />
          </div>
        </div>

        <div className="px-10 bg-slate-800 outline outline-yellow-400 shadow-md shadow-yellow-400 dark:bg-slate-100 mb-4">
          <div className="px-3 py-7 flex justify-evenly space-y-10 sm:space-y-0 flex-col sm:flex-row  m-2 rounded-lg">
            <Stats icon={<FaCode size={30} />} statName="Projects" />
            <Stats icon={<FaLaptopCode size={30} />} statName="Developers" />
            <Stats
              icon={<AiOutlineSolution size={30} />}
              statName="Solutions"
            />
            <Stats icon={<FaGift size={30} />} statName="Donors" />
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${footerWave})` }}
          className="px-10 bg-slate-100 bg-center"
        >
          <div className="px-2 py-5 flex sm:space-x-20 flex-col space-y-11 sm:space-y-0 sm:flex-row rounded-lg">
            <div>
              <img className="rounded-2xl" src="cimg1.webp" />
            </div>
            <div>
              <img className="rounded-2xl" src="coding_boy.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
