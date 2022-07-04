import styled from 'styled-components'
import { app } from '../firebase'
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  User,
  Auth,
  updateCurrentUser,
  AuthProvider
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import Spinner from 'react-activity/dist/Spinner'
import 'react-activity/dist/Spinner.css'

const SocialsSignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 10%;
  cursor: pointer;
`

export default function SocialsSignup() {
  const [user, setUser] = useState<User>()
  const [auth, setAuth] = useState<Auth>()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

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

  const signInWithProvider = async (provider: AuthProvider) => {
    try {
      setLoading(true)
      const result = await signInWithPopup(auth, provider)
      if (result?.user) {
        setUser(result.user)
        router.push('/')
      }
    } catch (error) {
      setLoading(false)
      toast.error(`Error signing in with ${provider.providerId} provider`)
    }
    setLoading(false)
  }

  const logout = async () => {
    signOut(auth)
    updateCurrentUser(auth, user)
  }

  return (
    <SocialsSignupContainer>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          {user.photoURL && <img src={user.photoURL} width={30} height={30} />}
          <div onClick={logout}>Sign out</div>
        </div>
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <ButtonContainer
                onClick={() => signInWithProvider(new FacebookAuthProvider())}
              >
                <img
                  src="/facebook.svg"
                  width={100}
                  height={100}
                  alt="facebook"
                />
              </ButtonContainer>
              <ButtonContainer
                onClick={() => signInWithProvider(new GoogleAuthProvider())}
              >
                <img src="/google.svg" width={55} height={55} alt="google" />
              </ButtonContainer>
              <ButtonContainer>
                <img src="/apple.svg" width={55} height={50} alt="apple" />
              </ButtonContainer>
            </>
          )}
        </>
      )}
    </SocialsSignupContainer>
  )
}
