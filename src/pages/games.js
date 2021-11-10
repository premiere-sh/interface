import { BASE_URL } from 'hooks'
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

export async function getGames() {
  const _games = []
  const res = await fetch(BASE_URL + 'tournaments/ongoing/')
  if (res.status == 200) {
    const ongoingTournaments = await res.json()
    let ongoing
    for (let game in ongoingTournaments) {
      _games.push({
        name: game,
        caption: `${ongoingTournaments[game]} ongoing`
      })
    }
  }
  return _games
}

export async function getStaticProps(context) {
  const games = await getGames()
  return {
    props: { games }
  }
}
