import React, { Component } from 'react'
import propTypes from 'prop-types'
// props 实现父子通信
// npm i prop-type -S 用于运行时检测属性类型
// props.children属性 获取父组件传递给子组件标签内部嵌套元素
export default class TodoHeader extends Component {
  // 设置属性默认值
  // 静态属性 defaultProps 来设置
  static defaultProps = {
    title: '待办事项列表',
    subtitle: '今日事今日毕'
  }
  // 设置 检测属性类型 静态属性 PropTypes
  static propTypes = {
    title: propTypes.string
  }
  render() {
    return (
      <>
        {
          this.props.children?
          this.props.children:
          <div>
            <h1>主标题：{this.props.title}</h1>
            <h2>副标题：{this.props.subtitle}</h2>
          </div>
        }
      </>
      
    )
  }
}
