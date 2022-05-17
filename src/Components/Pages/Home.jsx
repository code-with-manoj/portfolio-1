import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className=" md:w-4/5 flex h-screen transition-all duration-1000 items-center ml-auto"
      >
        <div className="content ml-16 sm:mx-9 md:ml-24 ">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl  font-bold text-white">
            Welcome
          </h2>
          <span className=" md:text-5xl text-3xl lg:text-6xl font-bold text-white pt-1 pb-6 flex  ">
            I'm a &nbsp;
            <span className="text-sky-500">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Manoj Kushwah", "Front-End", "Web Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </span>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:text-sky-500 py-1 px-2 rounded-xl text-white text-xl"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
