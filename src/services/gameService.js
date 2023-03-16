import { request } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request(baseUrl, 'GET');

    const games = Object.values(result);

    console.log(games);
    return games;
};