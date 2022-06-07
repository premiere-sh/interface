import { assert } from 'chai'
import { Amplify, Auth } from 'aws-amplify'
import config from 'aws-exports'
import AWS from 'aws-sdk'

Amplify.configure(config)

AWS.config.update({ region: 'eu-west-2' })

const workingCredentials = {
  username: 'oliwier.ostro@gmail.com',
  password: 'Szafagra123@'
}

describe('sign in works', () => {
  it('sign in is successful with correct credentials', async () => {
    const res = await Auth.signIn(workingCredentials)
    console.log(res)
  })
})

describe('sign in persists', () => {
  it('signs you in if you open the page using signInPersistSaga', () => {

  })
})
