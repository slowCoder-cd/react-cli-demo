import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>待办事项列表</h1>
        <ul>
          { this.props.todos.map(todo => <TodoItem key={todo.get('id')} { ...todo.toJS() } />) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  todos: state.todos
})

// connect 是将 react 组件与 redux 的 store 连接
// mapStateToProps 是将 store 中 state 里的某些状
// 态数据映射到 react 组件的 this.props 属性中
export default  connect(mapStateToProps)(TodoList)
