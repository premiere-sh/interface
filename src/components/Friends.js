import styled from 'styled-components'
import { Column, Container, Row } from './common'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'

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
  ::placeholder{
    color: black;
  }
`

const SearchBox = styled(Row)`
  justify-content: space-between;
  width: 315px;
  margin-bottom: 90px;
`
const YourFriends = styled.div`
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

export default function Friends() {
  const friends = [
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
    {
      picture: 'devonhenry_',
      user: 'devonhenry_',
    },
  ]
  return (
    <FriendsContainer>
      <Container>
        <TextSection>
          <YourFriends>Your friends</YourFriends>
          <SearchBox>
            <Image
              src={'/search.svg'}
              width={32}
              height={32}
              alt={'profile-pic'}
            />
            <Search placeholder={'Search players...'} />
          </SearchBox>
        </TextSection>
        <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
          {friends?.length &&
            friends.map((friend, key) => (
              <UserColumn style={{ alignItems: 'center' }} key={key}>
                <Image
                  src={`/${friend.picture}.svg`}
                  width={173}
                  height={173}
                  alt={'teammate-image'}
                />
                <Username>{friend.user}</Username>
              </UserColumn>
            ))}
        </Grid>
      </Container>
    </FriendsContainer>
  )
}
