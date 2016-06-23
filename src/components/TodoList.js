import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'
import TodoItem from './TodoItem'

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
          <TodoItem
            key={index}
            data={todo}
            onChange={data => {
              this._update(data, index)
            }}
            onDelete={() => {
              this._delete(index)
            }}
          />
        )}
      </ul>
    )
  }

  _delete (index) {
    this.setState(update(this.state, {
      todos: {
        $splice: [
          [index, 1]
        ]
      }
    }), () => {
      this.props.onChange(this.state)
    })
  }

  _update (todo, index) {
    this.setState(update(this.state, {
      todos: {
        $splice: [
          [index, 1],
          [index, 0, todo]
        ]
      }
    }), () => {
      this.props.onChange(this.state)
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      todos: props.todos
    })
  }
}
