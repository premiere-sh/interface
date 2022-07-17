import { useContext } from 'react'
import styled from 'styled-components'
import { Column, Container, Row } from 'components/common'
import { useState } from 'react'
import Friends from 'components/Friends'
import Home from 'components/ProfileHome'
import Link from 'next/link'
import AuthenticationContext from 'contexts/authentication'
import { useFriends, useStats } from 'hooks'
import { useFriendInvites } from 'hooks'
import Teams from 'components/Teams'

const ProfilePanel = styled(Row)``

const SpaceBetween = styled(Row)``
// display: flex;
// flex: 1;
// justify-content: space-between;

const Name = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-style: italic;
  font-weight: 700;
`

const Wrapper = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 79px;
`

const Team = styled.div`
  font-family: Inter;
  font-style: Normal;
  font-weight: 600;
  font-size: 18px;
  fine-height: 27px;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 40px;
`

const ProfileInfo = styled(Column)`
  margin-left: 52px;
`

const ProfileStats = styled(Row)``

const GreyTextColumn = styled(Column)`
  margin-right: 42px;
`

const GreyText = styled.div`
  font-style: Regular;
  font-size: 16px;
  fine-height: 24px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ArrowColumn = styled(Column)`
  justify-content: center;
  margin-right: 50px;
`

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ButtonWrapper = styled(Row)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 79px;
  width: 100%;
`

const Button = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1em;
  border-bottom: 0px solid;
  border-image-source: linear-gradient(
    266.89deg,
    #982649 -18.13%,
    #f71735 120.14%
  );
  border-image-slice: 1;
  text-transform: uppercase;
  padding: 40px 23px 23px 23px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`

const ButtonHome = styled(Button)`
  padding-left: 0px;
  padding-right: 23px;
`

const ButtonEvents = styled(Button)`
  padding-left: 23px;
  padding-right: 0px;
`

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
`

export default function ProfileTop() {
  const [selected, setSelected] = useState('Home')
  const { user, userAvatar, token } = useContext(AuthenticationContext)
  const friends = useFriends(user)
  const stats = useStats(user)
  const { invites, avatars } = useFriendInvites(user?.id, token)

  return (
    <Column>
      <Wrapper>
        <SpaceBetween>
          <ProfilePanel>
            {userAvatar && user && <Avatar src={userAvatar} />}
            <ProfileInfo>
              <Name>{user?.username || user?.email}</Name>
              <ProfileStats>
                <GreyTextColumn>
                  <GreyText>rank</GreyText>
                  <Numbers>{stats?.rank ?? '-'}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>weekly wins</GreyText>
                  <Numbers>{stats?.weeklyWins ?? 0}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>Friends</GreyText>
                  <Numbers>{friends.length}</Numbers>
                </GreyTextColumn>
              </ProfileStats>
            </ProfileInfo>
          </ProfilePanel>
        </SpaceBetween>
        <ButtonWrapper>
          <ButtonHome
            style={{ borderBottom: `${selected == 'Home' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Home')}
          >
            home
          </ButtonHome>
          <Button
            style={{ borderBottom: `${selected == 'History' ? 1 : 0}px solid` }}
            onClick={() => setSelected('History')}
          >
            event history
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Teams' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Teams')}
          >
            Teams
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Friends' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Friends')}
          >
            friends
          </Button>
          <Link href={'/events'}>
            <a style={{ color: 'inherit' }}>
              <ButtonEvents>upcoming events</ButtonEvents>
            </a>
          </Link>
        </ButtonWrapper>
      </Wrapper>
      {selected == 'Friends' && (
        <Friends friends={friends} invites={invites} avatars={avatars} />
      )}
      {selected == 'Teams' && <Teams />}
      {selected == 'Home' && <Home />}
    </Column>
  )
}
