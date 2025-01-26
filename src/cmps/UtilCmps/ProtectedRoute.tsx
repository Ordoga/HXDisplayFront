import { Navigate, useLocation } from 'react-router-dom'
import { useTypedSelector } from '../../hooks.ts'

export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
    const loggedInUser = useTypedSelector(state => state.authModule.user)
    const location = useLocation()

    if (!loggedInUser) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children
}
