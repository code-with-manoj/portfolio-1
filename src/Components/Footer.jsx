import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" md:w-4/5 lg:hidden flex   ml-auto bg-gray-900 py-4 flex-col justify-center items-center text-md">
        <p className="text-gray-300 flex items-center">
          &copy; Copyright
          <div className=" pl-2 font-bold text-lg ">manoj-kushwah</div>
        </p>
        <p className="text-white text-md  flex items-center">
          Designed by <h2 className="text-sky-500 text-xl font-bold pl-2 ">Me😎</h2>
        </p>
      </footer>
    </>
  );
};

export default Footer;
