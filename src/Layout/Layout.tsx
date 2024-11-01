// import React from 'react'

import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
