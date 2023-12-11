'use client';
import * as React from 'react';
import Image from "next/image";
import { FcRating } from "react-icons/fc";
import { BiMovie } from "react-icons/bi";
import { MotionDiv } from "@/components/motion/MotionDiv";
import InfoDrawer from "@/components/drawer/InfoDrawer";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  score: string;
  url: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}

type ToggleDrawerType = React.MouseEventHandler<HTMLButtonElement>;

function AnimeCard({ anime, index }: Prop) {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer: ToggleDrawerType = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
    <MotionDiv
      className="max-w-sm rounded relative w-full"
      variants={variants} 
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }} 
      viewport={{ amount: 0 }}
    >
      <button className="relative w-full h-[37vh] cursor-pointer" onClick={toggleDrawer}>
        <Image
          src={`https://shikimori.one${anime.image?.original}`}
          alt={anime.name}
            fill
            priority
          sizes="(max-width: 300px)"
          className="rounded-xl"
        />
      </button>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-1.5 bg-gray-200 rounded-sm">
            <p className="text-black text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1 text-white">
              <BiMovie />
              <p className="text-base font-bold">
                {anime.aired_on}
              </p>
            </div>
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired} Episode 
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <FcRating />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
    {openDrawer && <InfoDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />}
    </>
  );
}

export default AnimeCard;