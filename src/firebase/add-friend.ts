import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
  DocumentData,
  DocumentSnapshot,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'

const auth = getAuth()
const firestore = getFirestore()

const sendFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const friendDoc = doc(firestore, `users/${friendId}`)
  const friendDocRef = await updateDoc(friendDoc, {
    friendRequests: arrayUnion(auth.currentUser.uid)
  })
  const friendDocSnap = await getDoc(friendDoc)
  return null
}

const cancelFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const friendDoc = doc(firestore, `users/${friendId}`)
  const friendDocRef = await updateDoc(friendDoc, {
    friendRequests: arrayRemove(friendId)
  })
  const friendDocSnap = await getDoc(friendDoc)
  return null
}

const getFriendRequests = async () => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userSnapshot = await getDoc(userDoc)
  const userRequests = userSnapshot.data().friendRequests
  const requestingUsers = []
  userRequests.forEach(async (requesterId: string) => {
    const requesterDoc = doc(firestore, `users/${requesterId}`)
    const requesterSnapshot = await getDoc(requesterDoc)
    const requesterData = requesterSnapshot.data()
    return requestingUsers.push(requesterData)
  })
  return requestingUsers
}

const acceptFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const friendDoc = doc(firestore, `users/${friendId}`)
  const userDocRef = await updateDoc(userDoc, {
    friends: arrayUnion(friendId),
    friendRequests: arrayRemove(friendId)
  })
  const friendDocRef = await updateDoc(friendDoc, {
    friends: arrayUnion(auth.currentUser.uid)
  })

  return null
}

const refuseFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const friendDoc = doc(firestore, `users/${friendId}`)
  const userDocRef = await updateDoc(userDoc, {
    friendRequests: arrayRemove(friendId)
  })

  return null
}

export {
  sendFriendRequest,
  cancelFriendRequest,
  getFriendRequests,
  acceptFriendRequest,
  refuseFriendRequest
}
