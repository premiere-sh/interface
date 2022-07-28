import Header from 'components/Header'
import Footer from 'components/Footer'
import Login from 'components/Login'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import { getTournaments, getGames } from 'calls'

export default function LoginPage({ games }) {
  return (
    <Column>
      <Header games={games} />
      <Login />
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
