import { useState } from 'react'
import styled from 'styled-components'
import { LoginButton } from 'components/Buttons'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  return (
    <>
      <Heading>
        log in 
      </Heading>
      <Subtext>
        Login to your Premiere account below!
      </Subtext>
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
          type={'password'}
          value={data.password} 
          onChange={event => setData({ 
            ...data, 
            password: event.target.value 
          })}
          placeholder={'Enter your password'}
        />
      </Entry>
      <Entry style={{ marginTop: 40 }}>
        <LoginButton />
      </Entry>
    </>
  )
}
