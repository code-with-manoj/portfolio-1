import React, { useState } from "react";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className=" py-10  ml-auto px-2 md:px-14 md:w-5/6 md:pl-32 lg:pl-20 xl:pl-14 flex-col flex items-center bg-white"
      >
        <div className="w-11/12 my-6 md:w-full mx-auto">
          <h3 className="text-slate-900 text-4xl font-bold">
            {" "}
            <span className="border-b-4 border-sky-500">Con</span>tact
          </h3>
          <p className="font-light my-5 text-lg">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>

          <div className="md:w-11/12 mx-auto  ">
            {/* Location */}
            <div className="loaction w-11/12 mx-auto shadow-xl h-full bg-white">
              <div className="flex w-full mb-2 items-center">
                <i class="bx bx-map bg-sky-200 text-3xl m-3 rounded-full w-10 h-10 p-1 flex justify-center items-center text-sky-500"></i>
                <div className="">
                  <span className="font-bold text-md">Location:</span>
                  <p className="text-sm">
                    Gali No.2 Mayur Bihar Phase-1, New Delhi
                  </p>
                </div>
              </div>
              {/* Email */}

              <div className="flex w-full mb-2 items-center">
                <i class="bx bx-mail-send bg-sky-200 text-3xl m-3 rounded-full w-10 h-10 p-1 flex justify-center items-center text-sky-500"></i>
                <div className="flex flex-col">
                  <span className="font-bold text-md">Email:</span>
                  <a
                    className="text-sm"
                    href="mailto:officialmanojkushwah@gmail.com"
                  >
                    officialmanojkushwah@gmail.com
                  </a>
                </div>
              </div>
              {/* Mobile */}
              <div className="flex w-full mb-2 items-center">
                <i class="bx bx-mobile-alt bg-sky-200 text-3xl m-3 rounded-full w-10 h-10 p-1 flex justify-center items-center text-sky-500"></i>
                <div className="flex flex-col">
                  <span className="font-bold text-md">Mobile:</span>
                  <a href="tel:+917909892011" className="text-sm">
                    +91 7909892011 &nbsp; <b className="text-lg">Tel:</b> +91
                    9753630483
                  </a>
                </div>
              </div>
            </div>

            {/* Conatct Form */}
            <form
              method="POST"
              className="loaction w-11/12 py-6 mx-auto  flex flex-col items-center shadow-xl h-full bg-white"
            >
              <div className="flex flex-col w-2/4 mx-2 py-2">
                <label htmlFor="Name">Your Name</label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="border-2 border-gray-300 my-1 p-1"
                />
              </div>

              <div className="flex flex-col w-2/4 mx-2 py-2">
                <label htmlFor="Email"> Your Email</label>
                <input
                  type="email"
                  id="Name"
                  name="email"
                  placeholder="abc@gamil.com"
                  className="border-2 border-gray-300 my-1 p-1"
                />
              </div>

              <button
                type="submit"
                className="text-center py-2 px-3 bg-sky-500  my-4 text-white font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
