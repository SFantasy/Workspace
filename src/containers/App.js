import React, { Component } from 'react'
import { Link } from 'react-router'
import Todo from './Todo'
import Space from './Space'

export default class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main className='container'>
        <header className='ws-header'>
          <div className='ws-header__left'>
            <Link to='/settings' className='ws-link' style={{marginRight: '.5rem'}}><span className='octicon octicon-three-bars' /></Link>
            <h1 className='ws-name'>Workspace</h1>
          </div>
          <a className='ws-link' title='View on github' href='https://github.com/SFantasy/Workspace'><span className='octicon octicon-mark-github' /></a>
        </header>
        <div className='ws-container'>
          <Todo />
          <Space />
        </div>
        <footer className='ws-footer'>
          <p>Copyright &copy; 2016 <a href='http://fantasy.codes'>Fantasy Shao</a></p>
        </footer>
      </main>
    )
  }
}
