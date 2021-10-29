import { useState } from 'react'
import { SignupButtonLarge } from 'components/Buttons'
import { Row } from 'components/common'
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

const FormContainer = styled.form`
  margin: auto;
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
  color: #EC9BA6;
`

export default function Signup() {

  const { register, handleSubmit, formState: { errors }} = useForm()

  const [password, setPassword] = useState('')

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    return data
  }

  const inUse = (inputValue) => {
    return true
  }


  const adult = (inputValue) => {
    var today = new Date()
    var birthDate = new Date(inputValue)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
      age--;
    }
    return age >= 18 ? true : false;
  }

  const checkMatch = (inputValue) => {
    setPassword(inputValue)
  }

  const match = (inputValue) => {
    return inputValue === password ? true : false
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>sign up</Heading>
      <Subtext>Premiere is only available to users that are 18+</Subtext>
      <RowEntry>
        <Entry>
          <Caption>username</Caption>
          <SmallInput
            required={ true }
            {...register('username', { validate: { inUse }})} 
            type={'text'}
            placeholder={'Enter your username'}
          />
          { errors.username && 
            <Alert>
              Username already in use
            </Alert>
          }
        </Entry>
        <Entry style={{ marginLeft: 65 }}>
          <Caption>date of birth</Caption>
          <SmallInput
            required={ true }
            {...register('date', { validate: { adult }})} 
            type={'date'}
            placeholder={'Enter your date of birth'}
          />
          { errors.date && 
            <Alert>
              We&apos;re sorry - you must be 18 or older
            </Alert>
          }
        </Entry>
      </RowEntry>
      <Entry>
        <Caption>email address</Caption>
        <Input
          required={ true }
          {...register('email', { validate: { inUse }})} 
          type={'email'}
          placeholder={'Enter your email address'}
        />
        { errors.email &&
          <Alert>
            Email address already in use
          </Alert>
        }
      </Entry>
      <Entry>
        <Caption>password</Caption>
        <Input
          required={ true }
          {...register('password', {
            minLength: 6,
            pattern: /(?=.*[A-Z])/,
            validate: { checkMatch, inUse } 
          })}
          type={'password'}
          placeholder={'Enter your password'}
        />
        { errors.password?.type === 'minLength' ||
          errors.password?.type === 'pattern' && 
          <Alert>
            Please use at least 6 characters, with one capital letter
          </Alert>
        }
        { errors.password?.type === 'inUse' &&
          <Alert>
            Password already in use
          </Alert>
        }
      </Entry>
      <Entry>
        <Caption>confirm password</Caption>
        <Input
          required={ true }
          {...register('confirm', { validate: { match }})} 
          type={'password'}
          placeholder={'Enter your password'}
        />
        { errors.confirm && 
          <Alert>
            Passwords do not match
          </Alert>
        }
      </Entry>
      <Entry style={{ marginTop: 40 }}>
        <SignupButton type={'submit'}/>
      </Entry>
    </FormContainer>
  )
}
