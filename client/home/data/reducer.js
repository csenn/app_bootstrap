import { createReducer } from 'redux-immutablejs'
import * as actions from './actions'

const initialState = {
  items: []
}

export default createReducer(initialState, {
  [actions.HOME_ADD_ITEM]: ($$state, action) => {
    return $$state.updateIn(['items'], $$items => $$items.push(action.payload))
  }
})
