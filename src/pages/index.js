import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import HomeHeading from 'components/HomeHeading'
import WelcomeToPremiere from 'components/WelcomeToPremiere'
import FeaturedGames from 'components/FeaturedGames'
import FeaturedTournaments from 'components/FeaturedTournaments'
import SocialsSection from 'components/SocialsSection'
import BigPlayerOfTheWeek from 'components/BigPlayerOfTheWeek'
import { getTournaments } from 'pages/tournaments'
import { getGames } from 'pages/games'

export default function Home({ games, tournaments, player }) {
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
        <BigPlayerOfTheWeek player={player} />
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const games = getGames()
  const tournaments = getTournaments()
  const player = {
    name: 'devonhenry_',
    since: 'UK Member since August 24, 2021',
    rank: '1st',
    weeklyWins: '98',
    premEarned: '2310994'
  }
  return {
    props: { games, tournaments, player }
  }
}
