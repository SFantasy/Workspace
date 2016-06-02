import React, { PropTypes, Component } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import update from 'react/lib/update'

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className='ws-todo-container'>
        <TodoHeader addTodo={this.handleSave.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

  handleSave (text) {
    let todo = {
      id: this.state.todos.length,
      text: text,
      done: false,
      time: 0
    }

    this.setState(update(this.state, {
      todos: {
        $push: [todo]
      }
    }))
  }
}

export default Todo
