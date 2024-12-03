import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FaCode, FaGift, FaGithub, FaLaptopCode } from "react-icons/fa";
import Stats from "../../components/Home/Stats";
import { AiOutlineSolution } from "react-icons/ai";
import learning from "../../assets/learning.svg";
import CustomButton from "../../components/CustomButton";
import techBgImg from "../../assets/bg.svg";
import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";
import cloudsvg from "../../assets/cloud.svg";
import severStatusSvg from "../../assets/serverStatus.svg";
// import yellowave from "../../assets/yellowave.svg";
import OurTechStack from "../../components/Home/OurTechStack";
import { Helmet } from "react-helmet";
import "./Home.css";
import AboutButton from "../../components/GetStartedButton";
import { useTheme } from "../../context/ThemeContext";
import ContactUsButton from "../../components/ContactUsButton";
// import { useTheme } from "../../context/ThemeContext";

const backgroundImages = [wave, wave2];

function Home() {
  const { theme, setTheme } = useTheme();

  const [bgIndex, setBgIndex] = useState(0);
  const [currentBg, setCurrentBg] = useState(backgroundImages[0]);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -70 }, // Start off the left side
    visible: { opacity: 1, x: 0 }, // End at its original position
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 70 }, // Start off the right side
    visible: { opacity: 1, x: 0 }, // End at its original position
  };

  console.log(setCurrentBg);
  const sectionRefs = Array.from({ length: 5 }, () => useRef(null));
  const inViewStates = sectionRefs.map((ref) => useInView(ref, { once: true }));

  useEffect(() => {
    setInterval(() => {
      // let index = increaseBgIndex();
      setBgIndex((index) => index + 1);
      // setCurrentBg(backgroundImages[0]);
      console.log(bgIndex);
    }, 10000);
  }, [bgIndex]);
  return (
    <>
      <Helmet>
        <title>Bookmie Devs - Home</title>
        <meta
          name="description"
          content="Get started building your dream projects with developers with a track record of delivering the best software."
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-800 ">
        {/* <hr /> */}

        {/* Section 1 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[0] ? "visible" : "hidden"}
          variants={fadeInFromLeft} // Fade in from the left
          transition={{ duration: 1.0 }}
          style={{ backgroundImage: `url(${currentBg})` }}
          className="flex flex-col sm:flex-row justify-between bg-cover mb-5 items-center bg-opacity-5 px-1 sm:px-16 py-1"
          ref={sectionRefs[0]}
        >
          <div className="px-3 py-20 sm:py-32 flex flex-col rounded-lg">
            <motion.div variants={fadeInFromLeft}>
              <p className="text-5xl text-center sm:text-start font-semibold mb-5 dark:text-white text-blue-950">
                Welcome Bookmie
              </p>
              <p className="text-xl animate-bounce text-center dark:text-white text-blue-950 font-sans sm:text-start">
                Get started building your dream projects with developers with a
                track record of delivering the best software.
              </p>
            </motion.div>
            <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
              <CustomButton
                to="https://github.com/Bookmie-Devs"
                name="Github"
                icon={<FaGithub />}
              />
              <AboutButton />
              <ContactUsButton />
            </div>
          </div>
          <motion.div variants={fadeInFromLeft}>
            <img
              className="sm:animate-pulse"
              src={cloudsvg}
              alt="Development Team"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[1] ? "visible" : "hidden"}
          variants={fadeInFromRight}
          transition={{ duration: 0.6 }}
          ref={sectionRefs[1]}
        >
          <p className="text-center text-3xl dark:text-white text-blue-950 font-bold mb-5">
            We Specialize in . . .
          </p>
          <OurTechStack />
        </motion.div>

        {/* Section 3 */}
        <div className="bg-cover" style={{ backgroundImage: `url(${wave2})` }}>
          <motion.div
            initial="hidden"
            animate={inViewStates[2] ? "visible" : "hidden"}
            variants={fadeInFromLeft} // Fade in from the left
            transition={{ duration: 0.7 }}
            className="px-6 sm:px-21 py-8 bg-opacity-30 flex flex-col space-y-12 sm:flex-row items-center sm:space-y-3"
            ref={sectionRefs[2]}
          >
            <div className="p-2 flex w-full space-y-10 flex-col">
              <div>
                <p className="text-5xl text-blue-950 font-bold">Why Bookmie?</p>
              </div>
              <div>
                <p className="text-blue-950">
                  We deliver cutting egde software from low level software to
                  web app that runs smoothly with consistent updates. We allow
                  you to keep track of your software performance with a highly
                  user friendly dahsboard which allows you to request for
                  updates report issues
                </p>
              </div>
            </div>
            <motion.div variants={fadeInFromLeft}>
              <img src={severStatusSvg} alt="Learning" />
            </motion.div>
          </motion.div>

          {/* ////////////////////////////////////// */}
          <motion.div
            initial="hidden"
            animate={inViewStates[2] ? "visible" : "hidden"}
            variants={fadeInFromLeft} // Fade in from the left
            transition={{ duration: 0.7 }}
            className="px-6 sm:px-21 py-8 flex flex-col space-y-12 sm:flex-row sm:space-x-36 items-center sm:space-y-3"
            ref={sectionRefs[2]}
          >
            <motion.div variants={fadeInFromLeft}>
              <img src={learning} alt="Learning" />
            </motion.div>
            <div className="p-2 flex w-full space-y-10 flex-col">
              <div>
                <p className="text-5xl animate-bounce text-blue-950 font-bold">
                  Track your software devlivery with Bookmie
                </p>
              </div>

              <div>
                <AboutButton />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 4 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[3] ? "visible" : "hidden"}
          variants={fadeInFromRight} // Fade in from the right
          transition={{ duration: 0.8 }}
          style={{ backgroundImage: `url(${techBgImg})` }}
          className="px-10 dark:bg-slate-800 outline outline-yellow-400 shadow-md shadow-yellow-400 bg-slate-100 mb-4"
          ref={sectionRefs[3]}
        >
          <div className="px-3 py-7 flex justify-evenly space-y-10 sm:space-y-0 flex-col sm:flex-row m-2 rounded-lg">
            <Stats icon={<FaCode size={30} />} statName="Projects" />
            <Stats icon={<FaLaptopCode size={30} />} statName="Developers" />
            <Stats
              icon={<AiOutlineSolution size={30} />}
              statName="Solutions"
            />
            <Stats icon={<FaGift size={30} />} statName="Donors" />
          </div>
        </motion.div>

        {/* Section 5 */}
        {/* <motion.div
          initial="hidden"
          animate={inViewStates[4] ? "visible" : "hidden"}
          variants={fadeInFromLeft}
          transition={{ duration: 0.9 }}
          style={{ backgroundImage: `url(${footerWave})` }}
          className="px-10 bg-slate-100 bg-center"
          ref={sectionRefs[4]}
        >
          <div className="px-2 py-5 animate-pulse flex sm:space-x-20 flex-col space-y-11 sm:space-y-0 sm:flex-row rounded-lg">
            <div>
              <img className="rounded-2xl" src="cimg1.webp" alt="Image 1" />
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="coding_boy.svg"
                alt="Coding Boy"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </>
  );
}

export default Home;
