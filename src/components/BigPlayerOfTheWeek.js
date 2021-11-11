import Image from 'next/image'
import styled from 'styled-components'
import { LeaderboardTitle, Row, Column, GradientText } from 'components/common'
import { useRouter } from 'next/router'

const Container = styled.div`
  margin-bottom: 150px;
`

const PlayerRow = styled(Row)``

const StatsRow = styled(Row)`
  margin-top: 30px;
`

const PlayerName = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 8px;
`

const MemberSince = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
`

const StatColumn = styled(Column)`
  margin-right: 29px;
`

const StatHeading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
`

const Stat = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

const Avatar = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 220px;
`

export default function BigPlayerOfTheWeek({ user, avatar }) {
  const router = useRouter()
  return (
    <Container>
      <LeaderboardTitle>Player of the week</LeaderboardTitle>
      <PlayerRow>
        <div 
          style={{ marginRight: 60, cursor: 'pointer' }} 
          onClick={
            user?.id 
              ? () => router.push(`/profile/${user.id}`) 
              : () => null
          }
        >
          {
            avatar &&
            <Avatar src={avatar} />
          }
        </div>
        <Column>
          <PlayerName>{user?.username}</PlayerName>
          <MemberSince>{user?.since}</MemberSince>
          <StatsRow>
            <StatColumn>
              <StatHeading>rank</StatHeading>
              <Stat>{user?.rank ?? '-'}</Stat>
            </StatColumn>
            <StatColumn>
              <StatHeading>weekly wins</StatHeading>
              <Stat>{user?.weeklyWins ?? '-'}</Stat>
            </StatColumn>
            <StatColumn>
              <StatHeading>$prem earned</StatHeading>
              <Stat>{user?.premEarned ?? '-'}</Stat>
            </StatColumn>
          </StatsRow>
        </Column>
      </PlayerRow>
    </Container>
  )
}
