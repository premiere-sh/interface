import Header from 'components/Header'
import Footer from 'components/Footer'
import ResetPassword from 'components/ResetPassword'
import { Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import { useRouter } from 'next/router'

export default function ResetPasswordPage() {
  const router = useRouter()
  const { mode, oobCode } = router.query

  return (
    <Column>
      <Header />
      <ResetPassword oobCode={oobCode} />
      <div style={{ marginTop: 120, marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
