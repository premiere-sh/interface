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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/leaderboards')
  const leaderboards = await res.json()

  const paths = leaderboards.map((leaderboard) => ({
    params: { id: leaderboard.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  const games = await getGames()
  return {
    props: { tournaments, games }
  }
}
