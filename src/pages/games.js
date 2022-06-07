import Header from "components/Header"
import Footer from "components/Footer"
import { Column } from "components/common"
import AllGames from "components/AllGames"
import SocialsSection from "components/SocialsSection"

export default function Games({ games }) {
  return (
    <Column>
      <Header />
      <div style={{ marginBottom: 150 }}>
        <AllGames games={games} />
      </div>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
