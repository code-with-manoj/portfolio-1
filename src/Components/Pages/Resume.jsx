import React from "react";

const Resume = () => {
  return (
    <>
      <div
        id="Resume"
        className=" py-8  ml-auto md:px-14 md:w-5/6 md:pl-32 lg:pl-20 xl:pl-14 flex-col flex items-center bg-white"
      >
        <div className="w-11/12 my-6 md:w-full mx-auto">
          <h3 className="text-slate-900 text-4xl font-bold">
            {" "}
            <span className="border-b-4 border-sky-500">Res</span>ume
          </h3>
          <p className="text-lg font-light py-5">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>

          {/* Summary */}
          <h4 className="text-slate-900 text-3xl font-bold mb-2">Summary</h4>
          <div className="content border-l-2 pl-4 mb-8 border-gray-700">
            <span className="text-lg uppercase text-slate-800 font-bold">
              Manoj Kushwah
            </span>
            <p className="">
              I am a Fresher but, i want to explore my work experience more in
              these coming years. Along with front-end Development , I will also
              complete Backend Development in the coming time, and would like to
              beacome a <b className="text-lg"> "Full-Stack Developer"</b>.{" "}
            </p>
          </div>

          {/* Education*/}
          <h4 className="text-slate-900 text-3xl font-bold mb-2">Education</h4>
          <div className="content border-l-2 pl-4 border-gray-700 mb-4">
            <span className="text-lg uppercase text-slate-900 font-bold">
              Higher Education
            </span>
            <li className="mb-4">
              I had got 73% marks in 12th with PCM (MP Board)
            </li>

            <span className="text-lg text-slate-900 font-bold">
              BACHELOR OF TECHNOLOGY
            </span>
            <li className="">
              B.Tech is going on, By Rajiv Gandhi Proudyogiki Vishwavidyalaya
              (RGPV)
            </li>
            <li className="">Will Complete: 2020-2024</li>
          </div>

          {/* Skills Section */}

          <div className="w-11/12 my-10 md:w-full  mx-auto">
            <h3 className="text-slate-900 text-4xl font-bold">
              {" "}
              <span className="border-b-4 border-sky-500">Ski</span>lls
            </h3>
            <p className="text-lg font-light py-5">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>

            {/* Html */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">HTML</span>
                <span className="">85%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-11/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>

            {/* Css */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">CSS</span>
                <span className="">80%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-10/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>

            {/* JavaScript */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">JAVASCRIPT</span>
                <span className="">50%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-6/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>

            {/* REACT */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">REACT JS</span>
                <span className="">80%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-10/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">BOOTSTRAP</span>
                <span className="">50%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-6/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>

            {/*Tailwind css */}
            <div className="mb-3">
              <div className=" flex justify-between">
                <span className=" font-bold">TAILWIND CSS</span>
                <span className="">80%</span>
              </div>
              <div className="progress-line relative w-full h-3 my-1 bg-gray-300">
                <span className="progress-bar absolute w-10/12 h-full rounded-r-lg bg-sky-500"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
