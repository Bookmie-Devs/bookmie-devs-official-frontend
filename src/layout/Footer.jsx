import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-slate-100 shadow dark:bg-slate-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img width={35} src={logo} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bookmie Devs
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/about"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <Link to={"/contact"} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()}
          <a href="/" className="hover:underline">
            Bookmie Devs
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
