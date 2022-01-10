import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import saga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancer = composeWithDevTools({})(applyMiddleware(...middleware))

const store = createStore(reducer, enhancer)

sagaMiddleware.run(saga)

export default store
