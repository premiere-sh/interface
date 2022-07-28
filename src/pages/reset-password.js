import Header from 'components/Header'
import Footer from 'components/Footer'
import ResetPassword from 'components/ResetPassword'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'

export default function LoginPage() {
  return (
    <Column>
      <Header />
      <ResetPassword />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
