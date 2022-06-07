import { types } from './players.actions'

const initialState = {
  players: [],
  isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PLAYERS:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        players: payload.players,
        isLoading: false
      }

    case types.FETCH_PLAYERS_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
