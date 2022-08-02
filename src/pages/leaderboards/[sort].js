import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import AllLeaderboards from 'components/AllLeaderboards'
import { getGames, getTournaments } from 'calls'

export default function Leaderboards({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      <AllLeaderboards />
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
