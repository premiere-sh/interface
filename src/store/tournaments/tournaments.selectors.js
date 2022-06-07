import { createSelector } from 'reselect'

const tournamentsState = state => state.tournaments

export const getTournamentsIsLoading = createSelector(
  tournamentsState,
  state => state.isLoading
)

export const getTournaments = createSelector(
  tournamentsState,
  state => state.tournaments
)
