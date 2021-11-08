import { useState, useEffect } from 'react'

export const BASE_URL = 'https://api.premiere.sh/'

export function useAuth() {
  const [isLoading, setLoading] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState('')

  // make it so that this runs after login
  useEffect(() => {
    (async function() {
      setLoading(true)
      try {
        const storedToken = localStorage.getItem('token')
        // there is a new token
        if (token && storedToken && storedToken !== token) {
          const headers = {}
          const res = await fetch(BASE_URL + 'is-authenticated/')
          if (res.status == 401) {
            setAuthenticated(false)
          } else if (res.status == 200) {
            setAuthenticated(true)
            localStorage.setItem('token', token)
          }
        // there is an existing token and no local token
        } else if (!token && storedToken) {
          const headers = {}
          const res = await fetch(BASE_URL + 'is-authenticated/')
          if (res.status == 401) {
            setAuthenticated(false)
            setLoading(false)
          } else if (res.status == 200) {
            setAuthenticated(true)
            setToken(storedToken)
          }
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
      setLoading(false)
    })()
  }, [token])

  return {
    isLoading: isLoading,
    isAuthenticated: isAuthenticated,
    token: token,
    setToken: setToken  // to set token from login and update localStorage
    // in case token expires set it to '' and it will update isAuthenticated
  }
}

// login and signup functions assume that form data has been sanitized

export function getHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export function useSignUp() {
  return async function signUp(data) {
    const res = await fetch(BASE_URL + 'users/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (res.status == 200) {
      const { error, token } = await signIn({ 
        username: data['username'],
        password: data['password'] 
      })
      return { token: token, error: error }
    } else if (res.status == 0) {
      const error = (await res.json()).detail
      return { token: undefined, error: error }
    }
  }
}

export function useSignIn() {
  return async function signIn(data) {
    const res = await fetch(BASE_URL + 'token/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (res.status == 200) {
      const token = (await res.json()).access_token
      return { token: token, error: undefined }
    } else {
      const error = (await res.json()).detail
      return { token: undefined, error: error }
    }
  }
}
