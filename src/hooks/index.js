import { useState, useEffect, useContext } from 'react'
import AuthenticationContext from 'contexts/authentication'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-identicon-sprites'

export const BASE_URL = 'https://api.premiere.sh/'

export function useAuth() {
  const [isLoading, setLoading] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState(undefined)
  const [currentUser, setCurrentUser] = useState({})
  const [currentUserAvatar, setCurrentUserAvatar] = useState(null)

  useEffect(
    function () {
      if (currentUser?.username) {
        const _avatar = createAvatar(style, {
          seed: currentUser.username + 'asdf',
          dataUri: true
        })
        setCurrentUserAvatar(_avatar)
      }
    },
    [currentUser]
  )

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      try {
        let storedToken = window.localStorage.getItem('token')
        console.log('retrieved', storedToken)

        // first time
        if (storedToken == null && token != null) {
          console.log('first time')
          const headers = getHeaders(token)
          const res = await fetch(BASE_URL + 'is-authenticated/', {
            method: 'GET',
            headers: headers
          })
          if (res.status == 401) {
            setAuthenticated(false)
          } else if (res.status == 200) {
            setAuthenticated(true)
            window.localStorage.setItem('token', token)
            const _currentUser = await res.json()
            setCurrentUser(_currentUser)
            console.log(window.localStorage)
          }

          // there is a new token
        } else if (
          token != null &&
          storedToken != null &&
          storedToken != token
        ) {
          console.log('new token')
          const headers = getHeaders(token)
          const res = await fetch(BASE_URL + 'is-authenticated/', {
            method: 'GET',
            headers: headers
          })
          if (res.status == 401) {
            setAuthenticated(false)
          } else if (res.status == 200) {
            setAuthenticated(true)
            window.localStorage.setItem('token', token)
            const _currentUser = await res.json()
            setCurrentUser(_currentUser)
          }

          // there is an existing token and no local token
        } else if (token != null && storedToken == null) {
          console.log('existing')
          const headers = getHeaders(storedToken)
          const res = await fetch(BASE_URL + 'is-authenticated/', {
            method: 'GET',
            headers: headers
          })
          if (res.status == 401) {
            setAuthenticated(false)
            setLoading(false)
            window.localStorage.setItem('token', undefined)
          } else if (res.status == 200) {
            setAuthenticated(true)
            setToken(storedToken)
            const _currentUser = await res.json()
            setCurrentUser(_currentUser)
          }

          // there is an only the local token
        } else if (token == null && storedToken != null) {
          console.log('local existing')
          const headers = getHeaders(storedToken)
          const res = await fetch(BASE_URL + 'is-authenticated/', {
            method: 'GET',
            headers: headers
          })
          if (res.status == 401) {
            // in case it expires
            setAuthenticated(false)
            setLoading(false)
            window.localStorage.setItem('token', undefined)
          } else if (res.status == 200) {
            setAuthenticated(true)
            setToken(storedToken)
            const _currentUser = await res.json()
            setCurrentUser(_currentUser)
          }
        }
      } catch (err) {
        setLoading(false)
      }
      setLoading(false)
    })()
  }, [token])

  return {
    isLoading: isLoading,
    isAuthenticated: isAuthenticated,
    token: token,
    setToken: setToken,
    currentUser: currentUser,
    currentUserAvatar: currentUserAvatar
  }
}

export function getHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export function useSignUp() {
  const signIn = useSignIn()
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
      const credentials = {
        username: data.username,
        password: data.password
      }
      return signIn(credentials)
    } else {
      const error = await res.json()
      return { error: error.detail }
    }
  }
}

export function useSignIn() {
  return async function signIn(data) {
    const res = await fetch(BASE_URL + 'token/', {
      method: 'POST',
      body: `username=${data.username}&password=${data.password}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    if (res.status == 200) {
      const token = (await res.json()).access_token
      return { token: token }
    } else {
      const error = (await res.json()).detail
      return { error: error }
    }
  }
}

export function useSignOut() {
  const { setToken } = useContext(AuthenticationContext)
  return function signOut() {
    window.localStorage.setItem('token', null)
    setToken(null)
  }
}

export function useFriends(user_id) {
  const [friends, setFriends] = useState([])

  useEffect(function () {
    ;(async function () {
      const res = await fetch(`${BASE_URL}${user_id}/friends/`)
      let avatar
      if (res.status == 200) {
        let _friends = await res.json()
        _friends = _friends.map((friend) => {
          avatar = createAvatar(style, {
            seed: user.username + 'asdf',
            dataUri: true
          })
          friend.avatar = avatar
          return friend
        })
        setFriends(_friends)
      }
    })()
  }, [])

  return friends
}

export function useStats(user_id) {
  const [stats, setStats] = useState({})

  useEffect(function () {
    ;(async function () {
      return
      const res = await fetch(`${BASE_URL}${user_id}/stats/`)
      if (res.status == 200) {
        const _stats = await res.json()
        setFriends(_stats)
      }
    })()
  }, [])

  return stats
}

export function useInviteFriend() {
  return async function inviteFriend() {
    return
  }
}

export function useUser(userId) {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null)

  useEffect(
    function () {
      if (user?.username) {
        const _avatar = createAvatar(style, {
          seed: user.username + 'asdf',
          dataUri: true
        })
        setAvatar(_avatar)
      }
    },
    [user]
  )

  useEffect(
    function () {
      if (userId) {
        ;(async function () {
          const res = await fetch(`https://api.premiere.sh/users/${userId}`)
          const _user = await res.json()
          setUser(_user)
        })()
      }
    },
    [userId]
  )

  return { user: user, avatar: avatar }
}
