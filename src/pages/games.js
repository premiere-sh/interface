import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'
import { getGames } from 'calls'

export default function Games() {
  return (
    <Column>
      <Header />
      <div style={{ marginBottom: 150 }}>
        <AllGames />
      </div>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
