import styled from 'styled-components'
import { Column, Container, Row, Center } from './common'
import { Button } from 'components/Buttons'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'
import { connectHits } from 'react-instantsearch-dom'
import { connectStateResults } from 'react-instantsearch-dom'
import { useState } from 'react'
import { useRouter } from 'next/router'

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

  const handleAddFriends = (friend) => {
    !invitedFriends.includes(friend)
      ? setInvitedFriends((current) => [...current, friend])
      : setInvitedFriends((current) =>
          current.filter((item) => item !== friend)
        )
    console.log(invitedFriends)
  }

  const items = hits.map((hit, idx) => (
    <Wrapper key={idx}>
      <UserColumn style={{ alignItems: 'center' }}>
        <div onClick={() => router.push(`/profile/${hit.username}`)}>
          <Avatar src={'/devonhenry_.svg'} />
        </div>
        <Username>{hit.usernanme}</Username>
      </UserColumn>
      <AddFriend>
        <ImageContainer onClick={() => handleAddFriends(hit.usernanme)}>
          {invitedFriends.includes(hit.usernanme) ? (
            <InvitationSend />
          ) : (
            <Image src={'/cross.svg'} width={32} height={32} alt={'cross'} />
          )}
        </ImageContainer>
      </AddFriend>
    </Wrapper>
  ))
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
      {items}
    </Grid>
  )
})

const Results = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? <Hits /> : null
)

export default function AddFriendsHits() {
  return <Results></Results>
}
