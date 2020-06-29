import { combineReducers } from 'redux'
import todos from './todos'

// 将多个reducer 合并 成一个 reducer
export default combineReducers({
  todos
})