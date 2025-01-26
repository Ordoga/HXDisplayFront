import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/auth.reducer'

const store = configureStore({
    reducer: {
        authModule: authReducer,
    },
})

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
