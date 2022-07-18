import { createContext, useState } from 'react'
const dummyTeammates = [
  { id: 1, url: '', user: 'devonhenry_' },
  { id: 2, url: '', user: 'devonhenry_' },
  { id: 3, url: '', user: 'devonhenry_' }
]
const dummyTeams = [
  {
    id: 1,
    name: '[INSERT TEAM NAME]',
    wins: 123,
    losses: 4,
    prem: 1234567,
    teammates: dummyTeammates,
    description: ''
  },
  {
    id: 2,
    name: '[INSERT TEAM NAME]',
    wins: 123,
    losses: 4,
    prem: 1234567,
    teammates: dummyTeammates,
    description: ''
  },
  {
    id: 3,
    name: '[INSERT TEAM NAME]',
    wins: 123,
    losses: 4,
    prem: 1234567,
    teammates: dummyTeammates,
    description: ''
  }
]
interface Teammates {
  id: number
  user: string
  url: string
}

interface DummyTeams {
  id: number
  name: string
  wins: number
  prem: number
  teammates: Array<Teammates>
  description: string
}
interface TeamState {
  teams: Array<DummyTeams>
  teamsUpdated: Array<DummyTeams>
  allTeammates: Array<Teammates>
  deleteTeam: Function
  removeMember: Function
  saveChanges: Function
  discardChanges: Function
  onChangeName: Function
  onChangeDis: Function
  addMember: Function
}
const TeamContext = createContext<TeamState>({
  teams: dummyTeams,
  teamsUpdated: dummyTeams,
  allTeammates: dummyTeammates,
  deleteTeam: (deleteId: number) => {},
  removeMember: (teamId: number, memberId: number) => {},
  saveChanges: () => {},
  discardChanges: () => {},
  onChangeName: () => {},
  onChangeDis: () => {},
  addMember: () => {}
})

export function TeamProvider({ children }) {
  const [teams, setTeams] = useState(dummyTeams)
  const [teamsUpdated, setTeamsUpdated] = useState(dummyTeams)

  const deleteTeamHandler = (deleteId: number) => {
    setTeams(
      teams.filter((ele) => {
        return ele.id != deleteId
      })
    )
  }

  const removeMemberHandler = (teamId: number, memberId: number) => {
    const findTeam = teamsUpdated.findIndex((team) => team.id === teamId)

    const updateTeammates = teamsUpdated[findTeam].teammates.filter((ele) => {
      return ele.id != memberId
    })

    const updateTeams = teamsUpdated.map((team) => {
      if (team.id === teamId) {
        return { ...team, teammates: updateTeammates }
      }
      return team
    })
    setTeamsUpdated(updateTeams)
  }

  const onChangeName = (teamId: number, name: string) => {
    const updateTeams = teamsUpdated.map((team) => {
      if (team.id === teamId) {
        return { ...team, name }
      }
      return team
    })
    setTeamsUpdated(updateTeams)
  }

  const onChangeDis = (teamId: number, dis: string) => {
    const updateTeams = teamsUpdated.map((team) => {
      if (team.id === teamId) {
        return { ...team, description: dis }
      }
      return team
    })
    setTeamsUpdated(updateTeams)
  }

  const saveChanges = () => {
    setTeams(teamsUpdated)
  }

  const discardChanges = () => {
    setTeamsUpdated(teams)
  }

  const addMember = (teamId: number, addedMember: Teammates) => {
    console.log(teamId, addedMember)
    const findTeam = teamsUpdated.findIndex((team) => team.id === teamId)
    const updateTeams = teamsUpdated.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          teammates: [...teamsUpdated[findTeam].teammates, addedMember]
        }
      }
      return team
    })
    setTeamsUpdated(updateTeams)
  }
  const teamStateContext: TeamState = {
    teams,
    teamsUpdated,
    allTeammates: dummyTeammates,
    deleteTeam: deleteTeamHandler,
    removeMember: removeMemberHandler,
    onChangeName,
    onChangeDis,
    saveChanges,
    discardChanges,
    addMember
  }
  return (
    <TeamContext.Provider value={teamStateContext}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContext
