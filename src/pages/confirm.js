import Header from "components/Header"
import Footer from "components/Footer"
import SocialsSection from "components/SocialsSection"
import { Column } from "components/common"
import ConfirmEmail from "components/ConfirmEmail"

export default function SignupPage() {
  return (
    <Column>
      <Header />
      <ConfirmEmail />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
