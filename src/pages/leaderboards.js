import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import Leaderboard from 'components/Leaderboard'
import PlayerOfTheWeek from 'components/PlayerOfTheWeek'
import styled from 'styled-components'
import { getPlayerOfTheWeek } from 'calls'

const ContainerRow = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Leaderboards({ player }) {
  return (
    <Column>
      <Header />
      <Container>
        <Row style={{ justifyContent: 'space-between' }}>
          <Subheading>LEADERBOARDS</Subheading>
          <GradientDropdown text={'FILTER BY GAME'} />
        </Row>
      </Container>
      <ContainerRow>
        <Leaderboard />
        <PlayerOfTheWeek player={player} />
      </ContainerRow>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

export async function getStaticProps(context) {
  const player = await getPlayerOfTheWeek()
  return {
    props: { player }
  }
}
