import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'

export default class TodoItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      data: props.data
    }
  }

  render () {
    let todo = this.state.data

    return (
      <li>
        <span
          className={`checkbox ${todo.done ? 'done' : ''}`}
          onClick={() => {
            this.setState(update(this.state, {
              data: {
                $merge: {
                  done: !this.state.data.done
                }
              }
            }), () => {
              this.props.onChange(this.state.data)
            })
          }}>
          {todo.done ? '✓' : ''}
        </span>
        <p className={`content ${todo.done ? 'done' : ''}`}>{todo.text}</p>
          <span className='del' onClick={this.props.onDelete.bind(this)}>✕</span>
      </li>
    )
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.data
    })
  }
}