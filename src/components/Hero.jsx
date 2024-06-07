import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-[36rem] h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Ratri Maria Manik</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer Enthusiasm
          </h4>
          <div className="flex flex-row mt-8 gap-4">
          <a href="./src/assets/Ratri Maria Manik - CV.pdf" download>
            <button className="btn-primary">Download CV</button>
          </a>
          <a href="#contact" className="btn-primary">Lets Talk With Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
