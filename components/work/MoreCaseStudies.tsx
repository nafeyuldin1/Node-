"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../libs/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { previousWork } from "@/constants";
import Link from "next/link";
import { Rancher, SedaN } from "@/fonts";

export function MoreCaseStudies() {

  return (
    <div className="md:h-[80vh] p-[5vw] h-auto relative flex-col  flex items-center justify-center">
       <div className="pb-6 flex justify-between items-center md:flex-row flex-col gap-2 w-full">
       <h1 className={`text-4xl md:text-6xl ${Rancher} `} >More Case Studies</h1>
  <Link href="/work" className={`${SedaN} text-lg underline md:text-2xl`} >SEE ALL PROJECTS </Link>
       </div>
      <div className=" grid md:gap-16 gap-4  h-full moreCaseStudies">
      {
  previousWork.slice(0, 3).map((item) => (
    <div key={item.title}> {/* Adding a unique key prop */}
      <Link href={item.url}>
        <DirectionAwareHover imageUrl={item.Imgurl}>
          <h2 className="font-bold text-2xl">{item.title}</h2>
          <p className="font-normal text-sm">{item.description}</p>
        </DirectionAwareHover>
      </Link>
    </div>
  ))
}

      
      </div>
   
    </div>
  );
}
