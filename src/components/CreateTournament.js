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
  const { isAuthenticated, setToken, currentUser } = useContext(
    AuthenticationContext
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [waiting, setWaiting] = useContext(WaitingContext)
  const signIn = useSignIn()

  const onSubmit = async (data) => {
    setErrorMessage('')
    const creator = currentUser.username
    const tournamentData = { ...data, creator: creator, users: '' }
    console.log('tournaent', tournamentData)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create Tournament</Heading>
      <Subtext>Create your own tournament on Premiere!</Subtext>
      <Entry htmlFor={'email'}>
        <Caption>region</Caption>
        <Input
          required={true}
          {...register('region')}
          type={'text'}
          placeholder={'Enter region'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>name</Caption>
        <Input
          required={true}
          {...register('name')}
          type={'text'}
          placeholder={'Enter torunament name'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>description</Caption>
        <Input
          required={true}
          {...register('description')}
          type={'text'}
          placeholder={'Enter tournament description'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>game</Caption>
        <Input
          required={true}
          {...register('game')}
          type={'text'}
          placeholder={'Enter game'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>time</Caption>
        <Input
          required={true}
          {...register('time')}
          type={'text'}
          placeholder={'Enter time'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>prize</Caption>
        <Input
          required={true}
          {...register('prize')}
          type={'text'}
          placeholder={'Enter prize'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>prize currency</Caption>
        <Input
          required={true}
          {...register('prize_currency')}
          type={'text'}
          placeholder={'Enter your prize currency'}
        />
      </Entry>
      <Entry htmlFor={'email'}>
        <Caption>platform</Caption>
        <Input
          required={true}
          {...register('platform')}
          type={'text'}
          placeholder={'Enter platform'}
        />
      </Entry>
      <SubmitEntry>
        {waiting ? (
          <LoginButton text={<Dots />} disabled={true} />
        ) : (
          <LoginButton type={'submit'} text={'Create tournament'} />
        )}
      </SubmitEntry>
      {errorMessage && (
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
      )}
    </FormContainer>
  )
}
