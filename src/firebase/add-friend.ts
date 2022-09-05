import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
  query,
  where,
  documentId
} from 'firebase/firestore'

const auth = getAuth()
const firestore = getFirestore()

const sendFriendRequest = async (friendId: string) => {
  const friendDocRef = doc(
    firestore,
    `users/${friendId}/friendRequests`,
    auth.currentUser.uid
  )
  const friendSnap = await getDoc(friendDocRef)
  const userDoc = doc(firestore, 'users', auth.currentUser.uid)
  const userSnap = await getDoc(userDoc)
  if (!friendSnap.exists()) {
    await setDoc(friendDocRef, userSnap.data())
  }
}

const cancelFriendRequest = async (friendId: string) => {
  const friendDocRef = doc(
    firestore,
    `users/${friendId}/friendRequests`,
    auth.currentUser.uid
  )
  const friendSnap = await getDoc(friendDocRef)

  if (friendSnap.exists()) {
    await deleteDoc(friendDocRef)
  }
}

const acceptFriendRequest = async (friendId: string) => {
  const userFriendRequestsDocRef = doc(
    firestore,
    `users/${auth.currentUser.uid}/friendRequests/${friendId}`
  )
  const userFriendRequestsSnap = await getDoc(userFriendRequestsDocRef)
  const userFriendsDocRef = doc(
    firestore,
    `users/${auth.currentUser.uid}/friends`,
    friendId
  )
  const userFriendsSnap = await getDoc(userFriendsDocRef)
  const friendDocRef = doc(
    firestore,
    `users/${friendId}/friends`,
    auth.currentUser.uid
  )
  const friendSnap = await getDoc(friendDocRef)
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userSnap = await getDoc(userDoc)
  if (userFriendRequestsSnap.exists()) {
    await deleteDoc(userFriendRequestsDocRef)
  }
  if (!userFriendsSnap.exists()) {
    await setDoc(userFriendsDocRef, userFriendRequestsSnap.data())
  }
  if (!friendSnap.exists()) {
    await setDoc(friendDocRef, userSnap.data())
  }
}

const refuseFriendRequest = async (friendId: string) => {
  const userFriendRequestsDocRef = doc(
    firestore,
    `users/${auth.currentUser.uid}/friendRequests/${friendId}`
  )
  const userFriendRequestsSnap = await getDoc(userFriendRequestsDocRef)
  if (userFriendRequestsSnap.exists()) {
    await deleteDoc(userFriendRequestsDocRef)
  }
}

const handleFriendRequests = async (setInvitedFriends, friendId) => {
  const sendFriendRequestsRef = collection(
    firestore,
    `users/${friendId}/friendRequests`
  )
  const sendFriendRequestsQuery = query(
    sendFriendRequestsRef,
    where(documentId(), '==', auth.currentUser.uid)
  )
  const sendFriendRequestsSnap = await getDocs(sendFriendRequestsQuery)
  const sendFriendRequestId = sendFriendRequestsSnap.docs[0]
  console.log('send', sendFriendRequestId)
  if (!sendFriendRequestId == friendId || sendFriendRequestId == undefined) {
    console.log('dsfsaaf', 'sdfgdsfg')
    setInvitedFriends((current) => [...current, friendId])
    sendFriendRequest(friendId)
  } else {
    setInvitedFriends((current) => current.filter((item) => item !== friendId))
    cancelFriendRequest(friendId)
  }
}

export {
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  refuseFriendRequest,
  handleFriendRequests
}
