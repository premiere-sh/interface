import { useState } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'

const FormContainer = styled.form`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
`

const ErrorMessage = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
`

export default function Login() {

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    console.log(errors)
  }

  console.log(errors)
  
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>log in</Heading>
      <Subtext>Login to your Premiere account below!</Subtext>
      <Entry htmlFor={'email'}>
        <Caption>email address</Caption>
        <Input
          required={ true }
          {...register('email')} 
          type={'email'}
          placeholder={'Enter your email address'}
        />
      </Entry>
      <Entry>
        <Caption>password</Caption>
        <Input
          required={ true }
          {...register('password', { minLength: 8 })} 
          type={'password'}
          placeholder={'Enter your password'}
        />
        {errors.password && 
          <ErrorMessage>
            The password should be at least 8 characters long
          </ErrorMessage>      
        }
      </Entry>
      <SubmitEntry> 
        <LoginButton type={'submit'}/>
      </SubmitEntry>
    </FormContainer>
  )
}
