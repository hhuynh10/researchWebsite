"use client";

import React from "react";
import { prof, members } from "@/data";
import { Button } from "@/components/ui/MovingBorders";
import Wrapper from "@/components/ui/Wrapper";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";

const MembersPage = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1.0, ease: "easeInOut" }}
        className="py-20 w-full mt-16 flex flex-col sm:w-[85vw]"
      >
        <TextGenerateEffect words="Our Wonderful Team" className="heading" />
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem * 0.96)`,
            marginBottom: "3rem",
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 justify-between">
            <img
              src={prof[0].profilePic} // Use prof[0] to access the first element in the array
              alt={`Profile picture of ${prof[0].name}`}
              className="lg:w-32 md:w-20 w-16 lg:h-32 md:h-20 h-16 rounded-full"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {prof[0].name}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {prof[0].title}
              </p>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {prof[0].about}
              </p>
            </div>
          </div>
        </Button>

        <hr className="dark:border-slate-800" />

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {members.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 justify-between w-full">
                <img
                  src={card.profilePic}
                  alt={card.profilePic}
                  className="lg:w-32 md:w-20 w-16 lg:h-32 md:h-20 h-16 rounded-full"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.name}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.title}
                  </p>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.about}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default MembersPage;
