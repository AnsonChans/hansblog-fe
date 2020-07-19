import {
    // applyMiddleware,
    // compose,
    createStore as createReduxStore,
} from 'redux'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
// import rootSaga from '../sagas'

export function createStore(initialState) {
    // let composeEnhancers = compose
    // const sagaMiddleware = createSagaMiddleware()

    const store = createReduxStore(
        rootReducer,
        initialState,
        // composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    // sagaMiddleware.run(rootSaga)
    return store
}
