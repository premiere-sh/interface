import { useState, useContext } from 'react'
import styled from 'styled-components'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { Column, Row } from 'components/common'
import AuthenticationContext from 'contexts/authentication'
import WaitingContext from 'contexts/waiting'
import Select from 'react-select'

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

const InputRow = styled(Row)``

const TournamentEntry = styled(Entry)`
  margin-left: 50px;
`

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

  const regionOptions: { label: string; value: string }[] = [
    { label: 'international', value: 'international' },
    { label: 'Europe', value: 'Europe' },
    { label: 'North America', value: 'North America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Australia', value: 'Australia' }
  ]

  const colourStyles = {
    control: (styles, state) => ({
      ...styles,
      width: '232px',
      height: '60px',
      fontFamily: 'Inter',
      fontWeight: '500',
      border: state.isFocused ? '3px black solid' : 0,
      boxShadow: 0,
      '&:hover': {
        ...styles[':hover'],
        border: state.isFocused ? '3px black solid' : 0
      }
    }),
    option: (styles) => {
      return {
        ...styles,
        width: '100%',
        height: '55px',
        alignItems: 'center',
        lineHeight: '40px',
        fontFamily: 'Inter',
        fontWeight: '500',
        color: (props) => props.theme.colors.black,
        backgroundColor: '#ffffff',
        ':hover': {
          ...styles[':hover'],
          backgroundColor: 'lightgray'
        }
      }
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create Tournament</Heading>
      <Subtext>Create your own tournament on Premiere!</Subtext>
      <InputRow>
        <TournamentEntry>
          <Caption>name</Caption>
          <Input
            required={true}
            {...register('name')}
            type={'text'}
            placeholder={'Name'}
          />
        </TournamentEntry>
        <TournamentEntry>
          <Caption>region</Caption>
          <Select options={regionOptions} styles={colourStyles} />
        </TournamentEntry>
        <TournamentEntry>
          <Caption>game</Caption>
          <Select options={regionOptions} styles={colourStyles} />
        </TournamentEntry>
      </InputRow>
      <Row>
        <TournamentEntry>
          <Caption>description</Caption>
          <DescriptionInput
            required={true}
            {...register('description')}
            placeholder={'Description'}
          />
        </TournamentEntry>
        <Column>
          <TournamentEntry>
            <Caption>time</Caption>
            <SmallInput
              required={true}
              {...register('time')}
              type={'text'}
              placeholder={'Enter time'}
            />
          </TournamentEntry>
          <TournamentEntry>
            <Caption>prize</Caption>
            <SmallInput
              required={true}
              {...register('prize')}
              type={'text'}
              placeholder={'Enter prize'}
            />
          </TournamentEntry>
        </Column>
        <Column>
          <TournamentEntry>
            <Caption>prize currency</Caption>
            <SmallInput
              required={true}
              {...register('prize_currency')}
              type={'text'}
              placeholder={'Enter your prize currency'}
            />
          </TournamentEntry>
          <TournamentEntry>
            <Caption>platform</Caption>
            <SmallInput
              required={true}
              {...register('platform')}
              type={'text'}
              placeholder={'Enter platform'}
            />
          </TournamentEntry>
        </Column>
      </Row>
      <SubmitEntry></SubmitEntry>
      {errorMessage && (
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
      )}
    </FormContainer>
  )
}
