import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFlutter } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <FaHtml5 />,
      name: "HTML",
    },
    {
      logo: <FaCss3Alt />,
      name: "CSS",
    },
    {
      logo: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      logo: <FaJs />,
      name: "JavaScript",
    },
    {
      logo: <SiTypescript />,
      name: "TypeScript",
    },
    {
      logo: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      logo: <FaReact />,
      name: "React",
    },
    {
      logo: <FaLaravel />,
      name: "Laravel",
    },
    {
      logo: <FaJava />,
      name: "Java",
    },
    {
      logo: <SiFlutter />,
      name: "Flutter",
    },
    {
      logo: <FaGithub />,
      name: "GitHub",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 mt-8 relative">
      <div className=" text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Professional <span className="text-cyan-600">Skillset</span>
        </h3>
        <div className="flex mt-4 items-center justify-center gap-8">
          <div className="w-3/4">
            <div className="flex flex-row-3 md:flex-col-4 flex-wrap gap-4">
              <div className="flex items-center justify-center mt-4 gap-10 flex-wrap">
                {skills?.map((skill, i) => (
                  <div
                    key={i}
                    className="border-2 group border-cyan-600 relative bg-gray-900 p-4 rounded-xl"
                  >
                    <div className="w-32 h-16 flex items-center justify-center rounded-full">
                      <div className="text-5xl rounded-full flex items-center justify-center group-hover:text-cyan-600">
                        {skill.logo}
                      </div>
                    </div>
                    <p className="text-xl">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
