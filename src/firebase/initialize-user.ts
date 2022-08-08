import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  addDoc,
  getFirestore,
  collection,
  DocumentData
} from 'firebase/firestore'

export const initializeUser = async (): Promise<DocumentData> => {
  const auth = getAuth()
  const firestore = getFirestore()
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userSnapshot = await getDoc(userDoc)
  if (!userSnapshot.exists) {
    const col = collection(firestore, 'users')
    const docRef = await addDoc(col, {
      uid: auth.currentUser.uid,
      tournaments: [],
      points: 0,
      teams: [],
      friends: [],
      wins: 0
    })
    const createdUser = await getDoc(docRef)
    return createdUser.data()
  }
  return userSnapshot
}
