import { useState, useEffect } from 'react'

export interface Credentials {
  username: string
  password: string
}

export function getHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export function useSignUp() {
  const signIn = useSignIn()
  return async function signUp(data: any) {
    const credentials = {
      username: 'deprecated',
      password: 'deprecated',
      ...data
    }
    return signIn(credentials)
  }
}

export function useSignIn() {
  return async function signIn(data: Credentials) {
    return { token: 'deprecated', error: 'deprecated' }
  }
}

export function useSignOut() {
  console.log('sign out')
}

export function useFriends(user: any) {
  const [friends, setFriends] = useState([])

  useEffect(function () {
    ;(async function () {
      setFriends([])
    })()
  }, [])

  return friends
}

export function useStats(user_id: string | number) {
  const [stats, setStats] = useState({})

  useEffect(function () {
    ;(async function () {
      setStats({})
    })()
  }, [])

  return stats
}

export function useInviteFriend() {
  return async function inviteFriend(
    invitingId: any,
    acceptingId: any,
    token: any
  ) {
    return { success: true, error: null }
  }
}

export function useCreateTournament() {
  return async function createTournament(tournament: any, token: string) {
    return { success: true, error: null }
  }
}

export function useUser(userId: string | number) {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null)

  useEffect(
    function () {
      if (user?.username) {
      }
    },
    [user]
  )

  useEffect(
    function () {
      setUser(null)
      setAvatar(null)
    },
    [userId]
  )

  return { user: user, avatar: avatar }
}

export function useFriendInvites(user: any, token: any) {
  const [invites, setInvites] = useState([])
  const [avatars, setAvatars] = useState([])
  const [error, setError] = useState(undefined)
  const [accepted, setAccepted] = useState(false)
  // TODO there has to be a way of accepting those requests
  // and re-fetching the invites aferwards

  useEffect(
    function () {
      ;(async function () {
        setInvites([])
        setAvatars([])
        setError(undefined)
        setAccepted(false)
      })
    },
    [token]
  )

  return { invites, avatars, error }
}
