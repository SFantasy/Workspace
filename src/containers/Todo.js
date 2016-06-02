import React, { PropTypes, Component } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import update from 'react/lib/update'

const TODO_STORE_KEY = 'WORKSPACE_TODO_LIST'

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    let todos = localStorage.getItem(TODO_STORE_KEY)

    if (todos) {
      this.setState({
        todos: JSON.parse(todos)
      })
    }
  }

  render () {
    return (
      <div className='ws-todo-container'>
        <TodoHeader addTodo={this.handleSave.bind(this)} />
        <TodoList todos={this.state.todos} onChange={this.saveTodos.bind(this)} />
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

    this.saveTodos(update(this.state, {
      todos: {
        $push: [todo]
      }
    }))
  }

  saveTodos (state) {
    this.setState(state, () => {
      localStorage.setItem(TODO_STORE_KEY, JSON.stringify(state['todos']))
    })
  }
}

export default Todo
