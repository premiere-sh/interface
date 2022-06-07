import { spawn } from 'redux-saga/effects'
import { saga as AuthSaga } from './auth/auth.sagas'
import { saga as TournamentsSaga } from './tournaments/tournaments.sagas'
import { saga as GamesSaga } from './games/games.sagas'
import { saga as PlayersSaga } from './players/players.sagas'
import { saga as TeamsSaga } from './teams/teams.sagas'

export default function* saga() {
  yield spawn(AuthSaga)
  yield spawn(TournamentsSaga)
  yield spawn(GamesSaga)
  yield spawn(PlayersSaga)
  yield spawn(TeamsSaga)
}
