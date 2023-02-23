import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User>}
 */
export const getUserById = async(id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const result = await fetch(url);
    const data = await result.json(); //To get the body in a json format
    const user = localhostUserToModel(data);

    return user;
}