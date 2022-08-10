import { useEffect, useState } from 'react'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import { Grid, Cell } from 'styled-css-grid'
import { getTournaments } from 'calls'
import styled from 'styled-components'
import Menu from 'components/Filter'
import {
  InstantSearch,
  connectHits,
  connectMenu
} from 'react-instantsearch-dom'
import { searchClient } from 'algolia/index'

const SubheadingRow = styled(Row)`
  margin-bottom: 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const CustomMenuSelect = connectMenu(Menu)

const Hits = connectHits(({ hits }) => {
  const [width, setWidth] = useState(null)

  useEffect(function () {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [])

  const items = hits.map((hit, idx) => (
    <Cell style={{ display: 'flex', justifyContent: 'center' }} key={idx}>
      <SmallTournament tournament={hit} />
    </Cell>
  ))
  return (
    <Column>
      {width > 800 && <Tournament tournament={hits[0]} />}
      <Grid columns={'repeat(auto-fit, minmax(550px, 1fr))'} gap={'50px'}>
        {items}
      </Grid>
    </Column>
  )
})

export default function AllTournaments({ tournaments }) {
  // TO ADD TOURNAMNETS TO ALGOLIA:
  // const index = searchClient.initIndex('tournaments')
  // index
  //   .saveObjects(tournaments, {
  //     autoGenerateObjectIDIfNotExist: true
  //   })
  //   .then(objectIDs)

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="tournaments">
        <Container>
          <SubheadingRow style={{ justifyContent: 'space-between' }}>
            <Subheading>TOURNAMENTS</Subheading>
            <CustomMenuSelect attribute="game" option={'game'} />
          </SubheadingRow>
        </Container>
        <Container style={{ marginBottom: 220 }}>
          <Hits />
        </Container>
      </InstantSearch>
    </div>
  )
}
