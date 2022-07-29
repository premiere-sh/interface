import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import AllLeaderboards from 'components/AllLeaderboards'
import { getGames, getTournaments } from 'calls'
import { useRouter } from 'next/router'

export default function Leaderboards({ games, tournaments }) {
  const router = useRouter()
  const { sort } = router.query
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      <AllLeaderboards sort={sort} />
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
