import Header from "components/Header"
import Footer from "components/Footer"
import { Column, Container } from "components/common"
import HomeHeading from "components/HomeHeading"
import WelcomeToPremiere from "components/WelcomeToPremiere"
import FeaturedGames from "components/FeaturedGames"
import FeaturedTournaments from "components/FeaturedTournaments"
import SocialsSection from "components/SocialsSection"
import BigPlayerOfTheWeek from "components/BigPlayerOfTheWeek"

export default function Home() {
  return (
    <Column>
      <Header home={true} />
      <Container>
        <HomeHeading />
        <WelcomeToPremiere />
      </Container>
      <FeaturedGames />
      <FeaturedTournaments />
      <Container>
        <BigPlayerOfTheWeek />
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
