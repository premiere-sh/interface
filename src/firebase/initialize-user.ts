import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  DocumentData,
  DocumentSnapshot
} from 'firebase/firestore'

const initializeUser = async (): Promise<DocumentSnapshot<DocumentData>> => {
  const auth = getAuth()
  const firestore = getFirestore()
  const userDoc = doc(firestore, 'users', auth.currentUser.uid)
  const userSnapshot = await getDoc(userDoc)
  if (!userSnapshot.exists()) {
    const col = collection(firestore, 'users')
    const docRef = await setDoc(userDoc, {
      uid: auth.currentUser.uid,
      tournaments: [],
      points: 0,
      teams: [],
      friends: [],
      friendRequests: [],
      wins: 0
    })
    const createdUser = await getDoc(userSnapshot)
    console.log('created user', createdUser)
    return createdUser
  }
  console.log('snapshot', userSnapshot)
  return userSnapshot
}

export { initializeUser }
