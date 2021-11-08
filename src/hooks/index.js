import { useState, useEffect } from 'react'

const BASE_URL = 'https://api.premiere.sh/'

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

