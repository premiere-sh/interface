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

const RowEntry = styled.div`
  height: 130px;
  width: 589px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default function Signup() {
  const [data, setData] = useState({
    username: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  return (
    <>
      <Heading>
        sign up
      </Heading>
      <Subtext>
        Premiere is only available to users that are 18+
      </Subtext>
      <RowEntry>
        <Entry>
          <Caption>
            username
          </Caption>
          <SmallInput 
            value={data.username} 
            onChange={event => setData({ 
              ...data, 
              email: event.target.value 
            })}
            placeholder={'Enter a username'}
          />
        </Entry>
        <Entry style={{ marginLeft: 65 }}>
          <Caption>
            date of birth
          </Caption>
          <SmallInput 
            value={data.dateOfBirth} 
            onChange={event => setData({ 
              ...data, 
              dateOfBirth: event.target.value 
            })}
            placeholder={'DD / MM / YYYY'}
          />
        </Entry>
      </RowEntry>
      <Entry>
        <Caption>
          email address
        </Caption>
        <Input 
          value={data.email} 
          onChange={event => setData({ 
            ...data, 
            email: event.target.value 
          })}
          placeholder={'Enter your email address'}
        />
      </Entry>
      <Entry>
        <Caption>
          password
        </Caption>
        <Input 
          value={data.password} 
          onChange={event => setData({ 
            ...data, 
            password: event.target.value 
          })}
          placeholder={'Enter your password'}
        />
      </Entry>
      <Entry>
        <Caption>
          confirm password
        </Caption>
        <Input 
          value={data.confirmPassword} 
          onChange={event => setData({ 
            ...data, 
            confirmPassword: event.target.value 
          })}
          placeholder={'Enter your password'}
        />
      </Entry>
      <Entry style={{ marginTop: 40 }}>
        <SignupButton />
      </Entry>
    </>
  )
}
