import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import Leaderboard from 'components/Leaderboard'

export default function Leaderboards() {
  return (
    <Column> 
      <Header />
      <Container>
        <Row style={{ justifyContent: 'space-between' }}>
          <Subheading>
            LEADERBOARDS
          </Subheading>
          <GradientDropdown text={'FILTER BY GAME'} />
        </Row>
      <Leaderboard />
      </Container>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

