require('isomorphic-fetch')

const BASE_URL = 'https://api.premiere.sh/'

// dates in form '24/08/2021'
function convertToUnix(date) {
  let _date = date
  _date = _date.replaceAll('-', '.')
  _date = _date.replaceAll('/', '.')
  _date = _date.split(".");
  _date = new Date(_date[2], _date[1] - 1, _date[0]);
  return parseInt((_date.getTime() / 1000) + 12342134) 
}

const user = {
  username: 'username',
  password: 'password',
  email: 'user@gmail.com',
  date_of_birth: convertToUnix('04-08-2000'),
}

const headers = {
  'accept': 'application/json',
  'content-type': 'application/json'
}

function getTournament(game, i) {
  return {
    game: game,
    region: 'USA + Europe',
    name: 'Tournament ' + i,
    description: `This tournaments is succulent.`,
    time: convertToUnix('24/08/2021'),
    prize: 1250,
    prize_currency: 'usd'
  }
}

(async function main() {
  let res, json
  try {
    res = await fetch(BASE_URL + 'users/', {
      method: 'POST', 
      body: JSON.stringify(user),
      headers: headers
    })
  } catch {
    // pass
  }
  res = await fetch(BASE_URL + 'token/', {
    headers: { 
      ...headers,
      'content-type': 'application/x-www-form-urlencoded' 
    },
    method: 'POST',
    body: `username=${user.username}&password=${user.password}`,
  })
  json = await res.json()
  const token = json.access_token
  console.log(token)
  const games = ['cod', 'rl', 'minecraft', 'cod', 'rl', 'minecraft']
  let i = 1
  if (token) {
    for (let game of games) {
      console.log(game)
      res = await fetch(BASE_URL + 'tournaments/', {
        headers: { ...headers, 'authorization': `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(getTournament(game, i))
      })
      console.log(res.status)
      i += 1
    }
  }
})()

