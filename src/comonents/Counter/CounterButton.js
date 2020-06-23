import React, { Component } from 'react'
import { CounterConsumer } from './CounterText'
export default class CounterButton extends Component {
  render() {
    return (
      <CounterConsumer>
        {
          ({ inCrement, deCrement }) => (
            <button onClick={ this.props.type === 'inCrement' ? inCrement : deCrement}>
              {this.props.type === 'inCrement' ? 'add': 'reduce'}
            </button>
          )
        }
      </CounterConsumer>
    )
  }
}
