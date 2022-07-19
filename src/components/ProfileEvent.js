import Image from 'next/image'
import {
  Subheading,
  Column,
  Container,
  GradientText,
  Circle
} from 'components/common'
import { ArrowButton } from 'components/Buttons'
import GradientDropdown from 'components/GradientDropdown'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const UsersRow = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`


const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: space-between;
`


const PlayerStats = styled(Row)`
margin-bottom:auto;
`


const GreyTextColumn = styled(Column)`
  margin-right: 24px;
`

const GreyText = styled.div`
  font-style: Regular;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Numbers = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ShadowCircle = styled(Circle)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 12px;
  width:30px;
  height:30px;
`

const EventContainer = styled.div`
  height: 425px;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`

const Title = styled.h2`
  margin-bottom: 22px;
  margin-top: 22px;
  font-size: 27px;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`

const SubText = styled.div`
  font-weight: 600;
  font-size: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  line-height: 100%;
  margin-top:auto;
  margin-bottom:auto;
  color: ${(props) => props.theme.colors.grayish};

`

const InfoColumn = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  margin: 42px 42px 42px 42px;
  position: relative;
`

const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  height: 111%;
  height: fill;
  position: relative;
  margin-top: -12px;
  margin-left: -30px;
  img {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
  }
`

const Text = styled(GradientText)`
font-family: Inter;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0.1em;
color: ${(props) => props.theme.colors.black};
user-select: none;
`

const ArrowButtonContainer = styled(GradientText)`
  height: 30px;
  display: flex;
  text-transform: uppercase;
  flex-direction: row;
  margin-left:auto;
  cursor: pointer;
  user-select: none;
  margin-top:auto;
  margin-bottom:auto;
`

const User = styled.th`
`

const MainRow = styled(Row)`
  width: 100%;
  height: 100%;
`

export default function ProfileEvent({ event }) {
  return (
    <EventContainer>
      <MainRow>
        <ImageContainer>
          <Image
            src={`/${event.game}.svg`}
            alt={'tournament_pic'}
            layout={'fill'}
          />
        </ImageContainer>
        <InfoColumn>
          <HeaderRow>
            <SubText>{event.region}</SubText>
            <Row>
              <ShadowCircle>
                <Image
                  src={'/laptop.svg'}
                  width={19}
                  height={19}
                  alt={'laptop'}
                />
              </ShadowCircle>
              <ShadowCircle>
                <Image
                  src={'/logo-xbox.svg'}
                  width={19}
                  height={19}
                  alt={'xbox'}
                />
              </ShadowCircle>
            </Row>
          </HeaderRow>
          
          <Title>{event.title}</Title>

          <PlayerStats>
            <GreyTextColumn>
              <GreyText>TEAM POSITION</GreyText>
              <Numbers>{event.teamPos}</Numbers>
            </GreyTextColumn>
            <GreyTextColumn>
              <GreyText>INDIVIDUAL POSITION</GreyText>
              <Numbers>{event.individualPos}</Numbers>
            </GreyTextColumn>
            <GreyTextColumn>
              <GreyText>$PREM EARNED</GreyText>
              <Numbers>{event.prem}</Numbers>
            </GreyTextColumn>
          </PlayerStats>
          <HeaderRow>
            <UsersRow>
              {event.users.map((user, index)=>{
                return(<User key = {index}>
                  <div style={{ marginRight: 12, marginTop: 5 }}>
                    <Image
                      src={'/' + user.profile + '.svg'}
                      width={32}
                      height={32}
                      alt={'user'}
                    />
                  </div>
                </User>)
                })}
            </UsersRow>
            <ArrowButtonContainer>
              <Text>WATCH REPLAY</Text>
              <div style={{ marginBottom: 10, marginLeft: 15 }}>
                <Image
                  src={'/arrow-right-gradient.svg'}
                  width={18}
                  height={12}
                  alt={'arrow-right'}
                />
              </div>
            </ArrowButtonContainer>
          </HeaderRow>
        </InfoColumn>
      </MainRow>
    </EventContainer>
  )
}
