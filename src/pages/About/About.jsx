import conference from "../../assets/conference.svg";
import { Helmet } from "react-helmet";
import wave from "../../assets/yellowave.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - Bookmie Devs</title>
        <meta
          name="description"
          content="Learn more about Bookmie Devs, a software development company."
        />
      </Helmet>
      <div
        style={{ backgroundImage: `url(${wave})` }}
        className="h-auto pt-10 items-center bg-white dark:bg-slate-800 bg-cover justify-center flex space-y-5"
      >
        <div className="flex justify-center mb-9 sm:mb-0 sm:space-x-10 sm:px-28">
          <div className="hidden sm:inline">
            <div className="">
              <img
                className="animate-pulse"
                src={conference}
                alt="Conference Illustration"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl text-blue-950 dark:text-white font-bold mb-4">
              About Bookmie Devs
            </h1>
            <p className="text-lg text-gray-700 dark:text-white mb-6">
              At Bookmie Devs, we are passionate about building innovative
              software solutions that help businesses thrive in the digital
              world. We specialize in creating custom software, mobile apps, and
              USSD solutions, designed to meet the unique needs of each client.
            </p>
            <p className="text-lg text-gray-70 dark:text-white mb-6">
              Our team of skilled developers works closely with clients to
              ensure that every project is executed with precision and meets the
              highest standards of quality. Whether you're looking to streamline
              your operations, improve user experiences, or develop a new
              product, we have the expertise to bring your vision to life.
            </p>
            <h2 className="text-2xl text-blue-950 dark:text-white font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 dark:text-white">
              Our mission is to empower businesses by delivering cutting-edge
              technology that drives growth and innovation. We aim to simplify
              complex processes and enhance connectivity through the power of
              technology.
            </p>
            <h2 className="text-2xl text-blue-950 dark:text-white font-semibold mb-4">
              Our Services
            </h2>
            <ul className="text-lg text-gray-700 dark:text-white list-disc list-inside">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>USSD Solutions</li>
              <li>Enterprise Solutions</li>
              <li>Consulting and Digital Transformation</li>
            </ul>
            <div className="mt-6 mb-5">
              <Link
                to={"/contact"}
                className="bg-blue-950 text-white text-lg py-3 px-8 rounded-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
