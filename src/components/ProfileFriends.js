import styled from 'styled-components'
import { Column, Container, Row } from './common'
import Image from 'next/image'
import { Grid } from 'styled-css-grid'

const Search = styled.input`
  width: 250px;
  border: 0;
  background: transparent;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
`

const SearchBox = styled(Row)`
  justify-content: space-between;
  width: 317.36px;
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
    <div>
      <Container>
        <Column>
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
        </Column>
        <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
          {friends?.length &&
            friends.map((friend) => (
              <Column style={{ alignItems: 'center' }}>
                <Image
                  src={`/${friend.picture}.svg`}
                  width={173}
                  height={173}
                  alt={'teammate-image'}
                />
                <Username style={{ marginTop: 26.73 }}> 
                  {`${friend.user}`}
                </Username>
              </Column>
            ))
          }
        </Grid>
      </Container>
    </div>
  )
}

