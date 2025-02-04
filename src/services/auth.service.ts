import { httpService } from './http.service.js'
import { UserService } from './user.service.js'

export const authService = {
    login,
    signup,
    logout,
}

async function login(credentials: { password: string; email: string }) {
    try {
        const user = await httpService.post('auth/login', credentials)
        if (user) {
            UserService.setUserInSessionStorage(user)
        }
        return user
    } catch (error) {
        throw new Error('Could not login')
    }
}

async function signup(credentials: { password: string; email: string; name: string }) {
    try {
        const user = await httpService.post('auth/signup', credentials)
        if (user) {
            UserService.setUserInSessionStorage(user)
        }
        return user
    } catch (error) {
        throw new Error('Could not signup')
    }
}

async function logout() {
    try {
        await httpService.post('auth/logout')
        UserService.removeUserFromSessionStorage()
    } catch (error) {
        throw new Error('Could not logout')
    }
}
