import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  // Check de Autenticacion
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null) // Info del usuario

  const loginUser = (token) => {
    // Guardar token en LocalStorage
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    // Decodificar el token
    setUser(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    // Borramos el token del localStorage
    setIsAuth(false)
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    user,
    logout,
    loginUser
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
