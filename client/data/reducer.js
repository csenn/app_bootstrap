import { combineReducers } from 'redux-immutablejs'
import homeReducer from '../home/data/reducer'

export default combineReducers({
  home: homeReducer
})
