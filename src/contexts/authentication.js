import { createContext } from 'react'
import { useAuth } from 'hooks'

const AuthenticationContext = createContext({})

export function AuthenticationProvider({ children }) {
  const auth = useAuth()
  return (
    <AuthenticationContext.Provider value={auth}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
