import styled from 'styled-components'
import FeaturedTournament from 'components/FeaturedTournament'
import { ArrowButton } from 'components/Buttons'
import { HomeHeading } from 'components/common'

const HorizontalScrollView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`

const Container = styled.div`
  width: 90%;
  margin-left: 10%;
  @media screen and (min-width: 1726px) {
    width: min(80%, 1400px);
    margin: auto;
  }
  margin-bottom: 40px;
`

const ButtonContainer = styled.div`
  margin: auto;
  margin-bottom: 150px;
`

export default function FeaturedTournaments({ tournaments }) {
  return (
    <>
      <Container>
        <HomeHeading>
          Featured Tournaments
        </HomeHeading>
        <HorizontalScrollView>
          {
            tournaments && tournaments.map((tournament, key) => (
              <div 
                key={key} 
                style={{ width: 453, height: 290, marginRight: 50 }}
              >
                <FeaturedTournament tournament={tournament} />
              </div>
            ))
          }
        </HorizontalScrollView>
      </Container>
      <ButtonContainer>
        <ArrowButton text={'view all tournaments'} />
      </ButtonContainer>
    </>
  )
}

