import Header from 'components/Header'
import Footer from 'components/Footer'
import PageNotFound from 'components/PageNotFound'
import { Column } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function Custom404({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      <PageNotFound />
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
