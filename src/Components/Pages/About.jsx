import React from "react";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="mt-14 py-5  ml-auto md:px-14 md:w-5/6 md:pl-32 lg:pl-20 xl:pl-14 flex-col flex items-center bg-white"
      >
        {/* About Section */}
        <div className="w-11/12 my-6 md:w-full mx-auto">
          <h3 className="text-slate-900 text-4xl font-bold">
            {" "}
            <span className="border-b-4 border-sky-500">Abo</span>ut
          </h3>
          <p className="text-lg font-light py-5">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="w-5/6 py-10 ">
            <img
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <h2 className="text-slate-900 text-3xl font-bold py-4">
            UI/UX Designer & Web Developer.
          </h2>
          <p className="font-light text-lg italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Data ABout Me */}
          {/* Birthday */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              Birthday:
            </div>
            <p clasName="font-light">20 Dec 2003</p>
          </div>

          {/* Website */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              Website:
            </div>
            <p clasName="font-light">www.manojkushwah.tech</p>
          </div>

          {/*Phone*/}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              Phone:
            </div>
            <p clasName="font-light">+91 7909892011 <b className="text-lg">Tel:</b> +91 9753630483</p>
          </div>

          {/* City */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              City:
            </div>
            <p clasName="font-light"> Mayur Bihar Phase-I, New Delhi</p>
          </div>

          {/* Age */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">Age:</div>
            <p clasName="font-light">18 Year Old</p>
          </div>

          {/* Degree */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              Degree:
            </div>
            <p clasName="font-light">B.tech (CSE) is going on</p>
          </div>

          {/* Email */}
          <div className="py-2 flex items-center">
            <i class="list-style bx bx-chevron-right"></i>
            <div className="bd text-lg text-slate-900 font-bold mr-2">
              Email:
            </div>
            <p clasName="font-light">officialmanojkushwah@gmail.com</p>
          </div>

          <p className="text-lg font-light">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>

       
      </div>
    </>
  );
};

export default About;
