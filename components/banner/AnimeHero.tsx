import React from 'react';
import Image from 'next/image';

type Props = {}

const AnimeHero = (props: Props) => {
  return (
    <header className="flex lg:items-center gap-6 p-16 bg-gray-400">
    <div className="">
      <h1 className="text-4xl lg:text-6xl text-white lg:max-w-lg font-bold leading-loose">
        Dive into Magical Universe of Anime Marvels
      </h1>
    </div>
    <div className="lg:flex-1 relative w-full h-[50vh]">
      <Image src="/anime.png" alt="anime" fill className="object-contain" />
    </div>
  </header>
  )
}

export default AnimeHero