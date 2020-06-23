import React, { Component } from 'react'
import { CounterConsumer } from './CounterText'
// 引入context 数据的使用组件 组件内用 {} 使用箭头函数 返回 一个dom结构 可以用全局数据和方法
export default class CounterContent extends Component {
  render() {
    return (
      <CounterConsumer>
        {
          ({ count }) => (
          <div>商品数量：{ count }</div>
          )
        }
      </CounterConsumer>
    )
  }
}
