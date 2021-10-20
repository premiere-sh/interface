import Image from 'next/image'
import styled from 'styled-components'
import { LeaderboardTitle, Row, Column, GradientText } from 'components/common'

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

export default function BigPlayerOfTheWeek({ player }) {
  return (
    <Container>
      <LeaderboardTitle>Player of the week</LeaderboardTitle>
      <PlayerRow>
        <div style={{ marginRight: 40 }}>
          <Image
            src={'/devonhenry_.svg'}
            width={220}
            height={220}
            alt={'player-of-the-week'}
          />
        </div>
        <Column>
          <PlayerName>{player.name}</PlayerName>
          <MemberSince>{player.since}</MemberSince>
          <StatsRow>
            <StatColumn>
              <StatHeading>rank</StatHeading>
              <Stat>{player.rank}</Stat>
            </StatColumn>
            <StatColumn>
              <StatHeading>weekly wins</StatHeading>
              <Stat>{player.weeklyWins}</Stat>
            </StatColumn>
            <StatColumn>
              <StatHeading>$prem earned</StatHeading>
              <Stat>{player.premEarned}</Stat>
            </StatColumn>
          </StatsRow>
        </Column>
      </PlayerRow>
    </Container>
  )
}
