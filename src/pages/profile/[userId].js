import Header from 'components/Header'
import Teams from 'components/Teams'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import CurrentUserProfileTop from 'components/CurrentUserProfileTop'
import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  const { userId } = router.query
  return (
    <div>
      <Header />
      <CurrentUserProfileTop />
      <div style={{ marginBottom: 152, marginTop: 152 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}
