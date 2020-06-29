/* action-creater：函数，返回 action 对象 */
import { getTodos } from '../api/todos'
import { ADD_TODO_ITEM, TOGGLE_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODOS } from "./action-type";

let index = 200

/**
 * 添加待办事项
 */
export const addTodoItem = title => ({
  type: ADD_TODO_ITEM,
  payload: {
    id: ++index,
    title,
    completed: false
  }
})

/**
 * 切换待办事项状态
 * @param {*} id 
 */
export const toggleTodoItem = id => ({
  type: TOGGLE_TODO_ITEM,
  payload: {
    id
  }
})

/**
 * 删除待办事项
 * @param {*} id 
 */
export const deleteTodoItem = id => ({
  type: DELETE_TODO_ITEM,
  payload: {
    id
  }
})

// 异步 diaptch(action)，从 api 接口获取初始化的 todos 数组数据
export const initTodos = () => {
  return dispatch => {
    getTodos().then(res => {
      // res 就是接口响应返回的 todos 数组内容
      dispatch({
        type: INIT_TODOS,
        payload: res.list
      })
    })
  }
}

