import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as reduxFormReducer } from 'redux-form'

import * as reducers from 'Reducers'

const combinedReducers = combineReducers({
  form: reduxFormReducer,
  ...reducers
})

const logger = createLogger({
  collapsed: true
})
const configureStore = () => {
  return createStore(combinedReducers, applyMiddleware(thunk, logger))
}

export default configureStore