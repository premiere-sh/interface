import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'
import saga from './saga'

export default function persistantStore() {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [sagaMiddleware]

  const enhancer = composeWithDevTools({})(applyMiddleware(...middleware))

  const persistConfig = {
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)
  sagaMiddleware.run(saga)
  return {
    store,
    persistor
  }
}
