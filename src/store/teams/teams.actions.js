export const types = {
  FETCH_TEAMS: '[Teams] Fetch Teams',
  FETCH_TEAMS_SUCCESS: '[Teams] Fetch Teams Success',
  FETCH_TEAMS_FAIL: '[Teams] Fetch Teams Fail'
}

export const fetchTeams = payload => ({
  type: types.FETCH_TEAMS,
  payload
})

export const fetchTeamsSuccess = payload => ({
  type: types.FETCH_TEAMS_SUCCESS,
  payload
})

export const fetchTeamsFail = payload => ({
  type: types.FETCH_TEAMS_FAIL,
  payload
})
