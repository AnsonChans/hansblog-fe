import { combineReducers } from 'redux'
import layout from './Layout'

const appReducer = combineReducers(
    { layout }
)

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer