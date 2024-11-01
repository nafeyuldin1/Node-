"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../libs/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { previousWork } from "@/constants";
import Link from "next/link";
import { SedaN } from "@/fonts";

export function PorjectCards() {

  return (
    <div className="h-auto shadow-lg  shadow-black  bg-white relative  flex items-center justify-center">
      <div className="PreviousWork p-[5vw]">
      {
        previousWork.map((item) => (
          <div>
            <Link href={item.url}>
            <DirectionAwareHover title={item.title} imageUrl={item.Imgurl}>
          <h2 
           style={{
            fontWeight: 900
          }}
          className={`${SedaN}  font-extrabold text-4xl `}>{item.title}</h2>
          <p className={`${SedaN} font-normal text-xl`}>{item.description}</p>
        </DirectionAwareHover>
      </Link>
          </div>
        ))
      }
      
      </div>
   
    </div>
  );
}
