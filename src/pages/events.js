import Header from 'components/Header'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import UpcomingEvents from 'components/UpcomingEvents'
import { Container } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function Events({ games, tournaments }) {
  return (
    <div>
      <Header games={games} tournaments={tournaments} />
      <Container>
        <UpcomingEvents />
      </Container>
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  const games = await getGames()
  return {
    props: { tournaments, games }
  }
}
