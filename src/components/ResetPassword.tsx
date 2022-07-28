import { useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import AuthenticationContext from 'contexts/authentication'
import { Dots } from 'react-activity'
import { Row } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import { useAuth } from 'hooks'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-bottom: 80px;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const ResetPasswordButton = styled(LoginButton)`
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

const SendEmailButton = styled(LoginButton)`
  width: 120px;
`

const EmailInput = styled(Input)`
  width: 400px;
  margin-right: 40px;
`

const LinkMessageContainer = styled(Row)`
  margin: auto;
  text-align: center;
  width: 560px;
`

const LinkMessage = styled.div``

export default function ResetPassword({ oobCode }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading } = useContext(AuthenticationContext)
  const auth = getAuth()
  const { resetPassword } = useAuth()

  const onSubmitPassword = async (data: any) => {
    await resetPassword(oobCode, data.password)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitPassword)}>
      <Heading>Reset password</Heading>
      <Subtext>Reset password for your premiere account</Subtext>
      <Entry>
        <Caption>password</Caption>
        <Input
          required={true}
          {...register('password', {
            minLength: 8
          })}
          type={'password'}
          placeholder={'Enter your password'}
        />
      </Entry>
      <Entry>
        <Caption>confirm password</Caption>
        <Input
          required={true}
          {...register('confirm')}
          type={'password'}
          placeholder={'Enter your password'}
        />
      </Entry>
      <SubmitEntry>
        {loading ? (
          <ResetPasswordButton text={<Dots />} disabled />
        ) : (
          <ResetPasswordButton
            type={'submit'}
            text={'reset password'}
            disabled={false}
          />
        )}
      </SubmitEntry>
    </FormContainer>
  )
}
