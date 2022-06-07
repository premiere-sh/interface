import { combineReducers } from 'redux'
import { reducer as AuthReducer } from './auth/auth.reducers'
import { reducer as TournamentsReducer } from './tournaments/tournaments.reducers'
import { reducer as GamesReducer } from './games/games.reducers'
import { reducer as PlayersReducer } from './players/players.reducers'
import { reducer as TeamsReducer } from './teams/teams.reducers'

const reducer = combineReducers({
  auth: AuthReducer,
  tournaments: TournamentsReducer,
  games: GamesReducer,
  players: PlayersReducer,
  teams: TeamsReducer
})

export default reducer
