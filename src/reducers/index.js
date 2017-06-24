import { combineReducers } from 'redux'
import firebaseDB from './firebase'
import watson from './watson'

const rootReducer = combineReducers({
  firebaseDB,
  watson
})

export default rootReducer