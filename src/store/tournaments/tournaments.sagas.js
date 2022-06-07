import { takeLatest, put, call } from 'redux-saga/effects'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { types } from './tournaments.actions'
import * as TournamentActions from './tournaments.actions'

export function* fetchTournamentsSaga() {
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(queries.listTournaments)
    )
    console.log(res)
    yield put(TournamentActions.fetchTournamentsSuccess({ tournaments: [] }))
  } catch (e) {
    console.log('getTournamentsSagaError', e)
    yield put(TournamentActions.fetchTournamentsFail())
  }
}

export function* createTournamentSaga({ payload }) {
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(mutations.createTournament, {
        input: payload
      })
    )
    console.log(res)
    yield put(TournamentActions.createTournamentSuccess({ tournament: res }))
  } catch (e) {
    console.log('createTournamentSagaError', e)
    yield put(TournamentActions.createTournamentFail({ error: e }))
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_TOURNAMENTS, fetchTournamentsSaga)
  yield takeLatest(types.CREATE_TOURNAMENT, createTournamentSaga)
}
