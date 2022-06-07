import { takeLatest, put, call } from 'redux-saga/effects'
import * as queries from 'graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { types } from './players.actions'
import * as PlayerActions from './players.actions'

export function* fetchPlayersSaga() {
  console.log('asdf')
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(queries.listPlayers)
    )
    console.log(res)
    yield put(PlayerActions.fetchPlayersSuccess({ players: [] }))
  } catch (e) {
    console.log('getPlayersSagaError', e)
    yield put(PlayerActions.fetchPlayersFail())
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_PLAYERS, fetchPlayersSaga)
}
