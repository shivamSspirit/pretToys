import { Navigate,useLocation } from 'react-router-dom'
 import { useAuth } from '../contexts/auth-context'


function AuthRoutes({ children }) {
    const { authToken } = useAuth();
    const location = useLocation()
    return authToken ? <>{children}</> : <Navigate to={'/auth/login'} state={{ from: location }}/>
}

export default AuthRoutes
