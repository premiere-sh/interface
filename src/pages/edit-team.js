import Header from "components/Header"
import Footer from "components/Footer"
import SocialsSection from "components/SocialsSection"
import TeamEdit from "components/TeamEdit"

export default function Profile() {
  return (
    <div>
      <Header />
      <TeamEdit />
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}
