import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import { Grid, Cell } from 'styled-css-grid'

export default function Tournaments({ tournaments }) {
  const [width, setWidth] = useState(null)
  useEffect(function () {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [])
  return (
    <Column>
      <Header />
      <Container>
        <Row style={{ justifyContent: 'space-between' }}>
          <Subheading>TOURNAMENTS</Subheading>
          <GradientDropdown text={'FILTER BY GAME'} />
        </Row>
      </Container>
      {tournaments && (
        <>
          <Container style={{ marginBottom: 220 }}>
            {width > 800 && <Tournament tournament={tournaments[0]} />}
            <Grid columns={'repeat(auto-fit, minmax(550px, 1fr))'} gap={'50px'}>
              {tournaments.map((tournament, idx) => (
                <Cell
                  style={{ display: 'flex', justifyContent: 'center' }}
                  key={idx}
                >
                  <SmallTournament tournament={tournament} />
                </Cell>
              ))}
            </Grid>
          </Container>
        </>
      )}
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export function getTournaments() {
  const tournament = {
    game: 'cod',
    region: 'USA + Europe',
    title: '5v5 | Search & Destroy | FACEIT',
    summary: `This is where a summary of the featured tournament will go. This is
      where a summary of the featured tournament will go. This is where a summary
      of the featured tournament will go. This is where a summary of the featured
      tournament will go. This is where a summary of the featured tournament will
      go.`,
    date: '24/08/2021',
    time: '9:15pm',
    prize: '$1,250'
  }
  const tournaments = [tournament, tournament, tournament, tournament]
  return tournaments
}

export async function getStaticProps(context) {
  const tournaments = getTournaments()
  return {
    props: { tournaments }
  }
}
