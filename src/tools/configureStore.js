import { createStore } from 'redux'
import scriptupApp from '../reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
    const persistedState = loadState()
    const store = createStore(
        scriptupApp,
        persistedState
        // applyMiddleware(thunk)
    );

    store.subscribe(() => {
        saveState(store.getState())
    })
    return store
}
export default configureStore