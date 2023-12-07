"use server"

export const fetchAnime = async (page: number, limit: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`);
    const data = await response.json();

    console.log(data);
    return data;

}