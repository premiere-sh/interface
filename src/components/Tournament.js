import Image from 'next/image'
import { Column, Circle } from 'components/common'
import { ArrowButton } from 'components/Buttons'
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
  top: 407px;
  @media screen and (max-width: 800px) {
    top: 337px;
    flex-direction: column;
    height: 80px;
    margin-top: 30px;
  }
`

const ShadowCircle = styled(Circle)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 12px;
`

const TournamentContainer = styled.div`
  height: 556px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`

const Summary = styled.p`
  max-width: 883px;
  height: 130px;
  max-height: 150px;
  overflow-y: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

const Title = styled.h2`
  margin-bottom: 22px;
  font-size: 35px;
  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
`

const SubText = styled.div`
  font-weight: 600;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  line-height: 150%;
  color: ${props => props.theme.colors.grayish};
  margin-bottom: 24px;
`

const InfoText = styled.div`
  font-size: 20px;
  line-height: 150%;
  color: ${props => props.theme.colors.grayish};
`

const InfoColumn = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  margin: 48px 48px 48px 48px;
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

const MainRow = styled(Row)`
  width: 100%;
  height: 100%;
`

export default function Tournament({ tournament }) {
  return (
    <TournamentContainer>
      <MainRow>
        <ImageContainer>
          <Image
            src={`/${tournament?.game}.svg`}
            alt="tournament_pic"
            layout="fill"
          />
        </ImageContainer>
        <InfoColumn>
          <SubText>{tournament?.region}</SubText>
          <Title>{tournament?.name}</Title>
          <Summary>{tournament?.description}</Summary>
          <InfoText>
            <span style={{ fontWeight: 800 }}>{tournament?.time}</span>
            <span> - {tournament?.date}</span>
          </InfoText>
          <div style={{ height: 16 }} />
          <InfoText>
            <span style={{ fontWeight: 800 }}>Prize</span>
            <span>
              {' '}
              - {tournament?.prize} {tournament?.prize_currency}
            </span>
          </InfoText>
          <ButtonRow>
            <ArrowButton text="enter now" />
            <Row>
              <ShadowCircle>
                <Image src="/xplay.svg" width={24} height={24} alt="xplay" />
              </ShadowCircle>
              <ShadowCircle>
                <Image src="/laptop.svg" width={24} height={24} alt="laptop" />
              </ShadowCircle>
              <ShadowCircle>
                <Image
                  src="/logo-xbox.svg"
                  width={24}
                  height={24}
                  alt="xbox"
                />
              </ShadowCircle>
            </Row>
          </ButtonRow>
        </InfoColumn>
      </MainRow>
    </TournamentContainer>
  )
}
