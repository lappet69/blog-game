import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full  font-body antialiased text-[#000000] bg-[#fcfcfc] dark:text-[#ffffff] dark:bg-[#031022]">
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
