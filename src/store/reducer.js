import { combineReducers } from 'redux'
import { reducer as AuthReducer } from './auth/auth.reducers'

const reducer = combineReducers({
  auth: AuthReducer
})

export default reducer
