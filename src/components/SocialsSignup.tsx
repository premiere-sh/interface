import styled from 'styled-components'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider
} from 'firebase/auth'
import { useContext } from 'react'
import { useRouter } from 'next/router'

import Spinner from 'react-activity/dist/Spinner'
import AuthenticationContext from 'contexts/authentication'

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
  const router = useRouter()
  const { loading, signInWithProvider } = useContext(AuthenticationContext)

  return (
    <SocialsSignupContainer>
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
            <img src="/google.svg" width={55} height={55} alt="google-signup" />
          </ButtonContainer>
          <ButtonContainer
            onClick={() => signInWithProvider(new GithubAuthProvider())}
          >
            <img src="/github.svg" width={55} height={50} alt="github-signup" />
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
    </SocialsSignupContainer>
  )
}
