import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function Home({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
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
