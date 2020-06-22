import React, { Component, Fragment } from 'react'

// jsx 语法中 如果需要书写多个节点 ，必须使用单个根元素
// 如果不希望在渲染后的 dom 节点出现包裹元素标签 则可以加入 Fragement
// 不想import 进来 可以使用 <></> 代替 Fragement 
class Frag extends Component {
  render() {
    return <Fragment>
      <br></br>
      <h3>这是 没有包裹的元素</h3>
    </Fragment>
  }
}
class Frageasy extends Component {
  render() {
    return <>
      <h3>
        这是另外一种 更简易的 没有包裹的元素 写法
      </h3>
    </>
  }
}
export { Frag, Frageasy }