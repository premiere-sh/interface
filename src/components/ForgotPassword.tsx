import { useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import AuthenticationContext from 'contexts/authentication'
import { useState } from 'react'
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

export default function ForgotPassword() {
  const [isLinkSent, setLinkSent] = useState(false)
  const { sendResetLink } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading } = useContext(AuthenticationContext)
  const auth = getAuth()

  const onSubmitMail = async (data: any) => {
    setLinkSent(true)
    await sendResetLink(data.email)
  }

  return (
    <div>
      <Heading>Reset password</Heading>
      <Subtext>Reset password for your premiere account</Subtext>
      <FormContainer onSubmit={handleSubmit(onSubmitMail)}>
        <Entry>
          <Caption>email</Caption>
          <Row>
            <EmailInput
              required={true}
              {...register('email')}
              type={'email'}
              placeholder={'Enter your email'}
            />
            <SendEmailButton
              text={'send link'}
              disabled={false}
              type={'submit'}
            />
          </Row>
        </Entry>
        {isLinkSent && (
          <LinkMessageContainer>
            <LinkMessage>Check your e-mail</LinkMessage>
          </LinkMessageContainer>
        )}
      </FormContainer>
    </div>
  )
}
