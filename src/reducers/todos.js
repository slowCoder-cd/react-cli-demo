import { ADD_TODO_ITEM, TOGGLE_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODOS } from "../actions/action-type"
import { Map, List } from 'immutable'

// const initialState = []
// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case INIT_TODOS: // 初始化 todos 状态
//       return payload
//     case ADD_TODO_ITEM: // 添加新待办事项
//       return [
//         ...state,
//         payload
//       ]
//     case TOGGLE_TODO_ITEM: // 切换状态
//       return state.map(todo => {
//         if (todo.id === payload.id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//     case DELETE_TODO_ITEM: // 删除待办事项
//       return state.filter(todo => todo.id !== payload.id)
//     default:
//       return state
//   }
// }

/**
 * ****************************************************************************************************************
 */
const initialState = List([]) // 将原生js中数组包装到 Immutable 的 List 中
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_TODOS: // 初始化 todos 状态
      // console.log(payload)
      return List(payload.map(todo => Map(todo)))
    case ADD_TODO_ITEM: // 添加新待办事项
      return [
        ...state,
        payload
      ]
    case TOGGLE_TODO_ITEM: // 切换状态
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    case DELETE_TODO_ITEM: // 删除待办事项
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state
  }
}
