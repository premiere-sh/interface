import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import HomeHeading from 'components/HomeHeading'
import WelcomeToPremiere from 'components/WelcomeToPremiere'
import FeaturedGames from 'components/FeaturedGames'
import FeaturedTournaments from 'components/FeaturedTournaments'
import { getTournaments } from 'pages/tournaments'
import { getGames } from 'pages/games'

export default function Home({ games, tornaments }) {
  return (
    <Column> 
      <Header home={true} />
      <Container>
        <HomeHeading />
        <WelcomeToPremiere />
      </Container>
      <FeaturedGames games={games} />
      <FeaturedTournaments tournaments={tournaments} />
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const games = getGames()
  const tournaments = getTournaments()
  return {
    props: { games, tournaments }
  }
}

