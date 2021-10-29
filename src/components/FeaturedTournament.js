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

const TournamentContainer = styled(Container)`
  height: 262px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  width: 453px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.ruby};
  }
  border-radius: ${(props) => (props.roundBorders ? '10px' : '0')};
`

const SubText = styled.div`
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
`

const TitleContainer = styled.div`
  overflow-y: scroll;
`

const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

const InfoText = styled.div`
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.grayish};
`

const InfoColumn = styled(Column)`
  justify-content: space-around;
  align-items: flex-start;
  width: 66%;
  margin: 22px 22px 22px 22px;
  position: relative;
`

const ImageContainer = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function FeaturedTournament({ tournament, roundBorders }) {
  return (
    <TournamentContainer roundBorders={roundBorders}>
      <Row style={{ width: '100%', height: '100%' }}>
        <ImageContainer>
          <Image
            src={`/${tournament.game}.svg`}
            alt={'tournament_pic'}
            width={188}
            height={262}
          />
        </ImageContainer>
        <InfoColumn>
          <div>
            <SubText>{tournament.region}</SubText>
            <TitleContainer>
              <Title>{tournament.title}</Title>
            </TitleContainer>
          </div>
          <div>
            <InfoText>
              <span style={{ fontWeight: 700 }}>{tournament.time}</span>
            </InfoText>
            <InfoText>
              <span>{tournament.date}</span>
            </InfoText>
          </div>
        </InfoColumn>
      </Row>
    </TournamentContainer>
  )
}
