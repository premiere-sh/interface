import Header from 'components/Header'
import Footer from 'components/Footer'
import ResetPassword from 'components/ResetPassword'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import { useRouter } from 'next/router'

export default function ResetPasswordPage() {
  const router = useRouter()
  const { resetData } = router.query

  return (
    <Column>
      <Header />
      <ResetPassword />
      <div> {`reset data${resetData}`}</div>
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
