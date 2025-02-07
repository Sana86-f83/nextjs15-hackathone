import React from "react";
import HomeNavbar from "./HomeNavbar";
import Navbar2 from "./Navbar2";

const Layout = ({ isHomePage }:any) => {
  return (
    <div>
      {/* Conditional Rendering: Home page ke liye HomeNavbar, baaki pages ke liye Navbar2 */}
      {isHomePage ? <HomeNavbar /> : <Navbar2 />}
    </div>
  );
};

export default Layout;
