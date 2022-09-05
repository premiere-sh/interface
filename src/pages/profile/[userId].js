import Header from 'components/Header'
import Teams from 'components/Teams'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import ProfileTop from 'components/ProfileTop'
import { useRouter } from 'next/router'
import { getGames, getTournaments } from 'calls'

export default function Profile({ games, tournaments }) {
  const router = useRouter()
  const { userId } = router.query
  return (
    <div>
      <Header games={games} tournaments={tournaments} />
      <ProfileTop />
      <div style={{ marginBottom: 152, marginTop: 152 }}>
        <SocialsSection />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const games = await getGames()
  const tournaments = await getTournaments()
  return {
    props: { games, tournaments }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { userId: '1' } }],
    fallback: false
  }
}
