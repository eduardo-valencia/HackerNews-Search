import React, { Component } from 'react'

export class Comment extends Component {
  render() {
    const {
      title,
      url,
      text,
      author,
      secondaryInfo,
      componentDisplayName
    } = this.props

    return (
      <div className="my-4 px-3 py-4 text-center article">
        <h1 className="display-4">{title}</h1>
        {author ? (
          <h6 className="text-muted text-uppercase">{author}</h6>
        ) : null}
        {secondaryInfo ? (
          <p className="text-muted text-uppercase">{secondaryInfo}</p>
        ) : null}
        {text ? <p>{text}</p> : null}
        {url ? <a href={url}>View {componentDisplayName}</a> : null}
      </div>
    )
  }
}

export default Comment
