import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {/* 列表 数组长度：{this.props.todos.length} 
          展开运算符传递 props 
        */}
        {
          this.props.todos.map(todoItem => <TodoItem {...todoItem} key={todoItem.id}/>)
        }
      </ul>
    )
  }
}
