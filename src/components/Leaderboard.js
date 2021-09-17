import Image from 'next/image'
import styled from 'styled-components'
import { LeaderboardTitle } from 'components/common'

const Table = styled.table`
  margin-bottom: 100px;
  width: 665px;
`

const HeadRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.ruby};
  height: 40px;
`

const HeadRowText = styled.th`
  text-transform: uppercase;
`

const HeadRowRank = styled(HeadRowText)`
  width: 80px;
  font-weight: 700;
`

const HeadRowUser = styled(HeadRowText)`
  width: 450px;
`

const HeadRowPoints = styled(HeadRowText)``

const TableRow = styled.tr`
  border-bottom: 1px solid #EBEBEB;
  height: 60px;
`

const Rank = styled.th`
  width: 80px;
  font-weight: 700;
`

const User = styled.th`
  width: 450px;
`

const Points = styled.th``

export default function Leaderboard() {
  const entries = [
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
    {
      user: 'devonhenry_',
      points: '321,142,104'
    },
  ]

  return (
    <div>
      <LeaderboardTitle>
        GB Rank Leaderboard
      </LeaderboardTitle>
      <Table>
        <HeadRow>
          <HeadRowRank>
              rank
          </HeadRowRank>
          <HeadRowUser>
            user
          </HeadRowUser>
          <HeadRowPoints>
            points
          </HeadRowPoints>
        </HeadRow>
        {
          entries.map((entry, idx) => (
            <TableRow key={idx}>
              <Rank>
                #{idx + 1}
              </Rank>
              <User>
                <div style={{ marginRight: 12, marginTop: 5 }}>
                  <Image 
                    src={'/' + entry.user + '.svg'}
                    width={32}
                    height={32}
                    alt={'user'}
                  />
                </div>
                {entry.user}
              </User>
              <Points>
                {entry.points}
              </Points>
            </TableRow>
          ))
        }
      </Table>
    </div>
  )
}
