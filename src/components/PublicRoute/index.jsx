import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  return !isAuthenticated ? <Outlet /> : <Navigate to='/home' state={{ from: location }} replace />
}
