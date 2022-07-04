import { useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import AuthenticationContext from 'contexts/authentication'
import { Dots } from 'react-activity'
import SocialsSignup from 'components/SocialsSignup'

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
      <SubmitEntry>
        {loading ? (
          <LoginButton text={<Dots />} disabled />
        ) : (
          <LoginButton type={'submit'} text={'log in'} disabled={false} />
        )}
      </SubmitEntry>
      <SocialsSignup />
    </FormContainer>
  )
}
