import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import { Grid, Cell } from 'styled-css-grid'
import { BASE_URL } from 'hooks'

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

export async function getTournaments() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  function makeTimeRight(tournament) {
    const unix = tournament.time
    let date = new Date(unix * 1000)
    let year = date.getFullYear()
    let day = date.getDate()
    let month = months[date.getMonth()]
    let hours = date.getHours()
    let minutes = date.getMinutes()
    tournament.time = `${hours}:${minutes}`
    tournament.date = `${day} ${month} ${year}`
    return tournament
  }
  const res = await fetch(BASE_URL + 'tournaments/')
  if (res.status == 200) {
    let tournaments = await res.json()
    tournaments = tournaments.map(tournament => makeTimeRight(tournament))
    return tournaments
  }
}


export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  return {
    props: { tournaments }
  }
}
