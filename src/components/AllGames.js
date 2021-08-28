import GameTile from 'components/GameTile'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'

const AllGamesContainer = styled.div`
`

export default function AllGames() { 
  // TODO the columns and sizes should be based on size of the display
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'45px'}>
      <Cell>
        <GameTile game={'csgo'} caption={'123 ongoing'} />
      </Cell>
      <Cell>
        <GameTile game={'dirt'} caption={'123 ongoing'} />
      </Cell>
      <Cell>
        <GameTile game={'minecraft'} caption={'123 ongoing'} />
      </Cell>
      <Cell>
        <GameTile game={'cod'} caption={'123 ongoing'} />
      </Cell>
      <Cell>
        <GameTile game={'rl'} caption={'123 ongoing'} />
      </Cell>
      <Cell>
        <GameTile game={'csgo'} caption={'123 ongoing'} />
      </Cell>
    </Grid>
  )
}

