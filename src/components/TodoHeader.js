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
      <div className='todo-header'>
        <h2 className='ws-h2'>Todo List</h2>
        <div className='todo-header__container'>
          <input type='text' autoFocus='true'
                 value={this.state.text}
                 placeholder='What needs to be done?'
                 onChange={this.handleChange.bind(this)}
                 onKeyDown={this.handleKeyDown.bind(this)}
          />
          <button className='todo-header__btn' onClick={this.handleSave.bind(this)}>ADD</button>
        </div>
      </div>
    )
  }

  handleKeyDown (e) {
    if (e.which === 13) {
      this.handleSave()
    }
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSave () {
    let text = this.state.text.trim()

    if (text.length !== 0) {
      this.setState({
        text: ''
      })

      this.props.addTodo(text)
    }
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoHeader
