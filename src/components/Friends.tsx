import styled from 'styled-components'
import { Column, Container, Row, Center } from './common'
import { Button } from 'components/Buttons'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'
import { InstantSearch, connectSearchBox } from 'react-instantsearch-dom'
import { searchClient } from 'algolia/index'
import { useState } from 'react'
import AddFriendsHits from 'components/AddFriendsHits'
import { Hits as YourFriendsHits } from 'components/YourFriendsHits'
import {
  acceptFriendRequest,
  refuseFriendRequest
} from '../firebase/add-friend'
import { collection } from 'firebase/firestore'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'

const UserColumn = styled(Column)``

const TextSection = styled(Column)``

const FriendsContainer = styled.div``

const Search = styled.input`
  width: 250px;
  border: 0;
  background: transparent;
  font-weight: 500;
  line-height: 24px;
  font-size: 20px;
  line-height: 30px;
  ::placeholder {
    color: black;
  }
`

const SearchContainer = styled(Row)`
  justify-content: space-between;
  width: 315px;
  margin-bottom: 90px;
`

const YourInvites = styled.div`
  font-size: 26px;
  line-height: 31px;
  font-weight: 600;
  margin-bottom: 45px;
`

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
const AddFriendsButton = styled(Button)`
  font-size: 26px;
  line-height: 31px;
  font-weight: 600;
  margin-bottom: 45px;
  width: 200px;
  height: 80px;
  margin-left: 20px;
`

const YourFriendsButton = styled(Button)`
  font-size: 26px;
  line-height: 31px;
  font-weight: 600;
  margin-bottom: 45px;
  width: 200px;
  height: 80px;
`

const TextContainer = styled(Row)`
  justify-content: start;
`

const PopoutContainer = styled(Container)`
  width: 100%;
`

const InvitesGrid = styled(Grid)`
  margin-bottom: 30px;
  margin-left: 30px;
`

const Wrapper = styled.div`
  position: relative;
  width: 210px;
`

const FriendRequest = styled(Center)`
  width: 65px;
  height: 65px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: 3px solid #982649;
  position: absolute;
  top: 0;
  z-index: 50;
`

const AcceptFriendRequest = styled(FriendRequest)`
  right: 15px;
`

const RefuseFriendRequest = styled(FriendRequest)`
  left: 15px;
  transform: rotate(45deg);
`

const AcceptFriendSign = styled.div`
  display: block;
  top: 0.05em;
  left: 0.28em;
  width: 15%;
  height: 60%;
  border: solid #982649;
  border-width: 0 0.2em 0.2em 0;
  transform: rotate(45deg);
`

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <Search
      placeholder={'Search players...'}
      type="search"
      value={currentRefinement}
      onChange={(e) => refine(e.currentTarget.value)}
    />
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

export default function Friends({ invites }) {
  const [selected, setSelected] = useState('yourfriends')
  const firestore = useFirestore()
  const { data: user } = useUser()

  const friendRequestsCollection = collection(
    firestore,
    `users/${user.uid}/friendRequests`
  )
  const { data: friendRequests } = useFirestoreCollectionData(
    friendRequestsCollection
  )

  function AddFriends() {
    return (
      <div>
        <SearchContainer>
          <Image src={'/search.svg'} width={32} height={32} alt={'search'} />
          <CustomSearchBox />
        </SearchContainer>
        <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
          <AddFriendsHits />
        </Grid>
      </div>
    )
  }

  function YourFriends() {
    return (
      <div>
        <SearchContainer>
          <Image src={'/search.svg'} width={32} height={32} alt={'search'} />
          <CustomSearchBox />
        </SearchContainer>
        <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
          <YourFriendsHits />
        </Grid>
      </div>
    )
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="users">
      <FriendsContainer>
        {invites && (
          <Container>
            <TextSection>
              <YourInvites>Your invites</YourInvites>
            </TextSection>
            <InvitesGrid
              columns={'repeat(auto-fit, minmax(210px, 1fr))'}
              gap={'83px'}
            >
              {friendRequests?.map((requester, key) => (
                <Wrapper key={key}>
                  <UserColumn style={{ alignItems: 'center' }}>
                    <div>
                      <Avatar src={'/devonhenry_.svg'} />
                    </div>
                    <Username>{requester.email}</Username>
                  </UserColumn>
                  <AcceptFriendRequest
                    onClick={() => acceptFriendRequest(requester.uid)}
                  >
                    <AcceptFriendSign />
                  </AcceptFriendRequest>
                  <RefuseFriendRequest
                    onClick={() => refuseFriendRequest(requester.uid)}
                  >
                    <Image
                      src={'/cross.svg'}
                      width={32}
                      height={32}
                      alt={'cross'}
                    />
                  </RefuseFriendRequest>
                </Wrapper>
              ))}
            </InvitesGrid>
          </Container>
        )}
        <Container>
          <TextContainer>
            <YourFriendsButton
              style={{
                fontSize: `${selected == 'yourfriends' ? 32 : 26}px`
              }}
              onClick={() => setSelected('yourfriends')}
            >
              Your friends
            </YourFriendsButton>
            <AddFriendsButton
              style={{
                fontSize: `${selected == 'addfriends' ? 32 : 26}px`
              }}
              onClick={() => setSelected('addfriends')}
            >
              Add Friends
            </AddFriendsButton>
          </TextContainer>
          <PopoutContainer>
            {selected == 'yourfriends' && <YourFriends />}
            {selected == 'addfriends' && <AddFriends />}
          </PopoutContainer>
        </Container>
      </FriendsContainer>
    </InstantSearch>
  )
}
