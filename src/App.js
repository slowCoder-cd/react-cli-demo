import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import { initTodos } from './actions/todos' 
// import { getTodos } from './api/todos'

export class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.initTodos()
    // getTodos().then(res => {
    //   console.log(res)
    // })
  }
  render() {
    return (
      <div>
        app
        <TodoList />
      </div>
    )
  }
}
const mapDispatchToProps = {
  initTodos
}

export default connect(null, mapDispatchToProps)(App)

