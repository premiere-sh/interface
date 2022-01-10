import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { GradientText } from 'components/common'
import Link from 'next/link'

const FormContainer = styled.form`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const SignupIfNotGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

export default function Login() {
  return (
    <FormContainer>
      <Heading>log in</Heading>
      <Subtext>Login to your Premiere account below!</Subtext>
      <Entry htmlFor="email">
        <Caption>username</Caption>
        <Input required type="username" placeholder="Enter your username" />
      </Entry>
      <Entry>
        <Caption>password</Caption>
        <Input required type="password" placeholder="Enter your password" />
      </Entry>
      <SubmitEntry>
        <LoginButton type="submit" text="log in" />
      </SubmitEntry>
      <SignupIfNotGotAnAccount>
        Don&apos;t have an account?
        <GradientText style={{ display: 'inline', marginLeft: 5 }}>
          <Link href="/signup">Sign up</Link>
        </GradientText>
      </SignupIfNotGotAnAccount>
    </FormContainer>
  )
}
