import Image from 'next/image'
import styled from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'
import GameTile from 'components/GameTile'
import { Subheading, Row, Container } from 'components/common'
import GradientDropdown from 'components/GradientDropdown'

export default function AllGames() { 
  const games = {
    csgo: '123 ongoing',
    dirt: '12 ongoing',
    minecraft: '67 ongoing',
    cod: '31 ongoing',
    rl: '83 ongoing',
  }
  const entries = [
    ...Object.entries(games),
    ...Object.entries(games),
    ...Object.entries(games),
    ...Object.entries(games).slice(0, 3)
  ]
  return (
    <Container>
      <Row style={{ justifyContent: 'space-between' }}>
        <Subheading>
          ALL GAMES
        </Subheading>
        <GradientDropdown text={'FILTER BY PLATFORM'} />
      </Row>
      <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'45px'}>
        {
          entries.map(([game, caption], idx) => (
            <Cell 
              style={{ display: 'flex', justifyContent: 'center' }}  
              key={idx}
            >
              <GameTile game={game} caption={caption} />
            </Cell>
          ))
        }
      </Grid>
    </Container>
  )
}

