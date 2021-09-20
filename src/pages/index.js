import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import HomeHeading from 'components/HomeHeading'
import WelcomeToPremiere from 'components/WelcomeToPremiere'

const featuredGames = []

const featuredTournaments = []

export default function Home() {
  return (
    <Column> 
      <Header home={true} />
      <Container>
        <HomeHeading />
        <WelcomeToPremiere />
      </Container>
      <Footer />
    </Column>
  )
}

