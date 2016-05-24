import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoHeader from '../components/TodoHeader'
import * as TodoActions from '../actions/todo'

class Todo extends Component {
  render () {
    return (
      <div className="ws-todo-container">
        <TodoHeader />
      </div>
    )
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Todo
