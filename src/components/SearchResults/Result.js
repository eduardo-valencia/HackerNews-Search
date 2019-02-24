import React, { Component } from 'react'

export class Comment extends Component {
  getResultBody = () => {
    const { title, author, secondaryInfo, text } = this.props
    return (
      <>
        <h1 className="display-4 resultTitle mb-4">{title}</h1>
        {author ? (
          <h6 className="resultInfo text-uppercase">{author}</h6>
        ) : null}
        {secondaryInfo ? (
          <p className="resultInfo text-uppercase">{secondaryInfo}</p>
        ) : null}
        {text ? <p className="resultText">{text}</p> : null}
      </>
    )
  }

  getResultFooter = () => {
    const { url, componentDisplayName } = this.props
    return url ? (
      <a
        href={url}
        className="btn btn-custom-secondary text-white py-3 d-block w-25 mx-auto"
      >
        View {componentDisplayName}
      </a>
    ) : null
  }

  render() {
    return (
      <div className="my-5 result-container rounded shadow">
        <div className="px-4 py-4">{this.getResultBody()}</div>
        <div className="result-container-footer py-3">
          {this.getResultFooter()}
        </div>
      </div>
    )
  }
}

export default Comment
