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
    try {
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
    } catch {
      // pass
    }
    return signIn(credentials)
  }
}

export function useSignIn() {
  return async function signIn(data) {
    try {
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
    } catch {
      //pass
    }
  }
}

export function useSignOut() {
  console.log('sign out')
}

export function useFriends(user: any) {
  const [friends, setFriends] = useState([])

  useEffect(function () {
    ;(async function () {
      try {
        const res = await fetch(`${BASE_URL}${user?.user_id}/friends/`)
        if (res.status == 200) {
          let _friends = await res.json()
          _friends = _friends.map((friend: any) => {
            friend.avatar = ''
            return friend
          })
          setFriends(_friends)
        }
      } catch {
        //pass
      }
    })()
  }, [])

  return friends
}

export function useStats(user_id: string | number) {
  const [stats, setStats] = useState({})

  useEffect(function () {
    ;(async function () {
      try {
        const res = await fetch(`${BASE_URL}${user_id}/stats/`)
        if (res.status == 200) {
          const _stats = await res.json()
          setStats(_stats)
        }
      } catch {
        //pass
      }
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
    try {
      const headers = getHeaders(token)
      const slug = `users/${acceptingId}/friends/invite/`
      const res = await fetch(BASE_URL + slug, {
        headers: headers,
        method: 'POST'
      })
      if (res.status == 200) {
        return { success: true }
      } else {
        const error = await res.json()
        return { error: error }
      }
    } catch {
      //pass
    }
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
      if (userId) {
        ;(async function () {
          try {
            const res = await fetch(BASE_URL + `users/${userId}`)
            const _user = await res.json()
            setUser(_user)
          } catch {
            // pass
          }
        })()
      }
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
