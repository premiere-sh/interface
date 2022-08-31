import Header from 'components/Header'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import CreateTeam from 'components/CreateTeam'
import { getTournaments, getGames } from 'calls'

export default function CreateTeamForm({ games, tournaments }) {
  return (
    <div>
      <Header games={games} tournaments={tournaments} />
      <CreateTeam />
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  const games = await getGames()
  return {
    props: { tournaments, games }
  }
}
