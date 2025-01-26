import store from '../store'
import { SET_USER } from '../reducers/auth.reducer.ts'
import { UserService } from '../../services/user.service.ts'
import { authService } from '../../services/auth.service.ts'

export async function loginAction(credentials: { password: string; email: string }) {
    const userInSessionsStorage = UserService.getLoggedInUser()
    if (userInSessionsStorage) {
        store.dispatch({ type: SET_USER, user: userInSessionsStorage })
        return userInSessionsStorage
    } else {
        const loggedInUser = await authService.login(credentials)
        console.log(loggedInUser)
        if (loggedInUser) {
            store.dispatch({ type: SET_USER, user: loggedInUser })
            return loggedInUser
        }
    }
}

export async function logoutAction() {
    await authService.logout()
    store.dispatch({ type: SET_USER, user: null })
}
