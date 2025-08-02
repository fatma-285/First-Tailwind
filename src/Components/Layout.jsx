import React from "react";
import Navabar from "./Navabar";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navabar />
      {/* <div className="mt-5 pt-3"> */}
        <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
}
