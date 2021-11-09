import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'

export default function Games({ games }) {
  return (
    <Column>
      <Header />
      {games && (
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

export function getGames() {
  const dirt = {
    name: 'dirt',
    caption: '123 ongoing'
  }
  const minecraft = {
    name: 'minecraft',
    caption: '123 ongoing'
  }
  const cod = {
    name: 'cod',
    caption: '123 ongoing'
  }
  const rl = {
    name: 'rl',
    caption: '123 ongoing'
  }
  const _games = [dirt, minecraft, cod, rl]
  const games = [..._games, ..._games, ..._games, ..._games.slice(0, 3)]
  return games
}

export async function getStaticProps(context) {
  const games = getGames()
  return {
    props: { games }
  }
}
