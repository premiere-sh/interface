import styled from 'styled-components'
import { Column, Row, Container, Circle } from 'components/common'
import { Heading, Subtext } from  'components/Forms'
import Image from 'next/image'
import { ArrowButton } from 'components/Buttons'
import SmallTournament from 'components/SmallTournament'
import ReactPlayer from 'react-player'

const EventsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 1233px;
`

const EventsHeading = styled(Heading)`
  text-align: left;
  margin-bottom: 27px;
`

const EventsSubtext = styled(Subtext)`
  text-align: left;
  line-height: 64px;
  margin-bottom: 50px;
`

const WatchedTournament = styled(Row)`
  padding-top: 35px;
  padding-bottom: 35px;
  height: 260px;
  width: 1233px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

const TournamentInfo = styled(Column)`
  width: 1000px;
`

const Region = styled.div`
  font-weight: 600;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
  margin-bottom: 24px;
`

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  margin-bottom: 22px;  
`

const Summary = styled.div`
  width: 832px;
  margin-bottom: 20px;
`

const ArrowButtonContainer = styled.div`
  display: inline-block;
  padding-top: 10px;
`

const CirclesRow = styled(Row)`
  margin-right: 29px;`

const ShadowCircle = styled(Circle)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 12px;
`

const Buttons = styled(Row)`
  justify-content: space-between;
`

const TournamentsRow = styled(Row)`
  margin-left: 0px;
  justify-content: space-between;
  margin-top: 155px;
`

const PlayerWrapper = styled.div``

export default function _UpcomingEvents() {

  const tournament = {
    game: 'csgo',
    region: 'USA + Europe',
    title: '5v5 | Search & Destroy | FACEIT',
    summary: `This is where a summary of the featured tournament will go. This is
      where a summary of the featured tournament will go. This is where a summary
      of the featured tournament will go. This is where a summary of the featured
      tournament will go. This is where a summary of the featured tournament will
      go.`,
    date: '24/08/2021',
    time: '9:15pm',
    prize: '$1,250',
  }

  const tournaments = [tournament, tournament]

  return (
    <EventsContainer>
      <EventsHeading>watch premiere events live</EventsHeading>
      <EventsSubtext>
        If there is a premiere event currently underway,
        you&apos;ll be able to watch it here!
      </EventsSubtext>
      <PlayerWrapper>
        <ReactPlayer 
          url={'https://www.twitch.tv/izakooo'}
          playing={true} 
          width={1233} 
          height={788} 
          style={{ 
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            overflow: 'hidden' 
          }}
        />
      </PlayerWrapper>
      <WatchedTournament>
        <div style={{ marginLeft: 40, marginRight: 38}}>
          <Image
            src={'/csgo.svg'}
            width={167}
            height={260}
            alt={'watch tournament'}
          />
        </div>
        <TournamentInfo>
          <Region>{tournament.region}</Region>
          <Title>{tournament.title}</Title>
          <Summary>{tournament.summary}</Summary>
          <Buttons>
            <ArrowButtonContainer>
              <ArrowButton text={'watch live on twitch.tv'} />
            </ArrowButtonContainer>
            <CirclesRow>
              <ShadowCircle>
                <Image
                  src={'/laptop.svg'}
                  width={24}
                  height={24}
                  alt={'laptop'}
                />
              </ShadowCircle>
              <ShadowCircle>
                <Image
                  src={'/logo-xbox.svg'}
                  width={24}
                  height={24}
                  alt={'xbox'}
                />
              </ShadowCircle>
            </CirclesRow>
          </Buttons>
        </TournamentInfo>
      </WatchedTournament>
      <TournamentsRow>
        {tournaments?.length &&
          tournaments.map((tournament, key) => (
            <SmallTournament tournament={tournament} key={key} />
          ))
        }
      </TournamentsRow>
    </EventsContainer>
  )
}
