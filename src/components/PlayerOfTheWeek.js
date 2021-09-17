import Image from 'next/image'
import styled from 'styled-components'
import { LeaderboardTitle, Row, Column } from 'components/common'

const PlayerRow = styled(Row)``

const StatsRow = styled(Row)`
  margin-top: 50px; 
  margin-bottom: 90px; 
`

const PlayerName = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`

const MemberSince = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.colors.gray};
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
  color: ${props => props.theme.colors.gray};
  text-transform: uppercase;
`

const Stat = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.colors.black};
`

export default function PlayerOfTheWeek() {
  const player = {
    name: 'devonhenry_',
    since: 'UK Member since August 24, 2021',
    rank: '1st',
    weeklyWins: '98',
    premEarned: '2310994'
  }
  return (
    <div>
      <LeaderboardTitle>
        Player of the week
      </LeaderboardTitle>
      <PlayerRow>
        <div style={{ marginRight: 20 }}>
          <Image 
            src={'/devonhenry_.svg'}
            width={86}
            height={86}
            alt={'player-of-the-week'}
          />
        </div>
        <Column>
          <PlayerName>
            {player.name}
          </PlayerName>
          <MemberSince>
            {player.since}
          </MemberSince>
        </Column>
      </PlayerRow>
      <StatsRow>
        <StatColumn>
          <StatHeading>
            rank
          </StatHeading>
          <Stat>
            {player.rank}
          </Stat>
        </StatColumn>
        <StatColumn>
          <StatHeading>
            weekly wins
          </StatHeading>
          <Stat>
            {player.weeklyWins}
          </Stat>
        </StatColumn>
        <StatColumn>
          <StatHeading>
            $prem earned
          </StatHeading>
          <Stat>
            {player.premEarned}
          </Stat>
        </StatColumn>
      </StatsRow>
    </div>
  )
}
