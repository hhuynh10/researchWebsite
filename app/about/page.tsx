"use client";

import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/ui/Wrapper";
import { organizations } from "@/data";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="py-20 mt-16 sm:w-[85vw] w-full">
        <TextGenerateEffect
          words="About Our Team and Our Organizations"
          className="heading"
        />
        <div className="grid gap-y-20 gap-x-18 mt-10">
          {organizations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: item.id % 2 === 0 ? "-100vw" : "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 1.0, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`${
                  index % 2 === 0 ? "sm:order-1" : "sm:order-2"
                } flex flex-col justify-center items-center gap-2`}
              >
                <div className="heading1">{item.name}</div>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="sm:w-[400px] w-[350px]"
                />
              </div>
              <div
                className={`${
                  index % 2 === 0 ? "sm:order-2" : "sm:order-1"
                } text-justify`}
              >
                {item.description}
                <div>
                  <MagicButton
                    title="More Info"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
