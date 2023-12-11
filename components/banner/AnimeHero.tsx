import React from 'react';
import Image from 'next/image';

type Props = {}

const AnimeHero = (props: Props) => {
  return (
    <header className="flex flex-col items-center lg:flex-row lg:items-center gap-6 p-3 lg:p-16 mt-8 lg:mt-2 bg-[#f5e663]/70 rounded-lg">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl lg:text-6xl text-[#051923] lg:max-w-lg font-bold leading-loose">
          Dive into the Magical Universe of Anime Marvels
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh]">
        <Image src="/anime.png" alt="anime" fill sizes="(max-width: 768px)" className="object-contain" priority />
      </div>
    </header>
  );
}

export default AnimeHero;
