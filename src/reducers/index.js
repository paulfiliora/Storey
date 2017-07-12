import { combineReducers } from 'redux'
import firebaseDB from './firebaseDb'
import firebaseAuth from './firebaseAuth'

import watson from './watson'

const rootReducer = combineReducers({
  firebaseDB,
  firebaseAuth,
  watson
})

export default rootReducer