import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'

export default class TodoItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      data: props.data,
      time: props.data.time,
      counting: false
    }
  }

  render () {
    let todo = this.state.data
    let hover = this.state.hover

    return (
      <li
        onMouseOver={() => {
          this.setState({
            hover: true
          })
        }}
        onMouseLeave={() => {
          this.setState({
            hover: false
          })
        }}
      >
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
        <div className='todo-actions'>
          <span className='count'
                onClick={() => {
                  this.setState({
                    counting: !this.state.counting
                  }, () => {
                    this._countingTime()
                  })
                }}>{this.state.counting ? 'PAUSE' : 'START'}</span>
          <span className='time'>{this._format(this.state.time)}</span>
          <span className='del' onClick={this.props.onDelete.bind(this)}>✕</span>
        </div>
      </li>
    )
  }

  _format (time) {
    let m = Math.floor(time % 3600 / 60);
    let s = Math.floor(time % 3600 % 60);
    return `${(m < 10 ? '0' : '') + m}:${(s < 10 ? '0' : '') + s}`;
  }

  _countingTime () {
    let counting = this.state.counting

    if (counting) {
      this.countingInterval = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        })
      }, 1000)
    } else {
      clearInterval(this.countingInterval)

      this.setState(update(this.state, {
        data: {
          time: {
            $set: this.state.time
          }
        }
      }), () => {
        this.props.onChange(this.state.data)
      })
    }

  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.data
    })
  }
}