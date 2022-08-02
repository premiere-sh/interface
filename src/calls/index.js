import { BASE_URL } from 'hooks'

export async function getPlayerOfTheWeek() {
  const player = {
    name: 'devonhenry_',
    since: 'UK Member since August 24, 2021',
    rank: '1st',
    weeklyWins: '98',
    premEarned: '2310994'
  }
  return player
}

export async function getGames() {
  try {
    const _games = []
    const res = await fetch(BASE_URL + 'tournaments/ongoing/')
    if (res.status == 200) {
      const ongoingTournaments = await res.json()
      let ongoing
      for (let game in ongoingTournaments) {
        _games.push({
          name: game,
          caption: `${ongoingTournaments[game]} ongoing`
        })
      }
    }
    return _games
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getTournaments() {
  let tournaments = []
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  function makeTimeRight(tournament) {
    const unix = tournament.time
    let date = new Date(unix * 1000)
    let year = date.getFullYear()
    let day = date.getDate()
    let month = months[date.getMonth()]
    let hours = date.getHours()
    let minutes = date.getMinutes()
    tournament.time = `${hours}:${minutes}`
    tournament.date = `${day} ${month} ${year}`
    return tournament
  }
  try {
    const res = await fetch(BASE_URL + 'tournaments/')
    if (res.status == 200) {
      let _tournaments = await res.json()
      tournaments = _tournaments.map((tournament) => makeTimeRight(tournament))
    }
    return tournaments
  } catch (error) {
    console.log(error)
    return null
  }
}
