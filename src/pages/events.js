import Header from 'components/Header'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import UpcomingEvents from 'components/UpcomingEvents'
import { Container } from 'components/common'

export default function Events() {
  return (
    <div>
      <Header games={games} />
      <Container>
        <UpcomingEvents />
      </Container>
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}
