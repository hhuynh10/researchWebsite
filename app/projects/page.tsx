"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import { motion } from "framer-motion";
import Wrapper from "@/components/ui/Wrapper";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="py-20 mt-16">
      <TextGenerateEffect
            words="A selection of CS Research Projects"
            className="heading"
          />
        <motion.div 
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', duration: 1.0, ease: 'easeInOut' }}
        className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
          {projects.map((item) => (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] -mt-20"
              key={item.id}
            >
              <PinContainer
                title={`Project${item.id}`}
                href={`/projects/${item.id}`}
              >
                <div className="relative flex items-center justify-center sm:w-[600px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 ">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.poster}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.abstract}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm dark:text-purple text-violet-800">
                      View Details
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
