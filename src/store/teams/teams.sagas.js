import { takeLatest, put, call } from 'redux-saga/effects'
import * as queries from 'graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { types } from './teams.actions'
import * as TournamentActions from './teams.actions'

export function* fetchTeamsSaga() {
  console.log('asdf')
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(queries.listTeams)
    )
    console.log(res)
    yield put(TournamentActions.fetchTeamsSuccess({ teams: [] }))
  } catch (e) {
    console.log('getTeamsSagaError', e)
    yield put(TournamentActions.fetchTeamsFail())
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_TEAMS, fetchTeamsSaga)
}
