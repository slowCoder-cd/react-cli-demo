import React, { Component } from 'react'
import { CounterProvider } from './comonents/Counter/CounterText' // 实现数据共享
import CounterButton from './comonents/Counter/CounterButton'
import CounterContent from './comonents/Counter/CounterContent'
export default class App extends Component {
  render() {
    return (
      <CounterProvider>
        <CounterContent/>
        <CounterButton type="inCrement"/>
        <CounterButton />
      </CounterProvider>
    )
  }
}
