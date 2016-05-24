import React, { PropTypes, Component } from 'react'

class TodoHeader extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  render () {
    return (
      <div className="todo-header">
        <h1>Todo List</h1>
        <input type="text" autoFocus="true"
               value={this.state.text}
               placeholder="What needs to be done?"
               onBlur={this.handleBlur.bind(this)}
               onChange={this.handleChange.bind(this)}
               onKeyDown={this.handleKeyDown.bind(this)}
        />
      </div>
    )
  }

  handleBlur (e) {

  }

  handleKeyDown (e) {

  }

  handleChange (e) {

  }

  handleSave (text) {
    if (text.length !== 0) this.props.addTodo(text)
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoHeader
