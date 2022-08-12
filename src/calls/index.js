import { db } from '../firebase/firebase'
import { doc, getDocs, collection } from "firebase/firestore"; 

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

export const getTournaments = async () => {
  try{
    const querySnapshot = await getDocs(collection(db, 'tournaments'))
    const tournaments = querySnapshot.docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      return {id, ...data}
    })
    return tournaments
  } catch (error) {
    console.log(error)
    return null
  }
}
