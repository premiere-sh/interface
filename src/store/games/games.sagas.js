import { takeLatest, put, call } from 'redux-saga/effects'
import * as queries from 'graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { types } from './games.actions'
import * as GameActions from './games.actions'

export function* fetchGamesSaga() {
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(queries.listGames)
    )
    console.log(res)
    yield put(GameActions.fetchGamesSuccess({ games: [] }))
  } catch (e) {
    console.log('getGamesSagaError', e)
    yield put(GameActions.fetchGamesFail())
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_GAMES, fetchGamesSaga)
}
