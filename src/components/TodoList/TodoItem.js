import React, { Component } from 'react'
import { Card, Button } from 'antd'

export default class TodoItem extends Component {
  // 删除 一个待办事项
  removeTodoItem = () => {
    const { id } = this.props
    // console.log(this.props)
    this.props.removeItem(id)
  }
  changeState = () => {
    const { id } =  this.props
    this.props.changeComplete( id )
  }
  render() {
    const { title, completed } = this.props
    return (
      <Card title={ title }  style={{ width:'24%', textAlign:'center',margin:8 }}>
        <p>
            <Button type="primary" style={{ marginRight:10 }}  onClick={ this.changeState }>标记为{ completed?'未': '已' }完成</Button>
            <Button type="default" onClick={ this.removeTodoItem }>删除</Button >
          </p>
      </Card>
    )
  }
}
