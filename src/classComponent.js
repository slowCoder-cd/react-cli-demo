import React, { Component } from 'react'

class App extends Component {
  render() {
    // 如果需要从组件的属性 中获取 属性值 则使用this.props.<pro-name> 来获取
    return <h3>
      这是class组件类 的写法 定义组件类，继承 Component 基类，必须重写render 方法 render() 内部返回 继承渲染的 DOM 结构（jsx）
    </h3>
  }
}

export default App
