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
      description: [
        "Bertanggung jawab mengimplementasikan desain UI secara efisien dalam pengembangan aplikasi website.",
        "Melakukan pembersihan kode program untuk menghilangkan code smells dan meningkatkan kualitas kode.",
        "Memastikan tampilan website konsisten dan responsif di berbagai perangkat.",
        "Melakukan pengujian aplikasi melalui manual testing untuk memastikan semua fitur berfungsi dengan baik, pada aplikasi berbasis mobile maupun website.",
      ],
      github_link: "https://github.com/agilepdbl/2023website-note-taker",
      live_link: "https://notetaker.agileteknik.com/note",
    },
    {
      img: project2,
      name: "Forum Website App",
      description: [
        "Bertanggung jawab mengimplementasikan desain UI secara efisien dalam pengembangan aplikasi website.",
        "Melakukan pembersihan kode program untuk menghilangkan code smells dan meningkatkan kualitas kode.",
        "Memastikan tampilan website konsisten dan responsif di berbagai perangkat.",
        "Mendukung tim backend dalam pengujian API dengan menggunakan postman untuk memastikan integritas dan fungsionalitas sistem.",
      ],
      github_link: "https://github.com/ratrimanik/sigarda-app",
      live_link: "https://example.com/404",
    },
    {
      img: project3,
      name: "Productivity Mobile App",
      description: [
        "Bertanggung jawab mengimplementasikan desain UI secara efisien dalam pengembangan aplikasi mobile.",
        "Melakukan pembersihan kode program untuk menghilangkan code smells dan meningkatkan kualitas kode.",
        "Melakukan pengujian aplikasi melalui manual testing untuk memastikan semua fitur berfungsi dengan baik.",
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
            <h3 className="mb-2">{project_info.name}</h3>
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
