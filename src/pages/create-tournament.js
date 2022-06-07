import Header from "components/Header"
import Footer from "components/Footer"
import CreateTournament from "components/CreateTournamentForm"
import SocialsSection from "components/SocialsSection"
import { Column } from "components/common"

export default function CreateTournamentPage() {
  return (
    <Column>
      <Header />
      <CreateTournament />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
