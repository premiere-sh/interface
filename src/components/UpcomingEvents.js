import styled from 'styled-components'
import { Column, Row, Container, Circle } from 'components/common'
import { Heading, Subtext } from 'components/Forms'
import Image from 'next/image'
import { ArrowButton } from 'components/Buttons'
import SmallTournament from 'components/SmallTournament'
import ReactPlayer from 'react-player'

const EventsContainer = styled(Column)`
  width: min(80%, 1400px);
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
  width: 126%;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

const TournamentInfo = styled(Column)`
  max-width: 1000px;
`

const Region = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
  margin-bottom: 24px;
`

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  margin-bottom: 22px;
  @media screen and (max-width: 800px) {
    font-size: 35px;
  }
`

const Summary = styled.div`
  width: 832px;
  margin-bottom: 20px;
  @media screen and (max-width: 1350px) {
    display: none;
  }
`

const ArrowButtonContainer = styled.div`
  display: inline-block;
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    width: 250px;
  }
`

const CirclesRow = styled(Row)`
  margin-right: 29px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ShadowCircle = styled(Circle)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 12px;
`

const Buttons = styled(Row)`
  justify-content: space-between;
`

const TournamentsRow = styled(Row)`
  margin-left: 0px;
  justify-content: space-around;
  margin-top: 155px;
  width: 126%;
  @media screen and (max-width: 1550px) {
    flex-direction: column;
  }
`

const Spacer = styled.div`
  @media screen and (max-width: 1550px) {
    height: 30px;
  }
`

const TournamentContainer = styled(Column)`
  margin: auto;
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
    prize: '$1,250'
  }

  const tournaments = [tournament, tournament]

  return (
    <EventsContainer>
      <EventsHeading>watch premiere events live</EventsHeading>
      <EventsSubtext>
        If there is a premiere event currently underway, you&apos;ll be able to
        watch it here!
      </EventsSubtext>
      <PlayerWrapper>
        <ReactPlayer
          url={'https://www.twitch.tv/izakooo'}
          playing={true}
          width="126%"
          height={788}
          style={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            overflow: 'hidden'
          }}
        />
      </PlayerWrapper>
      <WatchedTournament>
        <div style={{ marginLeft: 40, marginRight: 38 }}>
          <Image
            src={'/csgo.svg'}
            width={167}
            height={260}
            layout="fixed"
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
          tournaments.map((tournament, idx) => (
            <TournamentContainer key={idx}>
              <SmallTournament tournament={tournament} />
              <Spacer />
            </TournamentContainer>
          ))}
      </TournamentsRow>
    </EventsContainer>
  )
}
