import styled from 'styled-components'
import Tournament from 'components/Tournament'
import { Column, Container } from './common'

const TournametsColumn = styled(Column)``

export default function EventHistory() {

  const tournament = {
    game: 'csgo',
    region: 'USA + Europe',
    title: '5v5 | Search & Destroy | FACEIT',
    date: '24/08/2021',
    time: '9:15pm',
    prize: '$1,250',
  }

  const tournaments = [tournament, tournament] 

  return (
    <Container>
      <TournametsColumn>
        {tournaments.map((tournament, key) => (
          <Tournament tournament={tournament} key={key}/>
        ))}
      </TournametsColumn>
    </Container>
  )
}
