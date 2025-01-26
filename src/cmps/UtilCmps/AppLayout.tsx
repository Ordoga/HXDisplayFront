import { Outlet } from 'react-router-dom'
import Header from '../UI/Header.tsx'

export default function AppLayout() {
    return (
        <div className='app-layout'>
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
        </div>
    )
}
