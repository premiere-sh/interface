import styled from 'styled-components'
import GameTile from 'components/GameTile'
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

export default function FeaturedGames({ games }) {
  return (
    <>
      <Container>
        <HomeHeading>
          Featured games
        </HomeHeading>
        <HorizontalScrollView>
          {
            games && games.map((game, key) => (
              <div style={{ width: 210, height: 300, marginBottom: 20 }}>
                <GameTile game={game.name} caption={game.caption} />
              </div>
            ))
          }
        </HorizontalScrollView>
      </Container>
      <ButtonContainer>
        <ArrowButton text={'view all games'} />
      </ButtonContainer>
    </>
  )
}

