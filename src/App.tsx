import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store.ts'

import ProtectedRoute from './cmps/UtilCmps/ProtectedRoute.tsx'
import HomePage from './pages/Homepage.tsx'
import LoginPage from './pages/LoginPage'
import UserDashboardPage from './pages/UserDashboardPage.tsx'

import './assets/scss/main.scss'
import AppLayout from './cmps/UtilCmps/AppLayout.tsx'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* Out of layout page */}
                    <Route path='/login' element={<LoginPage />} />

                    <Route element={<AppLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route
                            path='/*'
                            element={
                                <ProtectedRoute>
                                    <AuthenticatedRoutes />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    )
}

function AuthenticatedRoutes() {
    return (
        <Routes>
            <Route path='/dashboard' element={<UserDashboardPage />} />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
    )
}

export default App
