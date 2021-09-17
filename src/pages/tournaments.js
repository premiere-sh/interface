import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import { Grid, Cell } from 'styled-css-grid'

const tournament = {
  game: 'csgo',
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

export default function Tournaments() {
  const entries = [1, 2, 3, 4]
  return (
    <Column> 
      <Header />
      <Container>
        <Row style={{ justifyContent: 'space-between' }}>
          <Subheading>
            TOURNAMENTS
          </Subheading>
          <GradientDropdown text={'FILTER BY GAME'} />
        </Row>
      </Container>
      <Tournament tournament={tournament} />
      <Container style={{ marginBottom: 220 }}>
        <Grid columns={'repeat(auto-fit, minmax(550px, 1fr))'} gap={'50px'}>
          {
            entries.map((entry, idx) => (
              <Cell 
                style={{ display: 'flex', justifyContent: 'center' }}  
                key={idx}
              >
                <SmallTournament tournament={tournament} />
              </Cell>
            ))
          }
        </Grid>
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

