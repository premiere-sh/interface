import styled from 'styled-components'
import { app } from '../firebase'
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
  Auth,
  updateCurrentUser,
  AuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import Spinner from 'react-activity/dist/Spinner'

const SocialsSignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  height: 120px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 10%;
  cursor: pointer;
`

export default function SocialsSignup() {
  const [user, setUser] = useState<User>()
  const [auth, setAuth] = useState<Auth>()
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

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
        router.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
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
                onClick={() => signInWithProvider(new TwitterAuthProvider())}
              >
                <img
                  src="/twitter-signup.svg"
                  width={55}
                  height={55}
                  alt="twitter-signup"
                />
              </ButtonContainer>
              <ButtonContainer
                onClick={() => signInWithProvider(new GoogleAuthProvider())}
              >
                <img
                  src="/google.svg"
                  width={55}
                  height={55}
                  alt="google-signup"
                />
              </ButtonContainer>
              <ButtonContainer
                onClick={() => signInWithProvider(new GithubAuthProvider())}
              >
                <img
                  src="/github.svg"
                  width={55}
                  height={50}
                  alt="github-signup"
                />
              </ButtonContainer>
              <ButtonContainer onClick={() => router.push('/signup')}>
                <img
                  src="/mail-signup.svg"
                  width={55}
                  height={55}
                  alt="regular-mail-signup"
                />
              </ButtonContainer>
            </>
          )}
        </>
      )}
    </SocialsSignupContainer>
  )
}
