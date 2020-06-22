// 通常React 通常必须引入 react 包 因为在React 中有一种叫JSX 的语法
import React from 'react'
// 这个包主要作用是 生成渲染DOM 树
import ReactDOM from 'react-dom'

import App from './classComponent' // 引入类组件 
import { Frag, Frageasy} from './Fragement'
import craEle from './createElement'
// 可以使用变量保存 jsx 表达式
const app = <h2> 这是变量 保存的 jsx 表达式</h2>

// 可以定义函数组件 注意： 组件首字母必须大写
const Hello = props => <h2>这是函数组件</h2>

ReactDOM.render(
  // js 代码块 可以书写 html 标签 这就是 jsx
  // 在jsx 中可以插入js 表达式的内容 使用 {} 来插入即可
<div>
  <h1>欢迎来到React 世界{ 3 + 2 }</h1>
  {app}
  <Hello></Hello>
  <App></App>
  <Frag></Frag>
  <Frageasy></Frageasy>
  {craEle}
</div>,
  document.getElementById('root')
)