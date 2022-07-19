import styled from 'styled-components'
import { Column, Container, Row } from './common'
import Image from 'next/image'
import ProfileEvent from './ProfileEvent'
import { ArrowButton } from 'components/Buttons'

const HistoryContainer = styled(Container)``

const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 55px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

const EventsColumn = styled(Column)``

const EventContainer = styled(Column)``

const Spacer = styled.div`
  @media screen and (max-width: 1550px) {
    height: 30px;
  }
`

export default function EventHistory({ friends }) {
  
    const events=[{
        game: 'cod',
        region: 'USA + Europe',
        title: '5v5 | Search & Destroy | FACEIT',
        date: '24/08/2021',
        time: '9:15pm',
        prize: '$1,250',
        prem: '33,430',
        teamPos: '#1/139',
        individualPos: '#1/1,112',
        users: [{profile: 'devonhenry_'},{profile: 'devonhenry_'},{profile: 'devonhenry_'},{profile: 'devonhenry_'}]
    },
    {
        game: 'rl',
        region: 'USA + Europe',
        title: '5v5 | Search & Destroy | FACEIT',
        date: '24/08/2021',
        time: '9:15pm',
        prize: '$900',
        prem: '22,126',
        teamPos: '#4/230',
        individualPos: '#6/1,112',
        users: [{profile: 'devonhenry_'},{profile: 'devonhenry_'},{profile: 'devonhenry_'},{profile: 'devonhenry_'}]
    }
]
    

  return (
    <HistoryContainer>
      <Title>Recent Events</Title>
      <EventsColumn>
          {events.map((event, key) => (
            <EventContainer key={key}>
              <ProfileEvent event={event} />
              <Spacer />
            </EventContainer>
          ))}
      </EventsColumn>
    </HistoryContainer>
  )
}
