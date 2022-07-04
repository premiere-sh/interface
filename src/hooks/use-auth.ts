import { useState, useEffect } from 'react'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-identicon-sprites'
import { app } from '../firebase'
import {
  getAuth,
  signOut,
  Auth,
  updateCurrentUser,
  User,
  AuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export function useAuth() {
  const [user, setUser] = useState<User>()
  const [auth, setAuth] = useState<Auth>()
  const [loading, setLoading] = useState<boolean>()
  const [token, setToken] = useState<string>()
  const [userAvatar, setUserAvatar] = useState<string>()
  const router = useRouter()

  useEffect(
    function () {
      if (user?.email) {
        const _avatar = createAvatar(style, {
          seed: user.email + 'asdf',
          dataUri: true
        })
        setUserAvatar(_avatar)
      }
    },
    [user]
  )

  useEffect(() => {
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged((user) => setUser(user))
      return () => unsubscribe()
    }
  }, [auth])

  useEffect(() => {
    setAuth(getAuth(app))
    setUser(auth?.currentUser)
  }, [user, auth])

  const logout = async () => {
    signOut(auth)
    updateCurrentUser(auth, user)
  }

  const signInWithProvider = async (provider: AuthProvider) => {
    try {
      setLoading(true)
      const result = await signInWithPopup(auth, provider)
      if (result?.user) {
        const _token = await result?.user?.getIdToken()
        setToken(_token)
        setUser(result?.user)
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      toast.error(`Error signing in with ${provider.providerId} provider`)
    }
    setLoading(false)
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword(auth, email, password)
      if (result?.user) {
        const _token = await result.user.getIdToken()
        setToken(_token)
        setUser(result.user)
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(`Error signing in with email: ${email}`)
    }
    setLoading(false)
  }

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true)
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (result?.user) {
        const _token = await result.user.getIdToken()
        setToken(_token)
        setUser(result.user)
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(`Error signing up with email: ${email}`)
    }
    setLoading(false)
  }

  return {
    signIn,
    signUp,
    signInWithProvider,
    loading,
    setLoading,
    user,
    setUser,
    logout,
    userAvatar,
    token
  }
}
