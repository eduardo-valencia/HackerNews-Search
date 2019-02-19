import React, { Component } from 'react'

export class Article extends Component {
  render() {
    const { heading, author, url } = this.props
    return (
      <div className='my-4 px-3 py-4 text-center article'>
        <h1 className="display-4">{heading}</h1>
        <p className="text-muted text-uppercase">{author}</p>
        <a href={url}>View Article</a>
      </div>
    )
  }
}

export default Article
