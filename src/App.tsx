import { Outlet, Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store.ts'

import ProtectedRoute from './cmps/UtilCmps/ProtectedRoute.tsx'
import HomePage from './pages/Homepage.tsx'
import LoginPage from './pages/LoginPage'
import UserDashboardPage from './pages/UserDashboardPage.tsx'

import './assets/scss/main.scss'
import Header from './cmps/UI/Header.tsx'
import StorePage from './pages/StorePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/store' element={<StorePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                    </Route>

                    {/* Authenticated Routes */}
                    {/* <Route
                        path='/*'
                        element={
                            <ProtectedRoute>
                                <AuthenticatedRoutes />
                            </ProtectedRoute>
                        } */}
                    {/* /> */}
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

function AppLayout() {
    return (
        <div className='app-layout'>
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
        </div>
    )
}

export default App
