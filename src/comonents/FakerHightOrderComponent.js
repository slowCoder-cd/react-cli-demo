import React, { Component } from 'react'

// 仿制一个高阶组件
const FekerHight = (InComponent) => {
  class myComponent extends Component {
    render() {
      return (
        <div>
          <InComponent/>
          <p>&copy;slowCoder</p>
        </div>
      )
    }
  }
  return myComponent
}

export default FekerHight
