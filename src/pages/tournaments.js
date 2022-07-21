import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import SocialsSection from 'components/SocialsSection'
import { Grid, Cell } from 'styled-css-grid'
import { getTournaments } from 'calls'
import styled from 'styled-components'
import Menu from 'components/Filter'
import {
  InstantSearch,
  connectHits,
  connectMenu
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'

const SubheadingRow = styled(Row)`
  margin-bottom: 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const searchClient = algoliasearch(
  'J5N2XCPQQS',
  '1a824074d4ffa54fc925aaa3ad9a9527'
)
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
    <div>
      {width > 800 ? <Tournament tournament={hits[0]} /> : null}
      <Grid columns={'repeat(auto-fit, minmax(550px, 1fr))'} gap={'50px'}>
        {items}
      </Grid>
    </div>
  )
})

export default function Tournaments({ tournaments }) {
  return (
    <Column>
      <Header />
      <InstantSearch searchClient={searchClient} indexName="tournaments">
        <Container>
          <SubheadingRow style={{ justifyContent: 'space-between' }}>
            <Subheading>TOURNAMENTS</Subheading>
            <CustomMenuSelect attribute="game" option={'GAME'} />
          </SubheadingRow>
        </Container>
        {tournaments && (
          <Container style={{ marginBottom: 220 }}>
            <Hits />
          </Container>
        )}
      </InstantSearch>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  return {
    props: { tournaments }
  }
}
