import Header from 'components/Header'
import Teams from 'components/Teams'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import CurrentUserProfileTop from 'components/CurrentUserProfileTop'
import { getTournaments, getGames } from 'calls'

export default function Profile({ games, tournaments }) {
  return (
    <div>
      <Header games={games} tournaments={tournaments} />
      <CurrentUserProfileTop />
      <div style={{ marginBottom: 152, marginTop: 152 }}>
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
