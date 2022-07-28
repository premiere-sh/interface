import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import SupportSection from 'components/SupportSection'
import { getTournaments, getGames } from 'calls'

export default function Support({ games }) {
  return (
    <Column>
      <Header games={games} />
      <Container>
        <SupportSection />
      </Container>
      <div style={{ marginBottom: 150 }}>
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
