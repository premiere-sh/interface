export const types = {
  FETCH_TOURNAMENTS: '[Tournaments] Fetch Tournaments',
  FETCH_TOURNAMENTS_SUCCESS: '[Tournaments] Fetch Tournaments Success',
  FETCH_TOURNAMENTS_FAIL: '[Tournaments] Fetch Tournaments Fail',
  CREATE_TOURNAMENT: '[Tournaments] Create Tournament',
  CREATE_TOURNAMENT_SUCCESS: '[Tournaments] Create Tournament Success',
  CREATE_TOURNAMENT_FAIL: '[Tournaments] Create Tournament Fail'
}

export const fetchTournaments = payload => ({
  type: types.FETCH_TOURNAMENTS,
  payload
})

export const fetchTournamentsSuccess = payload => ({
  type: types.FETCH_TOURNAMENTS_SUCCESS,
  payload
})

export const fetchTournamentsFail = payload => ({
  type: types.FETCH_TOURNAMENTS_FAIL,
  payload
})

export const createTournament = payload => ({
  type: types.CREATE_TOURNAMENT,
  payload
})

export const createTournamentSuccess = payload => ({
  type: types.CREATE_TOURNAMENT_SUCCESS,
  payload
})

export const createTournamentFail = payload => ({
  type: types.CREATE_TOURNAMENT_FAIL,
  payload
})
