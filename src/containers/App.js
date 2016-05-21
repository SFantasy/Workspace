import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {

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
        <footer className='ws-footer'>
          <p>Copyright &copy; 2016 <a href='http://fantasy.codes'>Fantasy Shao</a></p>
        </footer>
      </main>
    )
  }
}
