import React, { Component } from 'react'

export default class TodoInput extends Component {
  // 状态数据
  state = {
    inputValue: ''
  }
  // 成员方法 此时this 为 undefind 需要改变this指向
  //  1 改变this 调用bind apply 等
  //  2 es7 新方法 addHandler = () => {}
  addHandler() {
    // console.log('添加')
    // console.log(this.state)
    // 调用 父组件 传递的 props 函数 
    this.props.onAddTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }
  // 数据双向绑定 动态绑定属性value 事件onChange
  // 要修改 state 状态数据 必须使用 setState() 方法
  // setState() 修改状态数据 会导致组件重新渲染 (即调用render)
  changeHandler = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="请输入新的待办事项"
          value={ this.state.inputValue }
          onChange={ this.changeHandler }
        />
        <button onClick={ this.addHandler.bind(this) }>添加</button>
      </div>
    )
  }
}
