import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
 } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import Notfound from './views/Notfound'
import Categorie from './views/categories'

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li >
            <Link to="/home">首页</Link>
          </li>
          <li >
          <Link to="/login">登录</Link>
          </li>
          <li >
          <Link to="/categorie">分类</Link>
          </li>
        </ul>
        <p>--------------------------------</p>
        <Switch>
          <Route path="/home" component={ Home}/>
          <Route path="/login" component={ Login}/>
          <Route path="/categorie" component={ Categorie}/>
          <Route path="/404" component={ Notfound}/>
          <Redirect from="/" to="/home" exact/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    )
  }
}
