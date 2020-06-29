import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props
    return (
      <div>
        <b style= {{margin: '10px'}}>{ id }</b>
        <span>{ title }</span>
        <span>状态：{ completed ? '已' : '未' }完成</span>
        <button  >标记为{ completed ? '未' : '已' }完成</button>
        <button>删除</button>
      </div>
    )
  }
}
