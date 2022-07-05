import { useState, useContext } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { Column, Row } from 'components/common'
import Link from 'next/link'
import { useSignIn } from 'hooks'
import AuthenticationContext from 'contexts/authentication'
import WaitingContext from 'contexts/waiting'
import Router from 'next/router'
import { Dots } from 'react-activity'
import SelectSearch from 'react-select-search'

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

const SmallInput = styled(Input)`
  width: 232px;
`

const DescriptionInput = styled.textarea`
  width: 589px;
  height: 100%;
  resize: none;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
  padding-left: 25px;
`

const DescriptionEntry = styled(Entry)``

const Select = styled.select`
  width: 232px;
  height: 60px;
`

const Option = styled.option``

const InputRow = styled(Row)``

interface Tournament {
  region: string
  name: string
  description: string
  game: string
  time: number
  prize: number
  prize_currency: string
  users: string
  creator: string
  platform: string
}

export default function CreateTournament() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { user } = useContext(AuthenticationContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [waiting, setWaiting] = useContext(WaitingContext)

  const onSubmit = async (data: Tournament) => {
    const creator = user
    const tournamentData = { ...data, creator: creator, users: '' }
    console.log('tournaent', tournamentData)
  }

  const gameOptions = [
    { name: 'COD', value: 'COD' },
    { name: 'RL', value: 'RL' }
  ]
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create Tournament</Heading>
      <Subtext>Create your own tournament on Premiere!</Subtext>
      <Row>
        <Entry>
          <Caption>name</Caption>
          <Input
            required={true}
            {...register('name')}
            type={'text'}
            placeholder={'Name'}
          />
        </Entry>
        <Entry>
          <Caption>region</Caption>
          <SmallInput required={true} {...register('region')} type={'select'} />
        </Entry>
        <Entry>
          <Caption>game</Caption>
          <Select required={true} {...register('game')}>
            <Option value="COD">COD</Option>
            <Option value="RL">RL</Option>
          </Select>
        </Entry>
      </Row>
      <Row>
        <DescriptionEntry>
          <Caption>description</Caption>
          <DescriptionInput
            required={true}
            {...register('description')}
            placeholder={'Description'}
          />
        </DescriptionEntry>
        <Column>
          <Entry>
            <Caption>time</Caption>
            <SmallInput
              required={true}
              {...register('time')}
              type={'text'}
              placeholder={'Enter time'}
            />
          </Entry>
          <Entry>
            <Caption>prize</Caption>
            <SmallInput
              required={true}
              {...register('prize')}
              type={'text'}
              placeholder={'Enter prize'}
            />
          </Entry>
        </Column>
        <Column>
          <Entry>
            <Caption>prize currency</Caption>
            <SmallInput
              required={true}
              {...register('prize_currency')}
              type={'text'}
              placeholder={'Enter your prize currency'}
            />
          </Entry>
          <Entry>
            <Caption>platform</Caption>
            <SmallInput
              required={true}
              {...register('platform')}
              type={'text'}
              placeholder={'Enter platform'}
            />
          </Entry>
        </Column>
      </Row>
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
