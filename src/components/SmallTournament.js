import Image from 'next/image'
import {
  Subheading,
  Column,
  Container,
  GradientText,
  Circle,
} from 'components/common'
import { ArrowButton } from 'components/Buttons'
import GradientDropdown from 'components/GradientDropdown'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 215px;
  /*
  @media screen and (max-width: 800px) {
    top: 180px;
    flex-direction: column;
    height: 80px;
    margin-top: 30px;
  }
  */
`

const ShadowCircle = styled(Circle)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 12px;
`

const TournamentContainer = styled(Container)`
  height: 340px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  width: 590px;
`

const SubText = styled.div`
  font-weight: 600;
  font-size: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
  margin-bottom: 24px;
`

const TitleContainer = styled.div`
  overflow-x: scroll;
  overflow: hidden;
  white-space: nowrap;
  width: 300px;
`

const Title = styled.h2`
  margin-bottom: 22px;
  font-size: 26px;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`

const InfoText = styled.div`
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
`

const InfoColumn = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 66%;
  margin: 48px 48px 48px 48px;
  position: relative;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function SmallTournament({ tournament }) {
  return (
    <TournamentContainer>
      <Row style={{ width: '100%', height: '100%' }}>
        <ImageContainer>
          <Image
            src={`/${tournament.game}.svg`}
            alt={'tournament_pic'}
            width={219}
            height={341}
          />
        </ImageContainer>
        <InfoColumn>
          <SubText>{tournament.region}</SubText>
          <TitleContainer>
            <Title>{tournament.title}</Title>
          </TitleContainer>
          <InfoText>
            <span style={{ fontWeight: 800 }}>{tournament.time}</span>
            <span> - {tournament.date}</span>
          </InfoText>
          <div style={{ height: 16 }} />
          <InfoText>
            <span style={{ fontWeight: 800 }}>Prize</span>
            <span> - {tournament.prize}</span>
          </InfoText>
          <ButtonRow>
            <div style={{ marginTop: 11, fontSize: 15 }}>
              <ArrowButton text={'enter now'} />
            </div>
            <Row>
              <ShadowCircle>
                <Image
                  src={'/xplay.svg'}
                  width={24}
                  height={24}
                  alt={'xplay'}
                />
              </ShadowCircle>
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
            </Row>
          </ButtonRow>
        </InfoColumn>
      </Row>
    </TournamentContainer>
  )
}
