"use server"
import AnimeCard, { AnimeProp } from "@/components/card/AnimeCard";

export const fetchAnime = async (page: number, limit: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`);
    const data = await response.json();

    console.log('data', data)

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}