import { createSelector } from 'reselect'

const playersState = state => state.players

export const getPlayersIsLoading = createSelector(
  playersState,
  state => state.isLoading
)

export const getPlayers = createSelector(playersState, state => state.players)
