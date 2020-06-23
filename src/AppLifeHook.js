import React, { Component } from 'react'
// 生命周期钩子函数 
// 载入阶段 constructor render componentDidMount
// 更新阶段 
export default class App extends Component {
  constructor() {
    super()
    console.log('constructor .....')
  }
  componentDidMount() {
    console.log('componentDidMount .............')
  }
  render() {
    console.log('render .........')
    return( 
      <h1>
        app , life cycle hook function
      </h1>
    )
  }
}