import styled from 'styled-components'
import { firebase } from '../firebase'
import { auth } from 'firebase/auth'

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
  firebase.auth()
  return (
    <SocialsSignupContainer>
      <ButtonContainer>
        <img src="/facebook.svg" width={100} height={100} alt="facebook" />
      </ButtonContainer>
      <ButtonContainer>
        <img src="/google.svg" width={55} height={55} alt="google" />
      </ButtonContainer>
      <ButtonContainer>
        <img src="/apple.svg" width={55} height={50} alt="apple" />
      </ButtonContainer>
    </SocialsSignupContainer>
  )
}
