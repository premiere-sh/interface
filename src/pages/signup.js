import Header from 'components/Header'
import Footer from 'components/Footer'
import Signup from 'components/Signup'
import SocialsSection from 'components/SocialsSection'
import { Column } from 'components/common'

export default function SignupPage() {
  return (
    <Column>
      <Header games={games} />
      <Signup />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
