import { useState, useContext } from 'react'
import { GradientText } from 'components/common'
import {
  Heading,
  Caption,
  Subtext,
  Entry,
  Input,
  SmallInput
} from 'components/Forms'
import { SignupButtonLarge as SignupButton } from 'components/Buttons'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import AuthenticationContext from 'contexts/authentication'
import { Dots } from 'react-activity'

interface FormValues {
  email: string
  username: string
  password: string
  date: string
  confirm: string
}

const FormContainer = styled.form`
  margin: auto;
`

const DateInput = styled(SmallInput)`
  padding-right: 15px;
`

const RowEntry = styled.div`
  height: 130px;
  width: 589px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Alert = styled.div`
  line-height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #ec9ba6;
  margin-top: 10px;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const LoginIfGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const { loading, signUp, user } = useContext(AuthenticationContext)
  const [password, setPassword] = useState('')

  const onSubmit = async (data: any) => {
    /*
    data.date_of_birth = parseInt(new Date(data.date).getTime() / 1000)
    delete data['date']
    */
    await signUp(data.email, data.password)
  }

  const inUse = (inputValue) => {
    return true
  }

  const uppercase = (inputValue) => {
    const hasUppercase = /(?=.*[A-Z])/
    return hasUppercase.test(inputValue)
  }

  const number = (inputValue) => {
    const hasNumber = /(?=.*[0-9])/
    return hasNumber.test(inputValue)
  }

  const special = (inputValue) => {
    const hasSpecial = /(?=.*[!@#$%^&*])/
    return hasSpecial.test(inputValue)
  }

  const adult = (inputValue) => {
    var today = new Date()
    var birthDate = new Date(inputValue)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age >= 18 ? true : false
  }

  const checkMatch = (inputValue) => {
    // TODO this is not right @oliwierostro
    setPassword(inputValue)
    return true
  }

  const match = (inputValue) => {
    return inputValue === password ? true : false
  }

  return (
    <>
      {!user ? (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Heading>sign up</Heading>
          <Subtext>Premiere is only available to users that are 18+</Subtext>
          <RowEntry>
            <Entry>
              <Caption>username</Caption>
              <SmallInput
                required={true}
                {...register('username', { validate: { inUse } })}
                type={'text'}
                placeholder={'Enter your username'}
              />
              {errors.username && <Alert>Username already in use</Alert>}
            </Entry>
            <Entry style={{ marginLeft: 65 }}>
              <Caption>date of birth</Caption>
              <DateInput
                required={true}
                {...register('date', { validate: { adult } })}
                type={'date'}
                placeholder={'Enter your date of birth'}
              />
              {errors.date && (
                <Alert>We&apos;re sorry - you must be 18 or older</Alert>
              )}
            </Entry>
          </RowEntry>
          <Entry>
            <Caption>email address</Caption>
            <Input
              required={true}
              {...register('email', { validate: { inUse } })}
              type={'email'}
              placeholder={'Enter your email address'}
            />
            {errors.email && <Alert>Email address already in use</Alert>}
          </Entry>
          <Entry>
            <Caption>password</Caption>
            <Input
              required={true}
              {...register('password', {
                minLength: 8,
                validate: { uppercase, number, special, inUse, checkMatch }
              })}
              type={'password'}
              placeholder={'Enter your password'}
            />
            {errors.password?.type === 'minLength' && (
              <Alert>Please use at least 8 characters</Alert>
            )}
            {errors.password?.type === 'uppercase' && (
              <Alert>Please use at least one capital letter</Alert>
            )}
            {errors.password?.type === 'number' && (
              <Alert>Please use at least one number</Alert>
            )}
            {errors.password?.type === 'special' && (
              <Alert>Please use at least one special character</Alert>
            )}
            {errors.password?.type === 'inUse' && (
              <Alert>Password already in use</Alert>
            )}
          </Entry>
          <Entry>
            <Caption>confirm password</Caption>
            <Input
              required={true}
              {...register('confirm', { validate: { match } })}
              type={'password'}
              placeholder={'Enter your password'}
            />
            {errors.confirm && <Alert>Passwords do not match</Alert>}
          </Entry>
          <SubmitEntry>
            <SignupButton
              type="submit"
              disabled={loading}
              text={loading ? <Dots /> : 'sign up'}
            />
          </SubmitEntry>
          <LoginIfGotAnAccount>
            Already havean account?
            <GradientText style={{ display: 'inline', marginLeft: 5 }}>
              <Link href={'/login'}>
                <a> Log In</a>
              </Link>
            </GradientText>
          </LoginIfGotAnAccount>
        </FormContainer>
      ) : (
        <div>Authorized!</div>
      )}
    </>
  )
}
