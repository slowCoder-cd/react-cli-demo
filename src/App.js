import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'antd/dist/antd.css'

export default class App extends Component {
  
  state = {
    todos: []
  }
  componentDidMount() {
    const oldTodos = [  // 存放所有待办事项
      {
        id: 1,
        title: '切饭',
        completed: true
      }
    ]
    const newTodos = JSON.parse(sessionStorage.getItem('todos'))
    if (newTodos) {
      this.setState({
        todos: newTodos
      })
    } else {
      this.setState({
        todos: oldTodos
      })
    }
    
  }
  // 添加待办事项函数 利用props 传递给 子组件
  addTodoList = (title) => {
    if (!title) return
    let id = parseInt(Math.random() * 100)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: ++id,
          title,
          completed: false
        }
      ]
    }, () => {
      // 存储在 会话存储中
      window.sessionStorage.setItem('todos',JSON.stringify(this.state.todos))
    })
  }
  // 改变完成状态
  changeComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    }, () => {
      window.sessionStorage.setItem('todos',JSON.stringify(this.state.todos))
    })
  }
  // 删除 一个待办事项列表
  removeTodoList = id => {
    const newTodos = this.state.todos.filter(item => item.id !== id)
    // console.log('remove')
    this.setState({
      todos: [
        ...newTodos
      ] 
    }, () => {
      window.sessionStorage.setItem('todos',JSON.stringify(this.state.todos))
    })
  }
  render() {
    return (
      <div>
        <TodoHeader>
          <h1>主标题：待办事项列表</h1>
          <h2>副标题：today</h2>
        </TodoHeader>
        <TodoInput onAddTodo={this.addTodoList}/>
        <TodoList todos={ this.state.todos } removeItem={this.removeTodoList} changeComplete={this.changeComplete}/>
      </div>
    )
  }
}
