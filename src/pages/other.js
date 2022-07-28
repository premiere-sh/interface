import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function Home({ games }) {
  return (
    <Column>
      <Header games={games} />
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const games = await getGames()
  return {
    props: { games }
  }
}
