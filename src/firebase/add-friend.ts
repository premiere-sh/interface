import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  updateDoc,
  getFirestore,
  DocumentData,
  DocumentSnapshot,
  setDoc,
  deleteDoc
} from 'firebase/firestore'

const auth = getAuth()
const firestore = getFirestore()

const sendFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const friendDoc = doc(
    firestore,
    `users/${friendId}/friendRequests`,
    auth.currentUser.uid
  )
  const userDoc = doc(firestore, 'users', auth.currentUser.uid)
  const friendSnapshot = await getDoc(friendDoc)
  const userSnapshot = await getDoc(userDoc)
  if (!friendSnapshot.exists()) {
    const docRef = await setDoc(friendDoc, userSnapshot.data())
  }
  return null
}

const cancelFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const friendDoc = doc(
    firestore,
    `users/${friendId}/friendRequests`,
    auth.currentUser.uid
  )
  const friendSnapshot = await getDoc(friendDoc)
  if (friendSnapshot.exists()) {
    const docRef = await deleteDoc(friendDoc)
  }

  return null
}

const acceptFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userFriendRequestsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/friendRequests/${friendId}`
  )
  const userFriendsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/friends`,
    friendId
  )
  const friendDoc = doc(
    firestore,
    `users/${friendId}/friends`,
    auth.currentUser.uid
  )
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userFriendRequestsSnap = await getDoc(userFriendRequestsDoc)
  const userFriendsSnapshot = await getDoc(userFriendsDoc)
  const friendSnapshot = await getDoc(friendDoc)
  const userSnapshot = await getDoc(userDoc)
  if (userFriendRequestsSnap.exists()) {
    const userFriendRequestsRef = await deleteDoc(userFriendRequestsDoc)
  }
  if (!userFriendsSnapshot.exists()) {
    const docRef = await setDoc(userFriendsDoc, userFriendRequestsSnap.data())
  }
  if (!friendSnapshot.exists()) {
    const docRef = await setDoc(friendDoc, userSnapshot.data())
  }
  return null
}

const refuseFriendRequest = async (
  friendId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userFriendRequestsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/friendRequests/${friendId}`
  )
  const userFriendRequestsSnap = await getDoc(userFriendRequestsDoc)
  if (userFriendRequestsSnap.exists()) {
    const userFriendRequestsRef = await deleteDoc(userFriendRequestsDoc)
  }
  return null
}

export {
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  refuseFriendRequest
}
