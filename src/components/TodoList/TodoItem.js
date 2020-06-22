import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { title, completed } = this.props
    return (
      <li>
        <p>标题：{title}</p>
        <p>状态：{completed?'已完成': '未完成'}</p>
        <p>
          <button>标记为{completed?'未': '已'}完成</button>
          <button>删除</button>
        </p>
      </li>
    )
  }
}
