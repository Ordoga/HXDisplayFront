import { User } from '../types'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const UserService = {
    getLoggedInUser,
    setUserInSessionStorage,
    removeUserFromSessionStorage,
}

function getLoggedInUser() {
    const user = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    return user ? JSON.parse(user) : null
}

function setUserInSessionStorage(user: User | null) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}
function removeUserFromSessionStorage() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}
