import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const result = await fetch(url);
    const data = await result.json(); //To get the body in a json format
    const users = data.map(likeUser => localhostUserToModel(likeUser));
    return users;
}