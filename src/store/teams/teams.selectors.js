import { createSelector } from 'reselect'

const teamsState = state => state.teams

export const getTeamsIsLoading = createSelector(
  teamsState,
  state => state.isLoading
)

export const getTeams = createSelector(teamsState, state => state.teams)
