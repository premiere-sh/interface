import { useState, useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { GradientText } from 'components/common'
import Link from 'next/link'
import { useSignIn } from 'hooks'
import AuthenticationContext from 'contexts/authentication'
import WaitingContext from 'contexts/waiting'
import Router from 'next/router'
import { Dots } from 'react-activity'

const FormContainer = styled.form`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const ErrorMessage = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
`

const SignupIfNotGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

const ErrorMessageContainer = styled.div`
  color: ${(props) => props.theme.colors.red};
  line-height: 19px;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { isAuthenticated, setToken } = useContext(AuthenticationContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [waiting, setWaiting] = useContext(WaitingContext)
  const signIn = useSignIn()

  const onSubmit = async (data) => {
    setErrorMessage('')
    setWaiting(true)
    const { error, token } = await signIn(data)
    if (error) {
      setErrorMessage(error)
      setWaiting(false)
    } else if (token) {
      setToken(token)
      setErrorMessage('')
      setWaiting(false)
      Router.push(`/profile`)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>log in</Heading>
      <Subtext>Login to your Premiere account below!</Subtext>
      <Entry htmlFor={'email'}>
        <Caption>email address</Caption>
        <Input
          required={true}
          {...register('email')}
          type={'email'}
          placeholder={'Enter your email address'}
        />
      </Entry>
      <Entry>
        <Caption>password</Caption>
        <Input
          required={true}
          {...register('password', { minLength: 8 })}
          type={'password'}
          placeholder={'Enter your password'}
        />
        {errors.password && (
          <ErrorMessage>
            The password should be at least 8 characters long
          </ErrorMessage>
        )}
      </Entry>
      <SubmitEntry>
        {waiting ? (
          <LoginButton text={<Dots />} disabled={true} />
        ) : (
          <LoginButton type={'submit'} text={'log in'} />
        )}
      </SubmitEntry>
      {errorMessage && (
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
      )}
      <SignupIfNotGotAnAccount>
        Don&apos;t have an account?
        <GradientText style={{ display: 'inline', marginLeft: 5 }}>
          <Link href={'/signup'}>
            <a>Sign up</a>
          </Link>
        </GradientText>
      </SignupIfNotGotAnAccount>
    </FormContainer>
  )
}
