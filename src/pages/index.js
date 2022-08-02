import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import HomeHeading from 'components/HomeHeading'
import WelcomeToPremiere from 'components/WelcomeToPremiere'
import FeaturedGames from 'components/FeaturedGames'
import FeaturedTournaments from 'components/FeaturedTournaments'
import SocialsSection from 'components/SocialsSection'
import BigPlayerOfTheWeek from 'components/BigPlayerOfTheWeek'
import { getGames, getTournaments, getPlayerOfTheWeek } from 'calls'
import { useUser } from 'hooks'

export default function Home({ games, tournaments }) {
  const { user, avatar } = useUser(3)

  return (
    <Column>
      <Header home={true} />
      <Container>
        <HomeHeading />
        <WelcomeToPremiere />
      </Container>
      <FeaturedGames games={games} />
      <FeaturedTournaments tournaments={tournaments} />
      <Container>
        <BigPlayerOfTheWeek user={user} avatar={avatar} />
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const games = await getGames()
  const tournaments = await getTournaments()
  return {
    props: { games, tournaments }
  }
}
