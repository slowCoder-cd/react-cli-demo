import React, { Component } from 'react'
import FekerHight from './comonents/FakerHightOrderComponent' // 引入 仿制高阶组件的函数
// 生命周期钩子函数 Mounting（加载阶段）Updating（更新阶段）Unmounting（卸载阶段）
/**
 * 载入阶段 constructor render componentDidMount( ajax请求) 
 * static-getDerivedStateFromProps() 不推荐使用 参数(nextProps, prevState)
 * componentWillMount()/UNSAFE_componentWillMount() - 在挂载前调用 - 该方法已被废弃，官方说法是在 react 17 中会被弃用
 * 
 *  */ 

/**
 * 更新阶段
 * shouldComponentUpdate()- 此方法仅作为[性能优化的方式]而存在默认该方法返回的是 true，即每次在 状态更新后都会调用 render() 重新渲染。如果返回值为 false，则中断组件渲染（不会向继 续调用到 render() 重新渲染）
 * componentDidUpdate 在更新后会被立即调用
 * 
 */
export default class App extends Component {
  constructor() { // 加载的时候调用一次，可以初始化state
    super()
    this.state = {
      count: 1
    }
    console.log('constructor .....')
  }

  // -- 不推荐使用 会在调用 render 方法之前调用 在初始挂载及后续更新时都会被调用
  static getDerivedStateFromProps() {
    console.log('static getDerivedStateFromProps ............')
    return null
  } 

  // 在挂载前调用 将被废弃
  // componentWillMount() {
  //   console.log('11')
  // }

  // 挂载之后
  componentDidMount() {
    console.log('componentDidMount .............')
  }

  //
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate .....')
    return true
  }
  componentDidUpdate() {
    console.log('componentDidUpdate ....')
  }
  render() {
    console.log('render .........')
    return( 
      <h1>
        app , life cycle hook function ---- {this.state.count}<br/>
        <button
          onClick={() => { this.setState({ count: ++this.state.count})}}
        >add-count</button>
      </h1>
    )
  }
}

export const CopyApp = FekerHight(App)