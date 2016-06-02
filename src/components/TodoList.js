import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'

export default class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: props.todos
    }
  }

  render () {
    return (
      <ul className='todo-list'>
        {this.state.todos.map((todo, index) =>
          <li key={index}>
            <span className={`checkbox ${todo.done ? 'done' : ''}`}
                  onClick={() => {
                    this._update(update(todo, {
                      done: {
                        $set: !todo.done
                      }
                    }), index)
                  }}>
              {todo.done ? '✓' : ''}
            </span>
            <p className={`content ${todo.done ? 'done' : ''}`}>{todo.text}</p>
          </li>
        )}
      </ul>
    )
  }

  _update (todo, index) {
    this.setState(update(this.state, {
      todos: {
        $splice: [
          [index, 1],
          [index, 0, todo]
        ]
      }
    }))
  }

  componentWillReceiveProps (props) {
    this.setState({
      todos: props.todos
    })
  }
}
