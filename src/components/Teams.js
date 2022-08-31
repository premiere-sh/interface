import { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  Column,
  Container,
  Row,
  GradientText,
  Circle,
  Center
} from 'components/common'
import Image from 'next/image'
import { ArrowButton } from 'components/Buttons'
import DeleteTeamModal from 'components/DeleteTeamModal'
import Link from 'next/link'
import TeamContext from '../contexts/teamsContext'
import { Button as CreateButton } from 'components/Buttons'
import {
  useUser,
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData
} from 'reactfire'
import {
  collection,
  documentId,
  query,
  where,
  doc,
  getDocs
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { acceptTeamInvite, refuseTeamInvite } from '../firebase/teams'
import { Grid } from 'styled-css-grid'
import _ from 'underscore'

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
  width: 100%;
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

const TeamsContainer = styled(Container)``

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

const CreateTeamButton = styled(CreateButton)`
  height: 80px;
  width: 200px;
`

const InvitesGrid = styled(Grid)`
  margin-bottom: 30px;
  margin-left: 30px;
`

const Wrapper = styled.div`
  position: relative;
  width: 210px;
`

const TeamInvite = styled(Center)`
  width: 65px;
  height: 65px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: 3px solid #982649;
  position: absolute;
  top: 0;
  z-index: 50;
`

const AcceptTeamInvite = styled(TeamInvite)`
  right: 15px;
`

const RefuseTeamInvite = styled(TeamInvite)`
  left: 15px;
  transform: rotate(45deg);
`

const AcceptTeamSign = styled.div`
  display: block;
  top: 0.05em;
  left: 0.28em;
  width: 15%;
  height: 60%;
  border: solid #982649;
  border-width: 0 0.2em 0.2em 0;
  transform: rotate(45deg);
`

const TextSection = styled(Column)``

const YourInvites = styled.div`
  font-size: 26px;
  line-height: 31px;
  font-weight: 600;
  margin-bottom: 45px;
`

const NameTeam = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 26.73px;
`

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 170px;
`

const UserColumn = styled(Column)``

export default function Teams() {
  const [isOpen, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const firestore = useFirestore()
  const { status, data: user } = useUser()
  const userTeamsCollection = collection(firestore, `users/${user.uid}/teams`)
  const { data: teams } = useFirestoreCollectionData(userTeamsCollection)
  const invitesCollection = collection(
    firestore,
    `users/${user.uid}/teamInvites`
  )
  const { data: teamInvites } = useFirestoreCollectionData(invitesCollection)

  teams?.map(async (team, idx) => {
    const membersArray = []
    const membersCollection = collection(
      firestore,
      `teams/${team.teamId}/members`
    )
    const members = await getDocs(membersCollection)
    members.docs.map((member) => {
      membersArray.push(member.data())
    })
    teams[idx].members = membersArray
  })

  const handleAcceptInvite = (id) => {
    acceptTeamInvite(id)
  }

  const handleRefuseInvite = (id) => {
    refuseTeamInvite(id)
  }

  return (
    <TeamsContainer>
      {teamInvites && (
        <div>
          <TextSection>
            <YourInvites>Your invites</YourInvites>
          </TextSection>
          <InvitesGrid
            columns={'repeat(auto-fit, minmax(210px, 1fr))'}
            gap={'83px'}
          >
            {teamInvites?.map((teamInvite, key) => (
              <Wrapper key={key}>
                <UserColumn style={{ alignItems: 'center' }}>
                  <div>
                    <Avatar src={'/devonhenry_.svg'} />
                  </div>
                  <NameTeam>{teamInvite.name}</NameTeam>
                </UserColumn>
                <AcceptTeamInvite
                  onClick={() => handleAcceptInvite(teamInvite.teamId)}
                >
                  <AcceptTeamSign />
                </AcceptTeamInvite>
                <RefuseTeamInvite
                  onClick={() => handleRefuseInvite(teamInvite.teamId)}
                >
                  <Image
                    src={'/cross.svg'}
                    width={32}
                    height={32}
                    alt={'cross'}
                  />
                </RefuseTeamInvite>
              </Wrapper>
            ))}
          </InvitesGrid>
        </div>
      )}
      <Link href={'/create-team'}>
        <a>
          <CreateTeamButton>Create Team</CreateTeamButton>
        </a>
      </Link>
      {teams?.length &&
        teams.map((team, key) => (
          <Box key={key}>
            {isOpen == team.teamId && (
              <DeleteTeamModal
                isOpen={isOpen}
                setOpen={setOpen}
                teamId={team.teamId}
              />
            )}
            <Spacer>
              <TeammatesRow>
                {team.members?.length &&
                  team.members.map((member, index) => (
                    <div style={{ marginRight: 27 }} key={index}>
                      <Image
                        src={`/devonhenry_.svg`}
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
              {team.name}: {team.teamId}
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
            {team.ownerId == user.uid && (
              <GradientTextRow>
                <Link
                  href={{
                    pathname: '/edit-team',
                    query: { teamId: team.teamId }
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
                      setOpen(team.teamId)
                      setDeleteId(team.id)
                      console.log('setOpen', isOpen)
                      console.log('teamId', team.teamId)
                    }}
                  >
                    <ArrowButton text={'Delete Team'} />
                  </Button>
                </ArrowButtonContainer>
              </GradientTextRow>
            )}
          </Box>
        ))}
    </TeamsContainer>
  )
}
