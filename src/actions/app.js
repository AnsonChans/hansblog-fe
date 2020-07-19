import { createActions } from 'redux-actions'
import { SET_MENU_KEY } from '../constants/actionTypes'

const { setMenuKey } = createActions({
  [SET_MENU_KEY]: undefined,
})

export { setMenuKey }
