import React from 'react'
import { useSignUp, useSignIn } from '../src/hooks'
import 'isomorphic-fetch'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const randInt = getRandomInt(5000)

const signUpCredentials = {
  username: `user${randInt}`,
  password: 'asdfasdf',
  date_of_birth: parseInt(Date.now() / 1000),
  email: `user${randInt}@gmail.com`
}

const workingCredentials = {
  username: 'user1941',
  password: 'asdfasdf'
}

const invalidCredentials = {
  username: 'asdfasdf',
  password: 'asdfasdf'
}

describe('sign in', () => {
  it('returns access token if login was successful', async () => {
    const signIn = useSignIn()
    const token = await signIn(workingCredentials)
    expect(token).not.toBeFalsy()
  })

  it('returns error message if login was unsuccessful', async () => {
    const signIn = useSignIn()
    const error = await signIn(invalidCredentials)
    expect(error).not.toBeFalsy()
  })
})

describe('sign up', () => {
  it('signs in and returns token on successful sign up', async () => {
    const signUp = useSignUp()
    const { token, error } = await signUp(signUpCredentials)
    expect(token).not.toBeFalsy()
  })

  it('returns error if the sign up is unsuccessful', async () => {
    const signUp = useSignUp()
    const { token, error } = await signUp(signUpCredentials)
    expect(error).not.toBeFalsy()
    expect(error).toEqual('Email already registered')
  })
})
