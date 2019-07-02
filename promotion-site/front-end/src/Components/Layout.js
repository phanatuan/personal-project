import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
