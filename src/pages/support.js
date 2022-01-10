import Header from "components/Header"
import Footer from "components/Footer"
import { Column, Container } from "components/common"
import SocialsSection from "components/SocialsSection"
import SupportSection from "components/SupportSection"

export default function Support() {
  return (
    <Column>
      <Header />
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
