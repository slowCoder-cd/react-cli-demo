import React, { Component, createContext } from 'react'

// 用于创建 Content
// createContext
const {
  Provider,
  Consumer: CounterConsumer
} = createContext
// 定义一个 CounterProvider 类
// 这个组件会提供Counter 计数器中所使用到的数据及操作方法
class CounterProvider extends Component {
  state = {
    count: 1
  }

  // 实现数量加操作
  inCrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  // 实现数量减操作
  deCrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <Provider value={{
          count: this.state.count,
          inCrement: this.inCrement,
          deCrement: this.deCrement
        }}>
          {this.props.children}
        </Provider>
      </div>
    )
  }
}
// 将购物车计数器中使用到的数据提供者。数据使用者导出
export {
  CounterProvider,
  CounterConsumer
}
