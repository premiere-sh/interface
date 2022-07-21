import styled from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'
import GameTile from 'components/GameTile'
import { Subheading, Row, Container, Column } from 'components/common'
import {
  InstantSearch,
  connectHits,
  connectMenu
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import Menu from './Filter'

const GameRow = styled(Row)`
  margin-bottom: 80px;
`

const searchClient = algoliasearch(
  'J5N2XCPQQS',
  'cd04218c2b5aa38fd04e04f1e56b625a'
)

const Hits = connectHits(({ hits }) => {
  const items = hits.map((hit, idx) => (
    <Cell style={{ display: 'flex', justifyContent: 'center' }} key={idx}>
      <GameTile game={hit.game} caption={hit.caption} />
    </Cell>
  ))
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'45px'}>
      {items}
    </Grid>
  )
})

const CustomMenuSelect = connectMenu(Menu)

export default function AllGames({ games }) {
  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName="games">
        <GameRow
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Subheading>ALL GAMES</Subheading>
          <CustomMenuSelect attribute="platform" option={'PLATFORM'} />
        </GameRow>
        <Hits />
      </InstantSearch>
    </Container>
  )
}
