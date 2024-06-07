import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import hireMe from "../assets/images/hireMe.png";
import experience1 from "../assets/images/experience1.jpg";
import experience2a from "../assets/images/experience2a.jpg";
import experience3 from "../assets/images/experience3.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "Instructor Committe",
      img: experience1,
      description: [
        "I was actively involved in such events as LKMM-TD, Dynamic PENS - 2022, and also PENS Fest. As an easy going person, I always chose a public relations ,division on any committee I attended.",
      ],
    },
    {
      title: "Awards",
      img: experience2a,
      description: [
        "1st Place Website at Agile Teknik Festival (2023),",
        "2nd Place Mobile at Agile Teknik Festival (2023),",
        "4th UX Design at Agile Teknik Festival (2023)",
      ],
    },
    {
      title: "Good Communication",
      img: experience3,
      description: [
        "At the Agile Teknik x Pens Fest exhibition, I presented product descriptions, product functionality, and answered questions from visitors regarding my team's products.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Other <span className="text-cyan-600">Experiences</span>
        </h3>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl w-5/6 md:mx-auto mx-7 min-h-[24rem] mt-6 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div className="md:w-2/3 w-full text-center">
          <h2 className="text-2xl font-semibold my-4">
            Committee Experiences, Awards, Soft Skills
          </h2>
          <div className="flex text-center justify-center max-w-6xl gap-6 mx-auto items-center relative">
            <div className="lg:w-[28rem] w-full">
              <Swiper
                slidesPerview={1}
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
              >
                {experiences.map((experiences, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex justify-center items-center text-center w-full">
                      
                    <div className="flex justify-center items-center text-center w-2/3 md:w-full">
                      <div>
                        <div className="h-fit w-full rounded-xl text-center">
                          <h3 className="font-semibold mb-2">
                            {experiences.title}
                          </h3>
                          <img
                            src={experiences.img}
                            alt=""
                            className="rounded-[10px] w-52 object-cover mx-auto"
                          />
                        </div>
                        <div className="text-xs mb-10 text-left mx-2 mt-2 space-y-2">
                          {experiences.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <img
          src={hireMe}
          alt=""
          className="hidden lg:block lg:h-[30rem] h-80 lg:absolute bottom-0 right-20 object-cover"
        />
      </div>
    </section>
  );
};

export default Experience;
