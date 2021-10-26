import Header from 'components/Header'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import UpcomingEvents from 'components/UpcomingEvents'

export default function profile() {
  return (
    <div>
      <Header />
      <UpcomingEvents />
      <div style={{ marginBottom: 152, marginTop: 352 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}
