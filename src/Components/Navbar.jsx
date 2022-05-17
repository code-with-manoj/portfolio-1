import React, { useState } from "react";
import Footer from "./Footer";
import Logo from './Images/Logo.jpg'

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={show ? "navbar mobile " : "navbar"}>
        <header className="fixed top-0 left-0 py-4 px-2 z-20 h-screen items-center w-60 md:block bg-gray-900">
          {/* Top */}
          <div className="nav-brand flex justify-center flex-col items-center ">
            <img
              src={Logo}
              className="w-24 bg-gray-900 border bg-center border-sky-400  p-1.5 object-cover h-24 co rounded-full"
              alt=""
            />
            <h2 className="name text-white text-lg font-semibold py-2">
              Manoj Kushwah
            </h2>
            <div className="social-accounts flex space-x-2">
              <a href=""></a>
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/coder_manoj/"
                className="icon"
                target="_blank"
              >
                <i class="bx bxl-instagram"></i>
              </a>
              {/* Twitter Link */}
              <a
                href="https://twitter.com/coder_manoj"
                className="icon"
                target="_blank"
              >
                <i class="bx bxl-twitter"></i>
              </a>
              {/* LinkedIn Link */}

              <a
                href="https://www.linkedin.com/in/manoj-kushwah-8492821bb/"
                className="icon"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              {/* Facebook Link */}

              <a
                href="https://www.facebook.com/profile.php?id=100038900621289"
                className="icon"
                target="_blank"
              >
                <i class="bx bxl-facebook"></i>
              </a>
              {/* Whatsapp Link */}

              <a
                href="https://wa.me/message/PKE47I6Z4JEXI1"
                className="icon"
                target="_blank"
              >
                <i class="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Nav-Links */}

          <div id="nav" className=" self-start text-white py-4 px-2 space-y-6 ">
            <a href=""></a>
            {/* Home */}
            <a
              href="#Home"
              className="flex hover:text-sky-500 font-bold items-center"
            >
              <i class="nav-icon bx bx-home"></i>
              Home
            </a>
            {/* About */}

            <a
              href="#About"
              className="flex hover:text-sky-500 font-bold items-center"
            >
              <i class="nav-icon bx bx-user"></i>
              About
            </a>
            {/* Resume */}

            <a
              href="#Resume"
              className="flex hover:text-sky-500 font-bold items-center"
            >
              <i class="nav-icon bx bx-file-blank"></i>
              Resume
            </a>
           
            {/* contact  */}

            <a
              href="#Contact"
              className="flex hover:text-sky-500 font-bold items-center"
            >
              <i class="nav-icon bx bx-mail-send"></i>
              Contact
            </a>
          </div>

          {/* Footer */}
          <footer className=" absolute w-full bottom-7 flex flex-col items-center">
            <p className="text-white flex items-center">
              &copy; Copyright{" "}
              <div className=" pl-2 font-bold ">manoj-kushwah</div>
            </p>
            <p className="text-white text-lg  flex items-center">
              Designed by{" "}
              <h2 className="text-sky-500 text-xl font-bold pl-2 ">Me😎</h2>
            </p>
          </footer>
        </header>
      </div>
      {/* Hamburger Menu */}
      <a>
        <i
          onClick={() => setShow(!show)}
          className="w-10 h-10 flex justify-center items-center fixed top-3 right-3 md:hidden font-bold bg-sky-600 text-white text-2xl rounded-full bx bx-menu z-10"
        ></i>
      </a>
      <a href="#Home">
        <i
          id="jump"
          className="w-10 h-10 flex justify-center items-center fixed bottom-3 right-3  font-bold bg-sky-600 text-white text-2xl rounded-full bx bx-up-arrow-alt z-10"
        ></i>
      </a>
    </>
  );
};

export default Navbar;
