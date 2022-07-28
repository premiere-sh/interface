import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'
import { getGames, getTournaments } from 'calls'

export default function Games({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      {games.length && (
        <div style={{ marginBottom: 150 }}>
          <AllGames games={games} />
        </div>
      )}
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
