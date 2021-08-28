import GameTile from 'components/GameTile'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'
import { 
  Subheading, 
  Row as _Row,
  GradientText as _GradientText 
} from 'components/common'
import Image from 'next/image'

const AllGamesContainer = styled.div`
  width: min(80%, 1400px);
  margin: auto;
`

const Row = styled(_Row)`
  justify-content: space-between;
`

const GradientText = styled(_GradientText)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  margin-bottom: 80px;
`

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
    <AllGamesContainer>
      <Row>
        <Subheading>
          ALL GAMES
        </Subheading>
        <_Row style={{ marginRight: 32 }}>
          <div style={{ marginBottom: 76, marginRight: 22 }}>
            <Image src={'/dropdown.svg'} width={16} height={16} />
          </div>
          <GradientText>
            FILTER BY PLATFORM
          </GradientText>
        </_Row>
      </Row>
      <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'45px'}>
        {
          entries.map(([game, caption], idx) => (
            <Cell center middle key={idx}>
              <GameTile game={game} caption={caption} />
            </Cell>
          ))
        }
      </Grid>
    </AllGamesContainer>
  )
}

