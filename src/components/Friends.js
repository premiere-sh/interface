import styled from 'styled-components'
import { Column, Container, Row } from './common'
import { Button } from 'components/Buttons'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'
import {
  InstantSearch,
  connectHits,
  connectSearchBox
} from 'react-instantsearch-dom'
import { searchClient } from 'algolia/index'
import { useState } from 'react'

function zip(arrays) {
  return arrays[0].map((_, i) => {
    return arrays.map((array) => {
      return array[i]
    })
  })
}

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

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <Search
      placeholder={'Search players...'}
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

const Hits = connectHits(({ hits }) => {
  const items = hits.map((hit, idx) => (
    <UserColumn style={{ alignItems: 'center' }} key={idx}>
      <div onClick={() => router.push(`/profile/${friend.id}`)}>
        <Avatar src={'/devonhenry_.svg'} />
      </div>
      <Username>{hit.usernanme}</Username>
    </UserColumn>
  ))
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
      {items}
    </Grid>
  )
})

export default function Friends({ friends, invites, avatars }) {
  const [selected, setSelected] = useState('yourfriends')

  function AddFriends() {
    return (
      <div>
        <SearchContainer>
          <Image src={'/search.svg'} width={32} height={32} alt={'search'} />
          <CustomSearchBox />
        </SearchContainer>
        <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
          <Hits />
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
          <Hits />
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
            <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
              {invites?.length &&
                avatars?.length &&
                zip(invites, avatars).map(([invite, avatar], key) => (
                  <UserColumn style={{ alignItems: 'center' }} key={key}>
                    <div onClick={() => acceptInvite(invite, token)}>
                      <Avatar src={avatar} />
                    </div>
                    <Username>{invite.inviting_friend}</Username>
                  </UserColumn>
                ))}
            </Grid>
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
