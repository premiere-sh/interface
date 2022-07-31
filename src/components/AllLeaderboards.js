import {
  Subheading,
  Row,
  Column,
  Container,
  LeaderboardTitle
} from 'components/common'
import PlayerOfTheWeek from 'components/PlayerOfTheWeek'
import styled from 'styled-components'
import { useUser } from 'hooks'
import {
  InstantSearch,
  connectHits,
  connectSortBy
} from 'react-instantsearch-dom'
import Menu from 'components/Filter'
import Image from 'next/image'
import { searchClient } from 'algolia/index'

const SubheadingRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerRow = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Table = styled.table`
  margin-bottom: 100px;
  width: 665px;
`

const HeadRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.ruby};
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
  border-bottom: 1px solid #ebebeb;
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

const TableBody = styled.tbody``

const TableHead = styled.thead``

const CustomSortBy = connectSortBy(Menu)

const Hits = connectHits(({ hits }) => {
  const items = hits.map((hit, idx) => (
    <TableRow key={idx}>
      <Rank>#{hit.rank}</Rank>
      <User>
        <div style={{ marginRight: 12, marginTop: 5 }}>
          <Image src={'/devonhenry_.svg'} width={32} height={32} alt={'user'} />
        </div>
        <div>{hit.usernanme}</div>
      </User>
      <Points>{hit.prem}</Points>
    </TableRow>
  ))
  return <Column>{items}</Column>
})

export default function Leaderboards() {
  // const { user, avatar } = useUser(3)
  const user = {}
  const avatar = {}
  return (
    <InstantSearch searchClient={searchClient} indexName="users">
      <Container>
        <SubheadingRow>
          <Subheading>LEADERBOARDS</Subheading>
          <CustomSortBy
            option={'leaderboard'}
            defaultRefinement={'byRank'}
            items={[
              { label: 'gb rank', value: 'byRank' },
              { label: 'wins', value: 'byWins' },
              { label: '$prem earned', value: 'byPrem' }
            ]}
          />
        </SubheadingRow>
      </Container>
      <ContainerRow>
        <Column>
          <LeaderboardTitle>GB Rank Leaderboard</LeaderboardTitle>
          <Table>
            <TableHead>
              <HeadRow>
                <HeadRowRank>rank</HeadRowRank>
                <HeadRowUser>user</HeadRowUser>
                <HeadRowPoints>points</HeadRowPoints>
              </HeadRow>
            </TableHead>
            <TableBody>
              <Hits />
            </TableBody>
          </Table>
        </Column>
        <PlayerOfTheWeek user={user} avatar={avatar} />
      </ContainerRow>
    </InstantSearch>
  )
}
