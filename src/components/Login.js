import { useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { useSignIn } from 'hooks'
import AuthenticationContext from 'contexts/authentication'
import WaitingContext from 'contexts/waiting'
import Router from 'next/router'
import { Dots } from 'react-activity'
import SocialsSignup from 'components/SocialsSignup'
import { toast } from 'react-toastify'

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

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { setToken } = useContext(AuthenticationContext)
  const [waiting, setWaiting] = useContext(WaitingContext)
  const signIn = useSignIn()

  const onSubmit = async (data) => {
    setWaiting(true)
    const { error, token } = await signIn(data)
    if (error) {
      toast.error(error)
      setWaiting(false)
    } else if (token) {
      setToken(token)
      setWaiting(false)
      Router.push(`/profile`)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>log in</Heading>
      <Subtext>Login to your Premiere account below!</Subtext>
      <Entry htmlFor={'email'}>
        <Caption>username</Caption>
        <Input
          required={true}
          {...register('username')}
          type={'username'}
          placeholder={'Enter your username'}
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
      <SocialsSignup />
    </FormContainer>
  )
}
