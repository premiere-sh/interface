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
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
  sendEmailVerification
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { initializeUser } from '../firebase/initialize-user'

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
      const unsubscribe = auth?.onAuthStateChanged((user) => setUser(user))
      return () => unsubscribe()
    }
  }, [auth])

  useEffect(() => {
    if (app?.options?.apiKey) {
      setAuth(getAuth(app))
      setUser(auth?.currentUser)
    }
  }, [user, auth, app])

  const logout = async () => {
    if (auth) {
      signOut(auth)
      updateCurrentUser(auth, user)
      router.push('/')
    }
  }

  const signInWithProvider = async (provider: AuthProvider) => {
    try {
      setLoading(true)
      const result = await signInWithPopup(auth, provider)
      if (result?.user) {
        const _token = await result?.user?.getIdToken()
        setToken(_token)
        setUser(result?.user)
        await initializeUser()
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      toast.error(
        `Error signing in with ${provider.providerId} provider: ${error.message}`
      )
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
      toast.error(`Error signing in with email: ${email}: ${error.message}`)
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
        sendEmailVerification(auth.currentUser)
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(`Error signing up with email: ${email}: ${error.message}`)
    }
    setLoading(false)
  }

  const sendResetLink = async (email: string) => {
    try {
      const result = await sendPasswordResetEmail(auth, email).then(() => {
        toast.success('Link sent, check your email')
      })
    } catch (error) {
      console.log(error)
    }
  }

  const resetPassword = async (oobCode: string, newPassword: string) => {
    verifyPasswordResetCode(auth, oobCode)
      .then((email) => {
        confirmPasswordReset(auth, oobCode, newPassword)
          .then((resp) => {
            router.push('/login')
            toast.success(`Password successfully reset for ${email}`)
          })
          .catch((error) => {
            console.log(error)
            toast.error(`Error resetting password`)
          })
      })
      .catch((error) => {
        console.log(error)
        toast.error(`Error resetting password`)
      })
  }

  return {
    signIn,
    signUp,
    signInWithProvider,
    sendResetLink,
    resetPassword,
    loading,
    setLoading,
    user,
    setUser,
    logout,
    userAvatar,
    token
  }
}
