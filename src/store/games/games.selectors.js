import { createSelector } from 'reselect'

const gamesState = state => state.games

export const getGames = createSelector(gamesState, state => state.isLoading)

export const getGamesLoading = createSelector(gamesState, state => state.games)
