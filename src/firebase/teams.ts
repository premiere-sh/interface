import { getAuth } from 'firebase/auth'
import { useState } from 'react'
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
  collection,
  serverTimestamp,
  query,
  orderBy,
  limit
} from 'firebase/firestore'

const auth = getAuth()
const firestore = getFirestore()

interface member {
  email: string
  points: number
  uid: string
  wins: number
}

const createTeam = async (
  teamName: string,
  teamDescription: string,
  invitedMembers: Array<member>
): Promise<DocumentSnapshot<DocumentData>> => {
  const teamsCol = collection(firestore, `teams`)
  const teamsQuery = query(teamsCol, orderBy('date', 'desc'), limit(1))
  const latestTeamSnap = await getDocs(teamsQuery)
  var teamId = 0
  if (latestTeamSnap.docs.length != 0) {
    teamId = latestTeamSnap.docs[0].data().teamId + 1
  }
  const teamIdString = teamId.toString()
  const createdTeam = {
    name: teamName,
    description: teamDescription,
    wins: 0,
    losses: 0,
    ownerId: auth.currentUser.uid,
    date: serverTimestamp(),
    teamId: teamId
  }
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams`,
    teamIdString
  )
  const userSnapshot = await getDoc(userDoc)
  const userTeamsSnapshot = await getDoc(userTeamsDoc)
  const teamDoc = doc(firestore, `teams`, teamIdString)
  const teamMembersDoc = doc(
    firestore,
    `teams/${teamIdString}/members`,
    auth.currentUser.uid
  )
  const teamSnapshot = await getDoc(teamDoc)
  const teamMembersSnap = await getDoc(teamDoc)
  if (!teamSnapshot.exists()) {
    const team = await setDoc(teamDoc, createdTeam)
  }
  if (!teamMembersSnap.exists()) {
    const teamMember = await setDoc(teamMembersDoc, userSnapshot.data())
  }
  if (!userTeamsSnapshot.exists()) {
    const userTeams = setDoc(userTeamsDoc, createdTeam)
  }
  await Promise.all(
    invitedMembers.map(async (invitedMember) => {
      const invitedUserTeamsDoc = doc(
        firestore,
        `users/${invitedMember.uid}/teamInvites`,
        teamIdString
      )
      const invitedMemberDoc = doc(
        firestore,
        `teams/${teamIdString}/invitedMembers`,
        invitedMember.uid
      )
      const invitedUserTeamsSnap = await getDoc(invitedUserTeamsDoc)
      const invitedMemberSnap = await getDoc(invitedMemberDoc)
      if (!invitedUserTeamsSnap.exists()) {
        const invitedUserTeams = await setDoc(invitedUserTeamsDoc, createdTeam)
      }
      if (!invitedMemberSnap.exists()) {
        const memberInvitation = await setDoc(invitedMemberDoc, invitedMember)
      }
    })
  )
  return null
}

const deleteTeam = async (
  teamId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const teamDoc = doc(firestore, `teams/${teamId}`)
  const teamMembersCol = collection(firestore, `teams/${teamId}/members`)
  const teamInvitedMembersCol = collection(
    firestore,
    `teams/${teamId}/invitedMembers`
  )
  const teamSnap = await getDoc(teamDoc)
  const teamMembersSnap = await getDocs(teamMembersCol)
  const teamInvitedMembersSnap = await getDocs(teamInvitedMembersCol)
  await Promise.all(
    teamMembersSnap.docs.map(async (member) => {
      const memberId = member.data().uid
      const memberTeamDoc = doc(firestore, `users/${memberId}/teams/${teamId}`)
      const teamMemberDoc = doc(
        firestore,
        `teams/${teamId}/members/${memberId}`
      )
      const memberTeamSnap = await getDoc(memberTeamDoc)
      const teamMemberSnap = await getDoc(teamMemberDoc)
      if (memberTeamSnap.exists()) {
        const deleteMemberTeam = await deleteDoc(memberTeamDoc)
      }
      if (teamMemberSnap.exists()) {
        const deleteTeamMember = await deleteDoc(teamMemberDoc)
      }
    })
  )
  await Promise.all(
    teamInvitedMembersSnap.docs.map(async (invitedMember) => {
      const invitedMemberId = invitedMember.data().uid
      const invitedMemberTeamDoc = doc(
        firestore,
        `users/${invitedMemberId}/teamInvites/${teamId}`
      )
      const teamInvitedMemberDoc = doc(
        firestore,
        `teams/${teamId}/invitedMembers/${invitedMemberId}`
      )
      const invitedMemberTeamSnap = await getDoc(invitedMemberTeamDoc)
      const teamInvitedMemberSnap = await getDoc(teamInvitedMemberDoc)
      if (invitedMemberTeamSnap.exists()) {
        const deleteInvitedMemberTeam = await deleteDoc(invitedMemberTeamDoc)
      }
      if (teamInvitedMemberSnap.exists()) {
        const deleteTeamInvitedMember = await deleteDoc(teamInvitedMemberDoc)
      }
    })
  )
  if (teamSnap.exists()) {
    const deleteTeam = await deleteDoc(teamDoc)
  }
  return null
}

const editTeam = async (
  teamId: string,
  newTeamName: string,
  newTeamDescription: string,
  newInvitedMembers: Array<member>
): Promise<DocumentSnapshot<DocumentData>> => {
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams`,
    teamId
  )
  const teamDoc = doc(firestore, `teams`, teamId)
  const membersCol = collection(firestore, `teams/${teamId}/members`)
  const invitedMembersCol = collection(
    firestore,
    `teams/${teamId}/invitedMembers`
  )
  const userTeamsSnapshot = await getDoc(userTeamsDoc)
  const teamSnapshot = await getDoc(teamDoc)
  const membersSnap = await getDocs(membersCol)
  const invitedMembersSnap = await getDocs(invitedMembersCol)
  const editedTeam = {
    name: newTeamName,
    description: newTeamDescription
  }
  if (teamSnapshot.exists()) {
    const team = await updateDoc(teamDoc, editedTeam)
  }
  if (userTeamsSnapshot.exists()) {
    const userTeams = updateDoc(userTeamsDoc, editedTeam)
  }
  await Promise.all(
    newInvitedMembers.map(async (newInvitedMember) => {
      const invitedUserTeamsDoc = doc(
        firestore,
        `users/${newInvitedMember.uid}/teamInvites`,
        teamId
      )
      const teamInvitedMembersDoc = doc(
        firestore,
        `teams/${teamId}/invitedMembers`,
        newInvitedMember.uid
      )
      const invitedUserTeamsSnap = await getDoc(invitedUserTeamsDoc)
      const teamInvitedMembersSnap = await getDoc(teamInvitedMembersDoc)
      if (!invitedUserTeamsSnap.exists()) {
        const invitedUserTeams = await setDoc(invitedUserTeamsDoc, {
          ...teamSnapshot.data(),
          ...editedTeam
        })
      }
      if (!teamInvitedMembersSnap.exists()) {
        const teamInvitedMember = await setDoc(
          teamInvitedMembersDoc,
          newInvitedMember
        )
      }
    })
  )
  await Promise.all(
    membersSnap.docs.map(async (member) => {
      const memberTeamsDoc = doc(
        firestore,
        `users/${member.data().uid}/teams`,
        teamId
      )
      const memberTeamsSnap = await getDoc(memberTeamsDoc)
      if (memberTeamsSnap.exists()) {
        const memberTeams = await updateDoc(memberTeamsDoc, editedTeam)
      }
    })
  )
  await Promise.all(
    invitedMembersSnap.docs.map(async (invitedMember) => {
      const invitedMemberTeamsDoc = doc(
        firestore,
        `users/${invitedMember.data().uid}/teamInvites`,
        teamId
      )
      const invitedMemberTeamsSnap = await getDoc(invitedMemberTeamsDoc)
      if (invitedMemberTeamsSnap.exists()) {
        const memberTeams = await updateDoc(invitedMemberTeamsDoc, editedTeam)
      }
    })
  )
  return null
}

