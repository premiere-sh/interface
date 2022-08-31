import styled from 'styled-components'
import { Column, Center } from './common'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'
import { connectHits } from 'react-instantsearch-dom'
import { connectStateResults } from 'react-instantsearch-dom'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { sendFriendRequest, cancelFriendRequest } from '../firebase/add-friend'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { collection } from 'firebase/firestore'
import _ from 'underscore'

const UserColumn = styled(Column)``

const Username = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 26.73px;
`

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 170px;
`

const AddFriend = styled.div`
  width: 65px;
  height: 65px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: 3px solid #982649;
  position: absolute;
  top: 0;
  right: 15px;
  z-index: 50;
`

const Wrapper = styled.div`
  position: relative;
  width: 210px;
  margin-left: 30px;
`

const ImageContainer = styled(Center)`
  height: 100%;
  width: 100%;
  position: relative;
`

const InvitationSend = styled.div`
  display: block;
  top: 0.05em;
  left: 0.28em;
  width: 15%;
  height: 60%;
  border: solid #982649;
  border-width: 0 0.2em 0.2em 0;
  transform: rotate(45deg);
`

const Hits = connectHits(({ hits }) => {
  const [invitedFriends, setInvitedFriends] = useState([])
  const router = useRouter()
  const { data: user } = useUser()
  const firestore = useFirestore()
  const friendRequestsCollection = collection(
    firestore,
    `users/${user.uid}/friendRequests`
  )
  const friendsCollection = collection(firestore, `users/${user.uid}/friends`)
  const { data: friendRequests } = useFirestoreCollectionData(
    friendRequestsCollection
  )
  const { data: friends } = useFirestoreCollectionData(friendsCollection)
  const friendRequestsPluck = _.pluck(friendRequests, 'uid')
  const friendsPluck = _.pluck(friends, 'uid')

  const handleAddFriends = (friend) => {
    if (!invitedFriends.includes(friend)) {
      setInvitedFriends((current) => [...current, friend])
      sendFriendRequest(friend)
    } else {
      setInvitedFriends((current) => current.filter((item) => item !== friend))
      cancelFriendRequest(friend)
    }
  }

  const items = hits.map((hit, idx) =>
    hit.uid != user.uid &&
    !friendRequestsPluck.includes(hit.uid) &&
    !friendsPluck.includes(hit.uid) ? (
      <Wrapper key={idx}>
        <UserColumn style={{ alignItems: 'center' }}>
          <div onClick={() => router.push(`/profile/${hit.username}`)}>
            <Avatar src={'/devonhenry_.svg'} />
          </div>
          <Username>{hit.email}</Username>
        </UserColumn>
        <AddFriend>
          <ImageContainer onClick={() => handleAddFriends(hit.uid)}>
            {invitedFriends.includes(hit.uid) ? (
              <InvitationSend />
            ) : (
              <Image src={'/cross.svg'} width={32} height={32} alt={'cross'} />
            )}
          </ImageContainer>
        </AddFriend>
      </Wrapper>
    ) : null
  )
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
      {items}
    </Grid>
  )
})

const Results = connectStateResults(({ searchState }) => <Hits />)

export default function AddFriendsHits() {
  return <Results></Results>
}
