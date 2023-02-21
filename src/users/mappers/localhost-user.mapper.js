import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localHostUser) => {

    //desestructurando el objecto
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localHostUser;

    //Cambiando el nombre de las propiedades que no concuerdan
    //Creando el objecto litaral
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}