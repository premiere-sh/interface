import Header from 'components/Header'
import Footer from 'components/Footer'
import Signup from 'components/Signup'
import SocialsSection from 'components/SocialsSection'
import { Column } from 'components/common'
import { getTournaments, getGames } from 'calls'

export default function SignupPage({ games, tournaments }) {
  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      <Signup />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
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
