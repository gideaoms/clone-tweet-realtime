import React, { Component } from 'react'

import like from '../like.svg'
import './Tweet.css'
import api from '../services/api';

class Tweet extends Component {

  handleLike = async () => {
    const { _id } = this.props.tweet

    await api.post(`likes/${_id}`)
  }

  render () {
    const { author, content, likes } = this.props.tweet
 
    return (
      <li className='tweet'>
        <strong>{author}</strong>
        <p>{content}</p>
        <button type='submit' onClick={this.handleLike}>
          <img src={like} alt="like"/>
          {likes}
        </button>
      </li>
    )
  }
}

export default Tweet