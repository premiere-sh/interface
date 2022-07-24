import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import AllLeaderboards from 'components/AllLeaderboards'

export default function Leaderboards() {
  return (
    <Column>
      <Header />
      <AllLeaderboards />
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
