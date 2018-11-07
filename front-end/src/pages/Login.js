import React, { Component } from 'react'

import twitterLogo from '../twitter.svg'
import './Login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username } = this.state

    if (!username.length) return

    localStorage.setItem('@GoTwitter:username', username)
    this.props.history.push('/timeline')
  }

  handleInputChange = event => {    
    this.setState({ username: event.target.value })
  }

  render () {
    return (
      <div className='login-wrapper' >
        <img src={twitterLogo} alt="goTwitter"/>
        <form action="" onSubmit={this.handleSubmit}>
          <input 
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder='Nome de usuario'/>
          <button type='submit'>Entrar</button>
        </form>
      </div>
    )
  }
}

export default Login