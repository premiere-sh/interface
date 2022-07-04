import { createContext, Dispatch, SetStateAction } from 'react'
import { useAuth } from 'hooks/use-auth'
import { AuthProvider, User } from 'firebase/auth'

interface IAuthenticationContext {
  signInWithProvider: (provider: AuthProvider) => Promise<void>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  user: User
  setUser: Dispatch<SetStateAction<User>>
  logout: () => void
  userAvatar: string
  token: string
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  signInWithProvider: () => Promise.resolve(),
  loading: false,
  setLoading: () => {},
  user: null,
  setUser: () => {},
  logout: () => {},
  userAvatar: '',
  token: ''
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
