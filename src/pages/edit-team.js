import Header from 'components/Header'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import TeamEdit from 'components/TeamEdit'
import { getTournaments, getGames } from 'calls'

export default function Profile({ games }) {
  return (
    <div>
      <Header games={games} />
      <TeamEdit />
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const games = await getGames()
  return {
    props: { games }
  }
}
