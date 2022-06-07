import { types } from './games.actions'

const initialState = {
  games: [],
  isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_GAMES:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        games: payload.games,
        isLoading: false
      }

    case types.FETCH_GAMES_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
