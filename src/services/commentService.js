import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result
};

export const getAllGameComments = async (id) => {
    // const query = encodeURIComponent(`gameId="${gameId}"`)

    // const result = await request.get(`${baseUrl}?where=${query}`);
    // const comments = Object.values(result);
    const result = await request.get(baseUrl);
    const comments = Object.values(result).filter(x => x.gameId === id);

    return comments;
};