import React, { Component, PropTypes } from 'react'

export default class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: props.todos
    }
  }

  render () {
    return (
      <ul className="todo-list">
        {this.state.todos.map((todo, index) =>
          <li key={index}>
            {todo.text}
          </li>
        )}
      </ul>
    )
  }

  componentWillReceiveProps (props) {
    this.setState({
      todos: props.todos
    })
  }
}