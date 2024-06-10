import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project_person from "../assets/images/project_person1.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Note Website App",
      subname: "As a Front-End Developer",
      description: [
        "Responsible for implementing UI design efficiently in website application development.",
        "Cleaning program code to eliminate code smells and improve code quality.",
        "Ensure the appearance of the website is consistent and responsive across various devices.",
        "Carry out application testing through manual testing to ensure all features function properly, on mobile and website based applications.",
      ],
      github_link: "https://github.com/agilepdbl/2023website-note-taker",
      live_link: "https://notetaker.agileteknik.com/note",
    },
    {
      img: project2,
      name: "Forum Website App",
      subname: "As a Front-End Developer",
      description: [
        "Responsible for implementing UI design efficiently in website application development.",
        "Cleaning program code to eliminate code smells and improve code quality.",
        "Ensure the appearance of the website is consistent and responsive across various devices.",
        "Supported the backend team in API testing using postman to ensure system integrity and functionality.",
      ],
      github_link: "https://github.com/ratrimanik/sigarda-app",
      live_link: "https://example.com/404",
    },
    {
      img: project3,
      name: "Productivity Mobile App",
      subname: "As a Mobile Front-End Developer",
      description: [
        "Responsible for implementing UI design efficiently in mobile application development.",
        "Cleaning program code to eliminate code smells and improve code quality.",
        "Carry out application testing through manual testing to ensure all features function properly.",
      ],
      github_link: "https://github.com/ratrimanik/notification_mobile_app",
      live_link: "https://example.com/404",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="max-w-6xl px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project_info, i) => (
          <div key={i} className="h-full flex flex-col bg-slate-700 rounded-xl p-4">
            <img src={project_info.img} alt="" className="rounded-lg mb-4" />
            <h3>{project_info.name}</h3>
            <p className="text-gray-400 text-xs -mt-1 mb-2">{project_info.subname}</p>
            <ul className="list-disc pl-5 text-xs flex-grow">
              {project_info.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href={project_info.github_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
