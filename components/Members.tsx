"use client";

import React from "react";
import { members } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Link from "next/link";

const Members = () => {
  return (
    <section className="py-10">
      <h1 className="heading">Our <span className="text-purple">Members</span></h1>
      <div className="flex flex-col items-center lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <Link href="/members">
            <InfiniteMovingCards
              items={members}
              direction="right"
              speed="normal"
            />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10"></div>
      </div>
    </section>
  );
};

export default Members;
