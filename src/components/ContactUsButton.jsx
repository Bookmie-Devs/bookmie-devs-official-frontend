import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactUsButton() {
  return (
    <Link
      to={"/contact"}
      className="flex sm:hidden items-center justify-center
    bg-blue-950 text-xl text-center text-white
        shadow-md rounded-md px-16 py-5"
    >
      Contact Us
      <FaPhone className="ml-1" />
    </Link>
  );
}

export default ContactUsButton;