const acceptTeamInvite = async (
  teamId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userDoc = doc(firestore, `users/${auth.currentUser.uid}`)
  const userTeamInvitesDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teamInvites/${teamId}`
  )
  console.log('teamId', teamId)
  const userTeamsDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teams/${teamId}`
  )
  const teamDoc = doc(firestore, `teams/${teamId}`)
  const teamMemberDoc = doc(
    firestore,
    `teams/${teamId}/members`,
    auth.currentUser.uid
  )
  const invitedMembersDoc = doc(
    firestore,
    `teams/${teamId}/invitedMembers/${auth.currentUser.uid}`
  )
  const userSnap = await getDoc(userDoc)
  const userTeamInvitesSnap = await getDoc(userTeamInvitesDoc)
  const userTeamsSnap = await getDoc(userTeamsDoc)
  const teamSnap = await getDoc(teamDoc)
  const teamMemberSnap = await getDoc(teamMemberDoc)
  const invitedMembersSnap = await getDoc(invitedMembersDoc)
  if (!userTeamsSnap.exists()) {
    const userTeams = await setDoc(userTeamsDoc, teamSnap.data())
  }
  if (!teamMemberSnap.exists()) {
    const teamMember = await setDoc(teamMemberDoc, userSnap.data())
  }
  if (userTeamInvitesSnap.exists()) {
    const userTeamInvites = await deleteDoc(userTeamInvitesDoc)
  }
  if (invitedMembersSnap.exists()) {
    const invitedMembers = await deleteDoc(invitedMembersDoc)
  }
  return null
}

const refuseTeamInvite = async (
  teamId: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const userTeamInvitesDoc = doc(
    firestore,
    `users/${auth.currentUser.uid}/teamInvites/${teamId}`
  )
  const invitedMembersDoc = doc(
    firestore,
    `teams/${teamId}/invitedMembers/${auth.currentUser.uid}`
  )
  const userTeamInvitesSnap = await getDoc(userTeamInvitesDoc)
  const invitedMemberSnap = await getDoc(invitedMembersDoc)
  if (userTeamInvitesSnap.exists()) {
    const userTeamInvites = await deleteDoc(userTeamInvitesDoc)
  }
  if (invitedMemberSnap.exists()) {
    const invitedMembers = await deleteDoc(invitedMembersDoc)
  }
  return null
}

export { createTeam, deleteTeam, editTeam, acceptTeamInvite, refuseTeamInvite }
