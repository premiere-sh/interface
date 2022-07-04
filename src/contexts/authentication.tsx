import { createContext, Dispatch, SetStateAction } from 'react'
import { useAuth } from 'hooks'

export interface User {
  id: string
  email: string
  username: string
  platform: string | null
  points: number
  tag: string | null
  tournaments: string
}

interface IAuthenticationContext {
  isLoading: boolean
  isAuthenticated: boolean
  token: string | null
  setToken: Dispatch<SetStateAction<string>>
  user: User | null
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  isLoading: false,
  isAuthenticated: false,
  token: null,
  setToken: () => {},
  user: null
})

export const AuthenticationProvider = ({ children }: any) => {
  const auth = useAuth()
  return (
    <AuthenticationContext.Provider value={auth}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
