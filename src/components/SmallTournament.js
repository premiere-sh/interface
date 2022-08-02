import Image from 'next/image'
import { Column, Circle } from 'components/common'
import { ArrowButton } from 'components/Buttons'
import { useState } from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(props) => (props.roundBorders ? '10px' : '0')};
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

const StartingSoon = styled.div`
  position: relative;
  width: 120px;
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  border-radius: 5px;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  z-index: 30;
  top: -23px;
  left: 37px;
`

const TournamentContainer = styled.div`
  height: 340px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  width: 590px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 15px;
  &:hover {
    border: 4px solid ${(props) => props.theme.colors.ruby};
  }
  &:hover ${StartingSoon} {
    display: block;
  }
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

export default function SmallTournament({ tournament, roundBorders }) {
  const [isHover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ marginBottom: isHover ? -8 : 0 }}
    >
      <TournamentContainer roundBorders={roundBorders}>
        <Row roundBorders={roundBorders}>
          <ImageContainer>
            <Image
              src={`/${tournament.game}.svg`}
              alt={'tournament_pic'}
              layout={'fill'}
            />
          </ImageContainer>
          <InfoColumn>
            <SubText>{tournament.region}</SubText>
            <TitleContainer>
              <Title>{tournament.name}</Title>
            </TitleContainer>
            <InfoText>
              <span style={{ fontWeight: 800 }}>{tournament.time}</span>
              <span> - {tournament.date}</span>
            </InfoText>
            <div style={{ height: 16 }} />
            <InfoText>
              <span style={{ fontWeight: 800 }}>Prize</span>
              <span>
                {' '}
                - {tournament.prize} {tournament.prize_currency}
              </span>
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
      <StartingSoon>
        <span>8h 48m</span>
      </StartingSoon>
    </div>
  )
}
