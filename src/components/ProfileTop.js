import { useContext } from 'react'
import styled from 'styled-components'
import { Column, Container, Row } from 'components/common'
import Image from 'next/image'
import { useState } from 'react'
import Friends from 'components/Friends'
import Teams from 'components/Teams'
import Home from 'components/ProfileHome'
import History from 'components/History'
import Link from 'next/link'
import AuthenticationContext from 'contexts/authentication'
import { useFriends, useStats } from 'hooks'

const ProfilePanel = styled(Row)``

const SpaceBetween = styled(Row)`
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-style: italic;
  font-weight: 700;
`

const Wrapper = styled(Container)`
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

const ArrowColumn = styled(Column)``

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ButtonWrapper = styled(Row)`
  justify-content: space-between;
  margin-top: 79px;
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

export default function ProfileTop() {
  const [selected, setSelected] = useState('Home')
  const { currentUser } = useContext(AuthenticationContext)
  const friends = useFriends(currentUser.id)
  const stats = useStats(currentUser.id)
  return (
    <Column>
      <Wrapper>
        <SpaceBetween>
          <ProfilePanel>
            <Image
              src={'/devonhenry_.svg'}
              width={219}
              height={219}
              alt={'Profile-image'}
            />
            <ProfileInfo>
              <Name>{currentUser?.username}</Name>
              <Team>{currentUser?.team}</Team>
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
          <ArrowColumn>
            <div style={{ marginBottom: 113 }}>
              <Image
                src={'/arrow_right.svg'}
                width={32}
                height={32}
                alt={'Profile-image'}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Image
                src={'/arrow_right.svg'}
                width={32}
                height={32}
                alt={'Profile-image'}
              />
            </div>
          </ArrowColumn>
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
            teams
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
      {selected == 'Teams' && <Teams />}
      {selected == 'Friends' && <Friends />}
      {selected == 'Home' && <Home />}
    </Column>
  )
}
