import { User } from '../../types'

export const SET_USER = 'auth/SET_USER'

const initialState: UserState = { user: null }

export function authReducer(state: UserState = initialState, cmd: AuthActions): UserState {
    switch (cmd.type) {
        case SET_USER:
            return { ...state, user: cmd.user }
        default:
            return state
    }
}

export type AuthActions = SetUser

interface UserState {
    user: User | null
}

export interface SetUser {
    type: typeof SET_USER
    user: User
}
