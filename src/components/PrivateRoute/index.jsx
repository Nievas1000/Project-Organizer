import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  console.log(location)

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
}
