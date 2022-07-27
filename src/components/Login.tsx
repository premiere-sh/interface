import { useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import AuthenticationContext from 'contexts/authentication'
import { Dots } from 'react-activity'
import SocialsSignup from 'components/SocialsSignup'
import { GradientText } from 'components/common'
import Link from 'next/link'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const LoginPageButton = styled(LoginButton)`
  width: 350px;
`

const ErrorMessage = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
`
const SingUpNoAccount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
const ContextForgotPassword = styled.div`
  text-align: center;
  text-decoration-line: underline;
  color: #8d8d8d;
  display: flex;
  justify-content: flex-end;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140.62%;
  &:hover {
    cursor: pointer;
  }
`

const ForgotPassword = styled.div`
  margin: auto;
  width: 560px;
`

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { signIn, loading } = useContext(AuthenticationContext)

  const onSubmit = async (data: any) => {
    await signIn(data.username, data.password)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>log in</Heading>
      <Subtext>Login to your Premiere account below!</Subtext>
      <Entry>
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
      <ForgotPassword>
        <Link href={'#'}>
          <ContextForgotPassword>Forgot your password?</ContextForgotPassword>
        </Link>
      </ForgotPassword>
      <SubmitEntry>
        {loading ? (
          <LoginPageButton text={<Dots />} disabled />
        ) : (
          <LoginPageButton type={'submit'} text={'log in'} disabled={false} />
        )}
      </SubmitEntry>
      <SocialsSignup />
      <SingUpNoAccount>
        New to Premiere?
        <GradientText style={{ display: 'inline', marginLeft: 5 }}>
          <Link href={'/signup'}>
            <a> Sign up here</a>
          </Link>
        </GradientText>
      </SingUpNoAccount>
    </FormContainer>
  )
}
