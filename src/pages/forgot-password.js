import Header from 'components/Header'
import Footer from 'components/Footer'
import ForgotPassword from 'components/ForgotPassword'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'

export default function ForgotPasswordPage() {
  return (
    <Column>
      <Header />
      <ForgotPassword />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
