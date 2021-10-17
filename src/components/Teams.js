import styled from 'styled-components'
import { Column, Container, Row, GradientText, Circle } from './common'
import Image from 'next/image'

const YourTeams = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  line-height: 100%;
  transform: translateY(-86px);
  `


const Box = styled(Container)`
  height: 512px;
  border-radius: 5px;
  margin-top: 86px;
  background: ${props => props.theme.colors.white};
  position: relative;
`



const TeamName = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  line-height: 100%;
`

const GreyText = styled.div`
  font-family: Inter;
  font-style: Regular;
  font-size: 16px;
  fine-height: 24px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.1em;
`


const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
`
const Laptop = styled(Circle)`
  width: 39.08px;
  height: 39.08px;
  margin-right: 13.98px;
  box-shadow: 0px 4px 8px 0px #0000000D;
`

const Xbox= styled(Circle)`
  width: 39.08px;
  height: 39.08px;
  margin-right: 44.89px;
  box-shadow: 0px 4px 8px 0px #0000000D;
`

const Spacer = styled(Row)`
  justify-content: space-between;
`

const Delete = styled(Column)`
  width: 674px;
  height: 205px;
  background: red;
  transform: translateY(154px);
  z-index: 30;
`

export default function Teams() {

  const teammates = [
    {
      user: 'devonhenry_'
    },
    {
      user: 'devonhenry_'
    },
    {
      user: 'devonhenry_'
    }
  ]

  const teams = [
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567
    },
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567
    },
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567
    }
  ]

  return (
      <div>
        {teams.map((team) => 
          <div>
          <Box style ={{ marginBottom: 50 }}>
            <Column>
              <Spacer>
                <Row style={{ marginTop: 63, marginLeft: 74, }}>
                  {
                    teammates.map((teammate) =>
                    <div style={{ marginRight: 27 }}>
                        <Image
                          src={`/${teammate.user}.svg`} 
                          width={89.74} 
                          height={89.74} 
                          alt={'teammate-image'} 
                        />
                    </div>
                    )
                  }
                </Row>
                  <Row>
                    <Laptop>
                    <Image
                        src={'/laptop.svg'} 
                        width={19.54} 
                        height={19.54} 
                        alt={'laptop-image'} 
                      />
                    </Laptop>
                    <Xbox>
                      <Image
                        src={'/xbox.svg'} 
                        width={19.54} 
                        height={19.54} 
                        alt={'laptop-image'} 
                      />
                    </Xbox>
                  </Row>
              </Spacer>
              <div style={{ marginLeft: 74, marginTop: 46.26 }}>            
              <TeamName style={{ marginBottom: 27, textTransform: 'uppercase' }}>{team.name}</TeamName>
              </div>
              <Row>
                <Column style={{ marginLeft: 74}}>
                  <GreyText style={{ textTransform: 'uppercase' }}>team wins</GreyText>
                  <Numbers>{team.wins}</Numbers>
                </Column>
                <Column style={{ marginLeft: 95, marginRight: 127 }}>
                  <GreyText style={{ textTransform: 'uppercase' }}>team losses</GreyText>
                  <Numbers>{team.losses}</Numbers>
                </Column>
                <Column>
                  <GreyText style={{ textTransform: 'uppercase' }}>combined $prem earned</GreyText>
                  <Numbers>{team.prem}</Numbers>
                </Column>
              </Row>
              <Row style={{ marginTop: 103}}>
                <GradientText style={{ marginLeft: 74, marginRight: 17, textTransform: 'uppercase' }}>edit team</GradientText>
                <Image
                    src={'/arrow-right-gradient.svg'} 
                    width={14.89} 
                    height={9.3} 
                    alt={'arrow-right-gradient'} 
                  />
                <GradientText style={{ marginLeft: 80.11,marginRight: 16, textTransform: 'uppercase' }}>delete team</GradientText>
                <Image
                    src={'/arrow-right-gradient.svg'} 
                    width={14.89} 
                    height={9.3} 
                    alt={'arrow-right-gradient'} 
                  />
              </Row>
            </Column>
          </Box>
        </div> 
        )}
      </div>
  )
}
//hjgjgjgh