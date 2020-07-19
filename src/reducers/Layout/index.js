import { handleActions } from 'redux-actions'
import { SET_MENU_KEY } from 'constants/actionTypes'
export const initialState = {
    selectKey: '1'
}

const layout = handleActions({
    [SET_MENU_KEY]: (state, { payload }) => ({
        ...state,
        ...payload,
    })
}, initialState)

export default layout