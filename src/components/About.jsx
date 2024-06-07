import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Profile</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                6th semester student from Electronic Engineering Polytechnic
                Institute of Surabaya (EEPIS), an Informatics Engineering
                Department. Have experience in development applications as a
                frontend developer. Interested in developing software,
                spesifically on the frontend development field. Proficient in
                using the framework ReactJs, TailwindCSS, and Agile methodology.
                Have the ability to refactor code and manually testing
                applications.
              </p>
              <br />
              <br />
              <button className="btn-primary"><a href="#contact">Lets Talk With Me</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
