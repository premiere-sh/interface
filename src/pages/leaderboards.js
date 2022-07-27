import Header from 'components/Header'
import Footer from 'components/Footer'
import { Subheading, Row, Column, Container } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import GradientDropdown from 'components/GradientDropdown'
import Leaderboard from 'components/Leaderboard'
import PlayerOfTheWeek from 'components/PlayerOfTheWeek'
import styled from 'styled-components'
import { getPlayerOfTheWeek } from 'calls'
import { useUser } from 'hooks'

const SubheadingRow = styled(Row)`
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerRow = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export default function Leaderboards() {
  const { user, avatar } = useUser(3)
  return (
    <Column>
      <Header games={games} />
      <Container>
        <SubheadingRow>
          <Subheading>LEADERBOARDS</Subheading>
          <GradientDropdown text={'FILTER BY GAME'} />
        </SubheadingRow>
      </Container>
      <ContainerRow>
        <Leaderboard />
        <PlayerOfTheWeek user={user} avatar={avatar} />
      </ContainerRow>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
