import Header from 'components/Header'
import Footer from 'components/Footer'
import CreateTournament from 'components/CreateTournament'
import SocialsSection from 'components/SocialsSection'
import { Column } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function CreateTournamentPage({ games }) {
  return (
    <Column>
      <Header games={games} />
      <CreateTournament />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
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
