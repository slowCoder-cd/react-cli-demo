import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  // 组件自身内部所要用到的数据 state 需要bebal 转化器
  // 也可以放在 constructor 构造器里
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     todo: []
  //   }
  // }
  state = {
    todos:[  // 存放所有待办事项
      {
        id: 1,
        title: '切饭',
        completed: true
      },
      {
        id: 2,
        title: '睡瞌睡',
        completed: true
      },
      {
        id: 3,
        title: '敲代码',
        completed: true
      }
    ]
  }
  // 全局id
  index = 3
  // 添加待办事项函数 利用props 传递给 子组件
  addTodoList = (title) => {
    if (!title) return
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: ++this.index,
          title,
          completed: false
        }
      ]
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
