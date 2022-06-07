import { types } from './tournaments.actions'

const initialState = {
  tournaments: [],
  isLoading: false,
  isCreating: false
}

// eslint-disable-next-line
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_TOURNAMENTS:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: [...state.tournaments, ...payload.tournaments],
        isLoading: false
      }

    case types.FETCH_TOURNAMENTS_FAIL:
      return {
        ...state,
        isLoading: false
      }

    case types.CREATE_TOURNAMENT:
      return {
        ...state,
        isCreating: true
      }

    case types.CREATE_TOURNAMENT_SUCCESS:
      return {
        ...state,
        tournaments: [...state.tournaments, payload.createdTournament],
        newTournament: payload.createdTournament,
        isCreating: false
      }

    case types.CREATE_TOURNAMENT_FAIL:
      return {
        ...state,
        isCreating: false
      }

    default:
      return state
  }
}
