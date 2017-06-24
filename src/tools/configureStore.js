import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
    // const persistedState = loadState()
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    // store.subscribe(() => {
    //     saveState(store.getState())
    // })
    return store
}
export default configureStore

// initialState={ user: [], book: []}