import { useState, useContext } from 'react'
import styled from 'styled-components'
import { Column, Container, Row, GradientText, Circle } from 'components/common'
import Image from 'next/image'
import { ArrowButton } from 'components/Buttons'
import DeleteTeamModal from 'components/DeleteTeamModal'
import Link from 'next/link'
import TeamContext from '../contexts/teamsContext'

const Button = styled.div``

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

const Spacer = styled(Row)`
  justify-content: space-between;
`

const TeammatesRow = styled(Row)`
  margin-top: 63px;
  margin-left: 74px;
`

const TeamWins = styled(Column)`
  margin-left: 74px;
  margin-right: 95px;
  @media screen and (max-width: 1100px) {
    margin-right: 35px;
  }
`

const TeamLosses = styled(Column)`
  margin-right: 127px;
  @media screen and (max-width: 1100px) {
    margin-right: 35px;
  }
`

const TeamPrem = styled(Column)``

const ArrowButtonContainer = styled.div`
  margin-left: 74px;
  display: inline-block;
`

const IconsRow = styled(Row)``

const TeamsContainer = styled.div``

const EditTeam = styled(GradientText)`
  margin-left: 74px;
  margin-right: 17px;
  text-transform: uppercase;
`

const DeleteTeam = styled(GradientText)`
  margin-left: 74px;
  margin-right: 17px;
  text-transform: uppercase;
`

export default function Teams() {
  const [isOpen, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const teamCtx = useContext(TeamContext)

  function deleteTeamHandler() {
    teamCtx.deleteTeam(deleteId)
  }

  return (
    <TeamsContainer>
      <DeleteTeamModal
        deleteTeamHandler={deleteTeamHandler}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      {teamCtx.teams?.length &&
        teamCtx.teams.map((team, key) => (
          <Box key={key}>
            <Spacer>
              <TeammatesRow>
                {team.teammates?.length &&
                  team.teammates.map((teammate, index) => (
                    <div style={{ marginRight: 27 }} key={index}>
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
            <TeamName>
              {team.name}: {team.id}
            </TeamName>
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
              <Link
                href={{
                  pathname: 'edit-team',
                  query: { id: team.id }
                }}
              >
                <a>
                  <ArrowButtonContainer>
                    <Button>
                      <ArrowButton text={'Edit Team'} />
                    </Button>
                  </ArrowButtonContainer>
                </a>
              </Link>
              <ArrowButtonContainer>
                <Button
                  onClick={() => {
                    setOpen(true)
                    setDeleteId(team.id)
                  }}
                >
                  <ArrowButton text={'Delete Team'} />
                </Button>
              </ArrowButtonContainer>
            </GradientTextRow>
          </Box>
        ))}
    </TeamsContainer>
  )
}
