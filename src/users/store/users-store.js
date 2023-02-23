import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if(users.length === 0) return;

    if(state.currentPage===1) return;
    state.users = users;
    state.currentPage -= 1;
}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = (updateUser) => {

    let wasFound = false;

    state.users = state.users.map(user => {
        if(user.id === updateUser.id && !wasFound){
            wasFound = true;
            return updateUser;
        }
        return user;
    });

    if(state.users.length < 10){
        state.users.push(updateUser);
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage(state.currentPage);
    if(users.length === 0) {
        await loadPreviousPage();
        return;
    };
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    //this is another way to access to the property from an external file
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage

}