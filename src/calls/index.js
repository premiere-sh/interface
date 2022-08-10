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
    return _games
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getTournaments() {
  try {
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
    return tournaments
  } catch (error) {
    console.log(error)
    return null
  }
}
