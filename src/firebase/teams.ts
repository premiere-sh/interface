import { getAuth } from 'firebase/auth'
import {
  doc,
  getDoc,
  updateDoc,
  getFirestore,
  DocumentData,
  DocumentSnapshot,
  setDoc,
  deleteDoc,
  getDocs,
  collection
} from 'firebase/firestore'

const auth = getAuth()
const firestore = getFirestore()

interface member {
  uid: string
}

const createTeam = async (
  teamName: string,
  teamDescription: string,
  invitedMembers: Array<member>
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams`,
    teamName
  )
  const teamDoc = doc(firestore, `teams`, teamName)
  const userSnapshot = await getDoc(userDoc)
  const userTeamsSnapshot = await getDoc(userTeamsDoc)
  const teamSnapshot = await getDoc(teamDoc)
  if (!teamSnapshot.exists()) {
    const team = await setDoc(teamDoc, {
      name: teamName,
      description: teamDescription
    })
  }
  if (!userTeamsSnapshot.exists()) {
    const userTeams = setDoc(userTeamsDoc, teamDoc)
  }
  await Promise.all(
    invitedMembers.map(async (invitedMember) => {
      const invitedUserTeamsDoc = doc(
        firestore,
        `users/${invitedMember.uid}/teamInvites`,
        teamName
      )
      const invitedUserTeamsSnap = await getDoc(invitedUserTeamsDoc)
      if (!invitedUserTeamsSnap.exists()) {
        const invitedUserTeams = await setDoc(invitedUserTeamsSnap, teamDoc)
      }
    })
  )
  return null
}

const deleteTeam = async (
  teamName: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const teamDoc = doc(firestore, `team/${teamName}`)
  const teamMembersCol = collection(firestore, `team/${teamName}/members`)
  const teamSnap = await getDoc(teamDoc)
  const teamMembersSnap = await getDocs(teamMembersCol)
  await Promise.all(
    teamMembersSnap.docs.map(async (member: any) => {
      const memberTeamDoc = doc(
        firestore,
        `users/${member.uid}/teams/${teamName}`
      )
      const memberTeamSnap = await getDoc(memberTeamDoc)
      if (memberTeamSnap.exists()) {
        const deleteMemberTeam = await deleteDoc(memberTeamDoc)
      }
    })
  )
  if (teamSnap.exists()) {
    const deleteTeam = await deleteDoc(teamDoc)
  }
  return null
}

const editTeam = async (
  teamName: string,
  teamDescription: string,
  invitedMembers: Array<member>
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams`,
    teamName
  )
  const teamDoc = doc(firestore, `teams`, teamName)
  const userSnapshot = await getDoc(userDoc)
  const userTeamsSnapshot = await getDoc(userTeamsDoc)
  const teamSnapshot = await getDoc(teamDoc)
  if (!teamSnapshot.exists()) {
    const updateTeam = await updateDoc(teamDoc, {
      name: teamName,
      description: teamDescription
    })
  }
  if (!userTeamsSnapshot.exists()) {
    const userTeams = await setDoc(userTeamsDoc, teamDoc)
  }
  await Promise.all(
    invitedMembers.map(async (invitedMember) => {
      const invitedUserTeamsDoc = doc(
        firestore,
        `users/${invitedMember.uid}/teamInvites`,
        teamName
      )
      const invitedUserTeamsSnap = await getDoc(invitedUserTeamsDoc)
      if (!invitedUserTeamsSnap.exists()) {
        const invitedUserTeams = await setDoc(invitedUserTeamsSnap, teamDoc)
      }
    })
  )
  return null
}

const acceptTeamInvitation = async (
  teamName: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userTeamInvitesDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teamInvites/${teamName}`
  )
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams`,
    teamName
  )
  const teamDoc = doc(firestore, `teams/${teamName}`)
  const teamMemberDoc = doc(
    firestore,
    `teams/${teamName}/members`,
    auth.currentUser.uid
  )
  const userSnap = await getDoc(userDoc)
  const userTeamInvitesSnap = await getDoc(userTeamInvitesDoc)
  const userTeamsSnap = await getDoc(userTeamsDoc)
  const teamSnap = await getDoc(teamDoc)
  const teamMemberSnap = await getDoc(teamMemberDoc)
  if (!userTeamsSnap.exists()) {
    const userTeams = await setDoc(userTeamsDoc, teamSnap)
  }
  if (!teamMemberSnap.exists()) {
    const teamMember = await setDoc(teamMemberDoc, userSnap)
  }
  if (userTeamInvitesSnap.exists()) {
    const userTeamInvites = await deleteDoc(userTeamInvitesDoc)
  }
  return null
}

const refuseTeamInvitation = async (
  teamName: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userTeamInvitesDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teamInvites/${teamName}`
  )
  const userTeamInvitesSnap = await getDoc(userTeamInvitesDoc)
  if (userTeamInvitesSnap.exists()) {
    const userTeamInvites = await deleteDoc(userTeamInvitesDoc)
  }
  return null
}

export {
  createTeam,
  deleteTeam,
  editTeam,
  acceptTeamInvitation,
  refuseTeamInvitation
}
