import React, { Component } from 'react'

export default class TodoItem extends Component {
  // 删除 一个待办事项
  removeTodoItem = () => {
    const { id } = this.props
    // console.log(this.props)
    this.props.removeItem(id)
  }
  render() {
    const { title, completed } = this.props
    return (
      <li style={{ width:'25%', textAlign:'center', listStyle:'none' }}>
        <p>标题：{ title }</p>
        <p>状态：{ completed?'已完成': '未完成' }</p>
        <p>
          <button>标记为{ completed?'未': '已' }完成</button>
          <button onClick={ this.removeTodoItem }>删除</button>
        </p>
      </li>
    )
  }
}
