import { types } from './teams.actions'

const initialState = {
  teams: [],
  isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_TEAMS:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        teams: payload.teams,
        isLoading: false
      }

    case types.FETCH_TEAMS_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
