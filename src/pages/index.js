import Header from "components/Header"
import Footer from "components/Footer"
import { Column, Container } from "components/common"
import HomeHeading from "components/HomeHeading"
import WelcomeToPremiere from "components/WelcomeToPremiere"
import FeaturedGames from "components/FeaturedGames"
import FeaturedTournaments from "components/FeaturedTournaments"
import SocialsSection from "components/SocialsSection"
import BigPlayerOfTheWeek from "components/BigPlayerOfTheWeek"
import { connect } from "react-redux"
import { getTournaments } from "store/tournaments/tournaments.selectors"
import { fetchTournaments } from "store/tournaments/tournaments.actions"
import { useEffect } from "react"

const mapState = state => ({
  tournaments: getTournaments(state)
})

const mapDispatch = dispatch => ({
  onLoad: () => dispatch(fetchTournaments())
})

function Home({ onLoad, tournaments }) {
  useEffect(() => onLoad && onLoad(), [onLoad])

  return (
    <Column>
      <Header home />
      <Container>
        <HomeHeading />
        <WelcomeToPremiere />
      </Container>
      <FeaturedGames />
      <FeaturedTournaments tournaments={tournaments} />
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

export default connect(mapState, mapDispatch)(Home)
