import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import SupportSection from 'components/SupportSection'
import { getTournaments, getGames } from 'calls'

export default function Support({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      <Container>
        <SupportSection />
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  const games = await getGames()
  return {
    props: { tournaments, games }
  }
}
