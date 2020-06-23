// 生命周期钩子函数的使用
import React from 'react'
import { render } from 'react-dom'
// import App from './AppLifeHook'
import {CopyApp} from './AppLifeHook'

render(
  // <App/>,
  <CopyApp/>,
  document.getElementById('root')
)
