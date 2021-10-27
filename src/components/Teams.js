import styled from 'styled-components'
import { Column, Container, Row, GradientText, Circle } from './common'
import Image from 'next/image'
import Link from 'next/link'

const YourTeams = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  line-height: 100%;
  transform: translateY(-86px);
`

const Box = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 512px;
  border-radius: 5px;
  margin-top: 86px;
  background: ${(props) => props.theme.colors.white};
  margin-bottom: 50px;
`

const TeamName = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  line-height: 100%;
  margin-left: 74px;
  margin-top: 46px;
  margin-bottom: 27px;
`

const GreyText = styled.div`
  font-family: Inter;
  font-style: Regular;
  font-size: 16px;
  fine-height: 24px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const TeamInfo = styled(Row)``

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
  box-shadow: 0px 4px 8px 0px #0000000d;
`

const Xbox = styled(Circle)`
  width: 39.08px;
  height: 39.08px;
  margin-right: 44.89px;
  box-shadow: 0px 4px 8px 0px #0000000d;
`

const GradientTextRow = styled(Row)`
  margin-top: 103px;
`

const EditTeam = styled(GradientText)`
  margin-left: 74px;
  margin-right: 17px;
  text-transform: uppercase;
`

const DeleteTeam = styled(GradientText)`
  margin-left: 80px;
  margin-right: 1px;
  text-transform: uppercase;
`

const Spacer = styled(Row)`
  justify-content: space-between;
`

const TeammatesRow = styled(Row)`
  margin-top: 63px;
  margin-left: 74px;
`

const TeamWins = styled(Column)`
  margin-left: 74px;
`

const TeamLosses = styled(Column)`
  margin-left: 95px;
  margin-right: 127px;
`

const TeamPrem = styled(Column)`
  margin-left: 74px;
`

const IconsRow = styled(Row)``

const TeamsContainer = styled.div``

export default function Teams() {
  const teammates = [
    {
      user: 'devonhenry_',
    },
    {
      user: 'devonhenry_',
    },
    {
      user: 'devonhenry_',
    },
  ]

  const teams = [
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567,
    },
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567,
    },
    {
      name: '[INSERT TEAM NAME]',
      wins: 123,
      losses: 4,
      prem: 1234567,
    },
  ]

  return (
    <TeamsContainer>
      {teams?.length &&
        teams.map((team, key) => (
          <Box key={key}>
            <Spacer>
              <TeammatesRow>
                {teammates?.length &&
                  teammates.map((teammate) => (
                    <div style={{ marginRight: 27 }} key={key}>
                      <Image
                        src={`/${teammate.user}.svg`}
                        width={89.74}
                        height={89.74}
                        alt={'teammate-image'}
                      />
                    </div>
                  ))}
              </TeammatesRow>
              <IconsRow>
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
              </IconsRow>
            </Spacer>
            <TeamName>{team.name}</TeamName>
            <TeamInfo>
              <TeamWins>
                <GreyText>team wins</GreyText>
                <Numbers>{team.wins}</Numbers>
              </TeamWins>
              <TeamLosses>
                <GreyText>team losses</GreyText>
                <Numbers>{team.losses}</Numbers>
              </TeamLosses>
              <TeamPrem>
                <GreyText>combined $prem earned</GreyText>
                <Numbers>{team.prem}</Numbers>
              </TeamPrem>
            </TeamInfo>
            <GradientTextRow>
              <Link href={'edit-team'}>
                <a>
                  <EditTeam>edit team</EditTeam>
                </a>
              </Link>
              <Image
                src={'/arrow-right-gradient.svg'}
                width={14.89}
                height={9.3}
                alt={'arrow-right-gradient'}
              />
              <DeleteTeam>delete team</DeleteTeam>
              <Image
                src={'/arrow-right-gradient.svg'}
                width={14.89}
                height={9.3}
                alt={'arrow-right-gradient'}
              />
            </GradientTextRow>
          </Box>
        ))}
    </TeamsContainer>
  )
}
