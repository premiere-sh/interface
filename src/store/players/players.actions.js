export const types = {
  FETCH_PLAYERS: '[Players] Fetch Players',
  FETCH_PLAYERS_SUCCESS: '[Players] Fetch Players Success',
  FETCH_PLAYERS_FAIL: '[Players] Fetch Players Fail'
}

export const fetchPlayers = payload => ({
  type: types.FETCH_PLAYERS,
  payload
})

export const fetchPlayersSuccess = payload => ({
  type: types.FETCH_PLAYERS_SUCCESS,
  payload
})

export const fetchPlayersFail = payload => ({
  type: types.FETCH_PLAYERS_FAIL,
  payload
})
